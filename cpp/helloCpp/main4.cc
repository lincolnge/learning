/***C/C++  http://bbs.csdn.net/topics/100091584***/
#include <stdio.h>
#include <stdlib.h>
/***freeglut***/
//#include <OpenGL/gl.h>
//#include <GLUT/glut.h>



//#include <GL/glew.h>

//include opengl
#include <GLUT/glut.h>
// #include <glm/glm.hpp>
//#include <GL/freeglut.h>
//#include <GL/glut.h>
#include <GLFW/glfw3.h>
// #include "model.h"
//include standarad lib
#include <iostream>
#include <vector>
using namespace std;

#define PI 3.14159265

//declare function
void ChangeSize(int , int );
void RenderScene(void);
void buildPopupMenu();
void cube_generator(float, float, float);
void line_generator(float, float, float, float, float, float);
void keyboardFunc(unsigned char , int , int );
void cube_transform_modifier(vector<GLfloat>);
void rotate_anyAxis(GLfloat , GLfloat , GLfloat , GLfloat );
void mouseClicks(int , int, int , int);
void menu(int num);
GLfloat * ScaleMatrix_tool(float, float, float, GLfloat[]);
GLfloat * RotateMatrix_X_tool(float, GLfloat[]);
GLfloat * RotateMatrix_Y_tool(float, GLfloat[] );
GLfloat * RotateMatrix_Z_tool(float, GLfloat[] );
GLfloat * TranslateMatrix_tool(float , float , float , GLfloat[]);




void init(void);
float _x,_y,_z=0;
float point_x,point_y,point_z = 0;
GLfloat _angle;
vector<GLfloat> cube_transform;
vector<GLfloat> origin_cube_transform = {
    0.0,0.0,0.0,
    0.0,0.0,0.0,
    1.0,1.0,1.0
};
static int window;
static int menu_id;
static int submenu_id;
static int value = 0;

int colorMenu, modelMenu;



int main(int argc, char** argv)
{
  
    //create a new glut
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);
    glutInitWindowSize(400,400);
    glutInitWindowPosition(600,80);
    glutCreateWindow("Simple Rectangle");
    glutReshapeFunc(ChangeSize);
    
    init();
    glutKeyboardFunc(keyboardFunc);
    buildPopupMenu();
    glutMouseFunc(&mouseClicks);
    glutDisplayFunc(RenderScene); //render 資訊寫在這裡
    
    
    
    //register callbacks function
    //reshape window size (每次調整視窗大小都會呼叫）
    
    
    glutMainLoop(); //啟動所有call back function
   return 0;
}
void init()
{
    origin_cube_transform = {
        0.0,0.0,0.0,
        0.0,0.0,0.0,
        1.0,1.0,1.0
    };

    cube_transform = origin_cube_transform;
    point_x,point_z = 0;
    point_y = 1;
}

void mouseClicks(int button, int state, int x, int y)
{
    if(button == GLUT_LEFT_BUTTON && state == GLUT_DOWN)
    {
        
        float w = glutGet(GLUT_WINDOW_WIDTH)/2;
        float h = glutGet(GLUT_WINDOW_HEIGHT)/2;
        
        
        point_x = 10*(x-w)/w;
        point_y = 10*(h-y)/h;
        
        std::cout << "point_x : " << point_x << " point_Y : " << point_y << "\n";
    }
    
}
void menuSelect(int option)
{
    switch(option)
    {
    case 0:
        glShadeModel(GL_FLAT);
        glutPostRedisplay();
        break;
    case 1:
        glShadeModel(GL_SMOOTH);
        glutPostRedisplay();
        break;
    case 2:
           glShadeModel(GL_SMOOTH);
           glutPostRedisplay();
           break;
    default:
        break;
    }
}
void keyboardFunc(unsigned char key, int x, int y)
{
    std::cout << "pressed button :" << key << " " <<"\n";
    std::cout << "position" << cube_transform[0] << " "<< cube_transform[1] << " " << cube_transform[2] << "\n";
    std::cout << "rotation" << cube_transform[3] << " "<< cube_transform[4] << " " << cube_transform[5] << "\n";
    std::cout << "scale" << cube_transform[6] << " "<< cube_transform[7] << " " << cube_transform[8] << "\n";
    switch (key) {
        case 'a':
            cube_transform[0]-=1;
            break;
        case 'd':
            cube_transform[0] += 1;
            break;
            
        case 'w':
            cube_transform[1]+=1;
            break;
            
        case 's':
            cube_transform[1]-=1;
            break;
            
        case 'z':
            cube_transform[2]+=1;
            break;
        case 'x':
            cube_transform[2]-=1;
            break;
            
        case 'r':
            cube_transform[3]+=1;
            break;
        case 'f':
            cube_transform[3]-=1;
            break;
            
        case 't':
            cube_transform[4]+=1;
            break;
        case 'g':
            cube_transform[4]-=1;
            break;
            
        case 'y':
            cube_transform[5]+=1;
            break;
        case 'h':
            cube_transform[5]-=1;
            break;
            
            case 'u':
                cube_transform[6]+=1;
                break;
            case 'j':
                cube_transform[6]-=1;
                break;
                
            case 'i':
                cube_transform[7]+=1;
                break;
            case 'k':
                cube_transform[7]-=1;
                break;
                
            case 'o':
                cube_transform[8]+=1;
                break;
            case 'l':
                cube_transform[8]-=1;
                break;
        default:
            cube_transform = origin_cube_transform;
            break;
    }
    RenderScene();
}

void menu(int num){
  if(num == 0){
    glutDestroyWindow(window);
    exit(0);
  }else{
    value = num;
  }
  glutPostRedisplay();
}

void buildPopupMenu()
{
    int second_submenu = glutCreateMenu(menu);
    glutAddMenuEntry("Sphere", 2);
    glutAddMenuEntry("Cone", 3);
    glutAddMenuEntry("Torus", 4);
    glutAddMenuEntry("Teapot", 5);
   
    submenu_id = glutCreateMenu(menu);
    glutAddMenuEntry("Sphere", 2);
    glutAddMenuEntry("Cone", 3);
    glutAddMenuEntry("Torus", 4);
    glutAddMenuEntry("Teapot", 5);
    
    menu_id = glutCreateMenu(menu);
    glutAddMenuEntry("Clear", 1);
    glutAddSubMenu("Draw", submenu_id);
    glutAddSubMenu("Second_Draw", second_submenu);
    glutAttachMenu(GLUT_RIGHT_BUTTON);

}

void ChangeSize(int w, int h)
{
   printf("Window Size= %d X %d\n",w,h);
    //viewport = canvas
   glViewport(0, 0, w, h);
   glMatrixMode(GL_PROJECTION);
   glLoadIdentity();
   glOrtho(-10,10,-10,10,-10,10);
   glMatrixMode(GL_MODELVIEW);
   glLoadIdentity();
}
void RenderScene(void)
{
   
   glClearColor(1.0, 1.0, 1.0, 1.0);
   glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
   glDepthFunc(GL_LESS);
   glEnable(GL_DEPTH_TEST);
   
   
    
    //init transform
    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();
   
    //draw axis
    line_generator(10.0,0.0,0.0,-10.0,0.0,0.0);
    line_generator(0.0,10.0, 0, 0, -10.0,0);
    line_generator(0.0,0.0,10.0, 0.0,0.0,-10.0);
    line_generator(0.0, 0.0, 0.0, point_x, point_y, point_z);
    
    glPushMatrix();
        cube_transform_modifier(cube_transform);
        _angle += 1;rotate_anyAxis(_angle,point_x,point_y,point_z);
        cube_generator(0, 0, 0);//create shape
    glPopMatrix();

    glFlush();
    glutPostRedisplay();//re draw again
    glutSwapBuffers();
}



void line_generator(float x, float y,float z, float x2, float y2, float z2)
{
    glBegin(GL_LINES);
        
    float r = x*x2 !=0 ? 1 : 0;
        float g = y*y2 !=0 ? 1 : 0;
        float b = z*z2 !=0 ? 1 : 0;
    
        glColor3f(r,g,b);
        glVertex3f( x, y,z);
        glVertex3f(x2,y2,z2);
    
    glEnd();
}


void cube_transform_modifier(vector<GLfloat> _transform )
{
    GLfloat identity_matrix[16];
    glMultMatrixf(ScaleMatrix_tool(_transform[6],_transform[7],_transform[8],identity_matrix));
    glMultMatrixf(RotateMatrix_X_tool(_transform[3],identity_matrix));
    glMultMatrixf(RotateMatrix_Y_tool(_transform[4],identity_matrix));
    glMultMatrixf(RotateMatrix_Z_tool(_transform[5],identity_matrix));
    glMultMatrixf(TranslateMatrix_tool(_transform[0], _transform[1], _transform[2],identity_matrix));
    
}

void rotate_anyAxis(GLfloat angle, GLfloat x, GLfloat y, GLfloat z)
{
    //perform normalize
    GLfloat length = sqrt(pow(x,2) + pow(y,2) + pow(z,2));
    x = x/length;
    y = y/length;
    z = z/length;
    
    //declare matrix & cos & sin
    GLfloat arbitary_axis_rotate_matrix[16];
    GLfloat Cos = cos(angle*PI/180);
    GLfloat Sin = sin(angle*PI/180);
    
    float x_pow_2 = pow(x,2);
    float y_pow_2 = pow(y,2);
    float z_pow_2 = pow(z,2);
    
    float one_minus_cos = 1 - Cos;
    
    //matrix content start
    
    //row 1
    arbitary_axis_rotate_matrix[0] = Cos + one_minus_cos*x_pow_2;
    arbitary_axis_rotate_matrix[4] = one_minus_cos*x*y - Sin*z;
    arbitary_axis_rotate_matrix[8] = one_minus_cos*x*z + Sin*y;
    arbitary_axis_rotate_matrix[12] = 0;
    
    //row2
    arbitary_axis_rotate_matrix[1] = one_minus_cos*x*y + Sin*z;
    arbitary_axis_rotate_matrix[5] = Cos + one_minus_cos*y_pow_2;;
    arbitary_axis_rotate_matrix[9] = one_minus_cos*y*z - Sin*x;
    arbitary_axis_rotate_matrix[13] = 0;
    
    //row3
    arbitary_axis_rotate_matrix[2] = one_minus_cos*z*x - Sin*y;
    arbitary_axis_rotate_matrix[6] = one_minus_cos*z*y + Sin*x;
    arbitary_axis_rotate_matrix[10] = Cos + one_minus_cos*z_pow_2;
    arbitary_axis_rotate_matrix[14] = 0;
    
    //row4
    arbitary_axis_rotate_matrix[3] = 0;
    arbitary_axis_rotate_matrix[7] = 0;
    arbitary_axis_rotate_matrix[11] = 0;
    arbitary_axis_rotate_matrix[15] = 1;
    
    //matrix content end
    glMultMatrixf(arbitary_axis_rotate_matrix);

}
GLfloat * ScaleMatrix_tool(GLfloat x, GLfloat y, GLfloat z, GLfloat scale_matrix[])
{
   
    scale_matrix[0] = x; scale_matrix[4] = 0;  scale_matrix[8] = 0; scale_matrix[12] = 0;
    scale_matrix[1] = 0; scale_matrix[5] = y;  scale_matrix[9] = 0; scale_matrix[13] = 0;
    scale_matrix[2] = 0; scale_matrix[6] = 0; scale_matrix[10] = z; scale_matrix[14] = 0;
    scale_matrix[3] = 0; scale_matrix[7] = 0; scale_matrix[11] = 0; scale_matrix[15] = 1;
    return scale_matrix;
}

GLfloat * RotateMatrix_X_tool(GLfloat x,GLfloat rotate_matrix_x[])
{
//    float scale_matrix[16];
    
    rotate_matrix_x[0] = 1; rotate_matrix_x[4] = 0;              rotate_matrix_x[8] = 0;              rotate_matrix_x[12] = 0;
    rotate_matrix_x[1] = 0; rotate_matrix_x[5] = cos(x*PI/180);  rotate_matrix_x[9] = -sin(x*PI/180); rotate_matrix_x[13] = 0;
    rotate_matrix_x[2] = 0; rotate_matrix_x[6] = sin(x*PI/180);  rotate_matrix_x[10] = cos(x * PI/180); rotate_matrix_x[14] = 0;
    rotate_matrix_x[3] = 0; rotate_matrix_x[7] = 0; rotate_matrix_x[11] = 0; rotate_matrix_x[15] = 1;
    return rotate_matrix_x;
}

GLfloat * RotateMatrix_Y_tool(GLfloat y,GLfloat rotate_matrix_y[])
{
//    float scale_matrix[16];
    rotate_matrix_y[0] = cos(y*PI/180); rotate_matrix_y[4] = 0;rotate_matrix_y[8] = sin(y*PI/180);   rotate_matrix_y[12] = 0;
    rotate_matrix_y[1] = 0;             rotate_matrix_y[5] = 1;rotate_matrix_y[9] =0;                rotate_matrix_y[13] = 0;
    rotate_matrix_y[2] = -sin(y*PI/180);rotate_matrix_y[6] = 0;rotate_matrix_y[10] = cos(y * PI/180);rotate_matrix_y[14] = 0;
    rotate_matrix_y[3] = 0;             rotate_matrix_y[7] = 0;rotate_matrix_y[11] = 0;              rotate_matrix_y[15] = 1;
    return rotate_matrix_y;
}

GLfloat * RotateMatrix_Z_tool(GLfloat z,GLfloat rotate_matrix_z[])
{
//    float scale_matrix[16];
    rotate_matrix_z[0] = cos(z*PI/180); rotate_matrix_z[4] = -sin(z*PI/180);rotate_matrix_z[8]=0;   rotate_matrix_z[12] = 0;
    rotate_matrix_z[1] = sin(z*PI/180); rotate_matrix_z[5] = cos(z*PI/180); rotate_matrix_z[9]=0;   rotate_matrix_z[13] = 0;
    rotate_matrix_z[2] = 0;             rotate_matrix_z[6] = 0;             rotate_matrix_z[10]=1; rotate_matrix_z[14] = 0;
    rotate_matrix_z[3] = 0;             rotate_matrix_z[7] = 0;             rotate_matrix_z[11] = 0; rotate_matrix_z[15] = 1;
    
    return rotate_matrix_z;
}
GLfloat * TranslateMatrix_tool(GLfloat x, GLfloat y, GLfloat z, GLfloat translate_matrix[])
{
       
       translate_matrix[0] = 1; translate_matrix[4] = 0; translate_matrix[8]=0;   translate_matrix[12] = x;
       translate_matrix[1] = 0; translate_matrix[5] = 1; translate_matrix[9]=0;   translate_matrix[13] = y;
       translate_matrix[2] = 0; translate_matrix[6] = 0; translate_matrix[10]=1;  translate_matrix[14] = z;
       translate_matrix[3] = 0; translate_matrix[7] = 0; translate_matrix[11]= 0; translate_matrix[15] = 1;
    return translate_matrix;
}

void cube_generator(float x, float y, float z){
    glBegin(GL_TRIANGLES);
         float width=4;
         float height=4;
         float depth=4;
    
        //    v6------v5
        //   / |      /|
        //  v1-------v0|
        //  |  |     | |
        //  |  v7----|-v4
        //  | /      |/
        //  v2-------v3
    
         
        //face 6
        glColor3f( 0, 1, 0);glVertex3f( x-width/2, y-height/2, z+depth/2 );
        glColor3f( 0, 1, 0);glVertex3f( x-width/2, y-height/2, z-depth/2 );
        glColor3f( 0, 1, 0);glVertex3f( x+width/2, y-height/2, z-depth/2 );
        
        glColor3f( 0, 1, 0);glVertex3f( x-width/2, y-height/2, z+depth/2 );
        glColor3f( 0, 1, 0);glVertex3f( x+width/2, y-height/2, z-depth/2 );
        glColor3f( 0, 1, 0);glVertex3f( x+width/2, y-height/2, z+depth/2 );
        
         
    
        //face 2
        glColor3f( 1, 1, 0);glVertex3f( x+width/2, y-height/2, z-depth/2 );
        glColor3f( 1, 1, 0);glVertex3f( x-width/2, y-height/2, z-depth/2 );
        glColor3f( 1, 1, 0);glVertex3f( x+width/2, y+height/2, z-depth/2 );

        glColor3f( 1, 1, 0);glVertex3f( x-width/2, y+height/2, z-depth/2 );
        glColor3f( 1, 1, 0);glVertex3f( x+width/2, y+height/2, z-depth/2 );
        glColor3f( 1, 1, 0);glVertex3f( x-width/2, y-height/2, z-depth/2 );
        
        //face 3
        glColor3f( 0, 1, 1);glVertex3f( x-width/2, y+height/2, z+depth/2 );
        glColor3f( 0, 1, 1);glVertex3f( x-width/2, y+height/2, z-depth/2 );
        glColor3f( 0, 1, 1);glVertex3f( x-width/2, y-height/2, z+depth/2 );

        glColor3f( 0, 1, 1);glVertex3f( x-width/2, y-height/2, z+depth/2 );
        glColor3f( 0, 1, 1);glVertex3f( x-width/2, y+height/2, z-depth/2 );
        glColor3f( 0, 1, 1);glVertex3f( x-width/2, y-height/2, z-depth/2 );
    
        //face 4
        glColor3f( 0, 0, 1);glVertex3f( x+width/2, y+height/2, z+depth/2 );
        glColor3f( 0, 0, 1);glVertex3f( x-width/2, y+height/2, z+depth/2 );
        glColor3f( 0, 0, 1);glVertex3f( x-width/2, y-height/2, z+depth/2 );

        glColor3f( 0, 0, 1);glVertex3f( x+width/2, y+height/2, z+depth/2 );
        glColor3f( 0, 0, 1);glVertex3f( x-width/2, y-height/2, z+depth/2 );
        glColor3f( 0,0, 1);glVertex3f( x+width/2, y-height/2, z+depth/2 );
    
        //face 5
        glColor3f( 1, 0, 0);glVertex3f( x+width/2, y+height/2, z-depth/2 );
        glColor3f( 1, 0, 0);glVertex3f( x-width/2, y+height/2, z+depth/2 );
        glColor3f( 1, 0, 0);glVertex3f( x+width/2, y+height/2, z+depth/2 );
        
        glColor3f( 1, 0, 0);glVertex3f( x+width/2, y+height/2, z-depth/2 );
        glColor3f( 1, 0, 0);glVertex3f( x-width/2, y+height/2, z-depth/2 );
        glColor3f( 1, 0, 0);glVertex3f( x-width/2, y+height/2, z+depth/2 );
        
        //face 1
         glColor3f( 1, 0, 1);glVertex3f( x+width/2, y+height/2, z-depth/2 );
         glColor3f( 1, 0, 1);glVertex3f( x+width/2, y+height/2, z+depth/2 );
         glColor3f( 1, 0, 1);glVertex3f( x+width/2, y-height/2, z+depth/2 );

        glColor3f( 1, 0, 1);glVertex3f( x+width/2, y+height/2, z-depth/2 );
        glColor3f( 1, 0, 1);glVertex3f( x+width/2, y-height/2, z+depth/2 );
        glColor3f( 1, 0, 1);glVertex3f( x+width/2, y-height/2, z-depth/2 );
        
    
        
      glEnd();
    
}

/* deprecated code
 
 ** cube transform modifier **
  GLfloat scale_matrix[16];
      scale_matrix[0] = _transform[6]; scale_matrix[4] = 0;  scale_matrix[8] = 0; scale_matrix[12] = 0;
      scale_matrix[1] = 0; scale_matrix[5] = _transform[7];  scale_matrix[9] = 0; scale_matrix[13] = 0;
      scale_matrix[2] = 0; scale_matrix[6] = 0;  scale_matrix[10] = _transform[8]; scale_matrix[14] = 0;
      scale_matrix[3] = 0; scale_matrix[7] = 0; scale_matrix[11] = 0; scale_matrix[15] = 1;
  
  float rotate[] = {_transform[3],_transform[4],_transform[5]};
  float x = rotate[0];
  GLfloat rotate_matrix_x[16];
      rotate_matrix_x[0] = 1; rotate_matrix_x[4] = 0;  rotate_matrix_x[8] = 0; rotate_matrix_x[12] = 0;
      rotate_matrix_x[1] = 0; rotate_matrix_x[5] = cos(x*PI/180);  rotate_matrix_x[9] = -sin(x*PI/180); rotate_matrix_x[13] = 0;
      rotate_matrix_x[2] = 0; rotate_matrix_x[6] = sin(x*PI/180);  rotate_matrix_x[10] = cos(x * PI/180); rotate_matrix_x[14] = 0;
      rotate_matrix_x[3] = 0; rotate_matrix_x[7] = 0; rotate_matrix_x[11] = 0; rotate_matrix_x[15] = 1;
  
  float y = rotate[1];
  GLfloat rotate_matrix_y[16];
     rotate_matrix_y[0] = cos(y*PI/180); rotate_matrix_y[4] = 0;rotate_matrix_y[8] = sin(y*PI/180);   rotate_matrix_y[12] = 0;
     rotate_matrix_y[1] = 0;             rotate_matrix_y[5] = 1;rotate_matrix_y[9] =0;                rotate_matrix_y[13] = 0;
     rotate_matrix_y[2] = -sin(y*PI/180);rotate_matrix_y[6] = 0;rotate_matrix_y[10] = cos(y * PI/180);rotate_matrix_y[14] = 0;
     rotate_matrix_y[3] = 0;             rotate_matrix_y[7] = 0;rotate_matrix_y[11] = 0;              rotate_matrix_y[15] = 1;
  
  float z = rotate[2];
  GLfloat rotate_matrix_z[16];
     rotate_matrix_z[0] = cos(z*PI/180); rotate_matrix_z[4] = -sin(z*PI/180);rotate_matrix_z[8]=0;   rotate_matrix_z[12] = 0;
     rotate_matrix_z[1] = sin(z*PI/180); rotate_matrix_z[5] = cos(z*PI/180); rotate_matrix_z[9]=0;   rotate_matrix_z[13] = 0;
     rotate_matrix_z[2] = 0;             rotate_matrix_z[6] = 0;             rotate_matrix_z[10]=0; rotate_matrix_z[14] = 0;
     rotate_matrix_z[3] = 0;             rotate_matrix_z[7] = 0;             rotate_matrix_z[11]= 0; rotate_matrix_z[15] = 1;
  
  float position[3] = {_transform[0], _transform[1], _transform[2]};
  GLfloat translate_matrix[16];
     translate_matrix[0] = 1; translate_matrix[4] = 0; translate_matrix[8]=0;   translate_matrix[12] = position[0];
     translate_matrix[1] = 0; translate_matrix[5] = 1; translate_matrix[9]=0;   translate_matrix[13] = position[1];
     translate_matrix[2] = 0; translate_matrix[6] = 0; translate_matrix[10]=1;  translate_matrix[14] = position[2];
     translate_matrix[3] = 0; translate_matrix[7] = 0; translate_matrix[11]= 0; translate_matrix[15] = 1;
 
 //    glMultMatrixf(scale_matrix);
 //    glMultMatrixf(rotate_matrix_x);
 //    glMultMatrixf(rotate_matrix_y);
 //    glMultMatrixf(rotate_matrix_z);
 //    glMultMatrixf(translate_matrix);
  ** end cube transform modifier **
 */
