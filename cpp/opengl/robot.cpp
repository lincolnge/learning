#include "loadBMP.h"
#include "colorpolygon.h"

static int shoulder = -90, elbow = 0, shoulderRight = -90, elbowRight = 0;
static int shoulder2 = 0, elbow2 = 0, shoulderRight2 = 0, elbowRight2 = 0;

static int leg = 0, legelbow = 0, legRight = 0, legelbowRight = 0;
static int torso = -90;

#define PI_ 3.14159265358979323846
static int du=90,oldmy=-1,oldmx=-1; //du是视点绕y轴的角度,opengl里默认y轴是上方向
static float r=1.5f,h=0.0f; //r是视点绕y轴的半径,h是视点高度即在y轴上的坐标
static float c= PI_ /180.0f; //弧度和角度转换参数
float positionx,positiony,rotax,rotay;

void init(void)
{
	//glClearColor (0.0, 0.0, 0.0, 0.0);
	//glShadeModel (GL_FLAT);
		
	glClearColor (0.0, 0.0, 0.0, 0.0);  // The glClearColor function specifies clear values for the color buffers.
	
	glLoadIdentity();
	gluLookAt(r*cos(c*du), h, r*sin(c*du), 0, 0, 0, 0, 1, 0); //从视点看远点,y轴方向(0,1,0)是上方向
    glEnable(GL_LIGHTING);  // 会起用深度测试模式
    glEnable(GL_LIGHT0);    // 调用glEnable()打开该光源
    glEnable(GL_DEPTH_TEST);
    glEnable(GL_TEXTURE_2D);    //启用二维纹理

    GLfloat light0_ambient[]  = {1, 1, 1, 1};   //环境光
    GLfloat light0_diffuse[]  = {1, 1, 1, 1};   //散射光
    GLfloat light0_position[] = {0, 5, 0, 1};   //光源位置

    // light 建立light指定的光源。light用形式为GL_LIGHTi的符号常数表示
    glLightfv(GL_LIGHT0,GL_AMBIENT,light0_ambient);
    glLightfv(GL_LIGHT0,GL_DIFFUSE,light0_diffuse);
    glLightfv(GL_LIGHT0,GL_POSITION,light0_position);
    
    LoadAllTextures();          //调入纹理
}

void display(void)
{
	// glClear (GL_COLOR_BUFFER_BIT);
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT); // The glClear function clears buffers to preset values.
	
	glDisable (GL_LIGHTING); // 光照
	GLfloat mat_ambient1[]  = {1,0,0,1};
	GLfloat mat_emission[]  = {1,1,1,0};

	//GLfloat mat_ambient2[]  = {0.4,0.4,0.8,1};
    //GLfloat  no_emission[]  = {0,0,0,1};

	glPushMatrix();
	
	glPushMatrix();	// 头
		glTranslatef (0.0, 1.5, 0.0);
		// 摆正脑袋
		glRotatef (-80, 1.0, 0.0, 0.0);
		glRotatef (194, 0.0, 0.0, 1.0);

		glBindTexture(GL_TEXTURE_2D,head->texID);
			glMaterialfv(GL_FRONT, GL_AMBIENT, mat_ambient1);
			glMaterialfv(GL_FRONT, GL_EMISSION, mat_emission);
	//	glutWireSphere(1.0, 20, 8);	 // 这是一种画球的方式，直接调用glutWireSphere
	//	gltDrawSphere2(1.0, 20, 8);
		gltDrawSphere2(1.0, 20, 40);         //绘制太阳
	glPopMatrix();
	

	glPushMatrix();	// 躯体
		glTranslatef (0.0, -1.0, 0.0);
		glScalef (1.0, 1.7, 0.5);
		colorcube(); // 上色
		//glScalef (2.0, 3.0, 1.0);
		//glutWireCube (1.0);
	glPopMatrix();
	//-----------
	glPushMatrix();	// 手臂右手 上臂
		glTranslatef (1.0, 0.5, 0.0); // 
		glRotatef ((GLfloat) shoulderRight, 0.0, 0.0, 1.0);		// 右手活动

		glRotatef ((GLfloat) shoulderRight2, 0.0, 1.0, 0.0);		// 右手活动
		glTranslatef (1.0, 0.0, 0.0);

		glPushMatrix();		// 前臂
			// glTranslatef (0.0, 2.0, 0.0);
			//glColor3f (0.0, 1.0, 1.0);	//光照之后的颜色
			//glScalef (2.0, 0.4, 1.0);
			//glutWireCube (1.0);
			glScalef (1.0, 0.4, 0.5);
			colorcube();
		glPopMatrix();

		glTranslatef (1.0, 0.0, 0.0);
		glRotatef ((GLfloat) elbowRight, 0.0, 0.0, 1.0);
		glRotatef ((GLfloat) elbowRight2, 0.0, 1.0, .0);
		glTranslatef (1.0, 0.0, 0.0);

		glPushMatrix();
			// glTranslatef (0.0, 2.0, 0.0);
			//glScalef (2.0, 0.4, 1.0);
			//glutWireCube (1.0);
			glScalef (1.0, 0.4, 0.5);
			colorcube();
		glPopMatrix();
	glPopMatrix();
//----------------
	//---------------
	glPushMatrix();	// 手臂左手
		glTranslatef (-1.0, 0.5, 0.0);
		glRotatef ((GLfloat) shoulder, 0.0, 0.0, 1.0);
		glRotatef ((GLfloat) shoulder2, 0.0, 1.0, 0.0);
		glTranslatef (1.0, 0.0, 0.0);

		glPushMatrix();
			//glScalef (2.0, 0.4, 1.0);
			//glutWireCube (1.0);
			glScalef (1.0, 0.4, 0.5);
			colorcube();
		glPopMatrix();

		glTranslatef (1.0, 0.0, 0.0);
		glRotatef ((GLfloat) elbow, 0.0, 0.0, 1.0);
		glRotatef ((GLfloat) elbow2, 0.0, 1.0, .0);
		glTranslatef (1.0, 0.0, 0.0);
		glPushMatrix();
			//glScalef (2.0, 0.4, 1.0);
			//glutWireCube (1.0);
			glScalef (1.0, 0.4, 0.5);
			colorcube();
		glPopMatrix();

	glPopMatrix();
//---------------
	//----------
	glPushMatrix();	// 右腿
		glTranslatef (0.5, -2.5, 0.0);
		glRotatef (-90, 0.0, 0.0, 1.0);
		glRotatef ((GLfloat) legRight, 0.0, 1.0, 0.0);
		glTranslatef (1.2, 0.0, 0.0);

		glPushMatrix();
		// glTranslatef (2.5, 1.5, 0.0);
			//glScalef (2.0, 0.4, 1.0);
			//glutWireCube (1.2);
			glScalef (1.0, 0.4, 0.5);
			colorcube();
		glPopMatrix();

		glTranslatef (1.0, 0.0, 0.0);
		glRotatef ((GLfloat) legelbowRight, 0.0, 1.0, 0.0);
		glTranslatef (1.0, 0.0, 0.0);
		glPushMatrix();
			// glTranslatef (2.5, 1.5, 0.0);
			//glScalef (2.0, 0.4, 1.0);
			//glutWireCube (1.0);
			glScalef (1.0, 0.4, 0.5);
			colorcube();
		glPopMatrix();

	glPopMatrix();
//-------------

	//----------
	glPushMatrix();	// 左腿
		glTranslatef (-0.5, -2.5, 0.0);
		glRotatef (-90, 0.0, 0.0, 1.0);
		glRotatef ((GLfloat) leg, 0.0, 1.0, 0.0);
		glTranslatef (1.2, 0.0, 0.0);

		glPushMatrix();
			// glTranslatef (2.5, 0.5, 0.0);
			//glScalef (2.0, 0.4, 1.0);
			//glutWireCube (1.2);
			glScalef (1.0, 0.4, 0.5);
			colorcube();
		glPopMatrix();

		glTranslatef (1.0, 0.0, 0.0);
		glRotatef ((GLfloat) legelbow, 0.0, 1.0, 0.0);
		glTranslatef (1.0, 0.0, 0.0);
		glPushMatrix();
			// glTranslatef (2.5, 0.5, 0.0);
			//glScalef (2.0, 0.4, 1.0);
			//glutWireCube (1.0);
			glScalef (1.0, 0.4, 0.5);
			colorcube();
		glPopMatrix();

	glPopMatrix();
//-------------
	glPopMatrix();
	//glutSwapBuffers();
	
	glFlush();  // 用于强制刷新缓冲，保证绘图命令将被执行，而不是存储在缓冲区[2]中等待其他的OpenGL命令。
    glutSwapBuffers();  // glutSwapBuffers函数是OpenGL中GLUT工具包中用于实现双缓冲技术的一个重要函数。该函数的功能是交换两个缓冲区指针。

}
void displayT()
{
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
	glLoadIdentity();
    gluLookAt(r*cos(c*du), h, r*sin(c*du), 0, 0, 0, 0, 1, 0); //从视点看远点,y轴方向(0,1,0)是上方向
	
//	gluLookAt (0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0);	//指定照相机的位置	
	glScalef ( 0.5,  0.5, 0.5);
	display();
	
}
/*
void reshape2 (int w, int h)
{
	glViewport (0, 0, (GLsizei) w, (GLsizei) h);
	glMatrixMode (GL_PROJECTION);
	glLoadIdentity ();
	gluPerspective(130.0, (GLfloat) w/(GLfloat) h, 1.0, 20.0);
	glMatrixMode(GL_MODELVIEW);
	glLoadIdentity();
	glTranslatef (0.0, 0.0, -5.0);
}
*/
void myreshape (int w, int h)
{
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT); // The glClear function clears buffers to preset values.
	glViewport (0, 0, (GLsizei) w, (GLsizei) h);				//指定视口大小
	glMatrixMode (GL_PROJECTION);
	glLoadIdentity ();
		
	gluPerspective(160.0, (GLfloat) w/(GLfloat) h, 1, 20);		//透视投影
	
	glMatrixMode(GL_MODELVIEW);
	glLoadIdentity();
		
	gluLookAt (0.0, 0.0, 5.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0);	//指定照相机的位置	
}
/*
void myReshape2(int w, int h)
{
 glViewport(0, 0, w, h);

// Use a perspective view 

 glMatrixMode(GL_PROJECTION); 
 glLoadIdentity();
	if(w<=h) glFrustum(-2.0, 2.0, -2.0 * (GLfloat) h/ (GLfloat) w, 
       2.0* (GLfloat) h / (GLfloat) w, 2.0, 20.0);
	else glFrustum(-2.0, 2.0, -2.0 * (GLfloat) w/ (GLfloat) h, 
       2.0* (GLfloat) w / (GLfloat) h, 2.0, 20.0);

// Or we can use gluPerspective 

// gluPerspective(45.0, w/h, -10.0, 10.0); 

 glMatrixMode(GL_MODELVIEW);
}*/
/*
void mymouse(int button,int state,int x,int y)
{   
    if(state==GLUT_DOWN && button==GLUT_LEFT_BUTTON){   // 鼠标左键被按下
        glRotatef(15.0, 1.0, 0.0, 0.0);
    }
    if(state==GLUT_DOWN && button==GLUT_RIGHT_BUTTON){   // 鼠标右键被按下
        glRotatef(15.0, -10.0, 0.0, 0.0);
    }
	if(state==GLUT_DOWN && button==GLUT_MIDDLE_BUTTON){   // 鼠标右键被按下
        glRotatef(15.0, 0.0, 10.0, 0.0);
    }
}
*/
void motion(int x,int y){
	 rotay=y-positiony-40;
	 rotax=x-positionx;
	 displayT();	  
}
/*
void reshape(int w, int h)
{
    glViewport(0, 0, (GLsizei) w, (GLsizei) h);
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    if (h == 0) h = 1;
    gluPerspective(45.0f,(GLfloat)w/(GLfloat)h,0.5f, -1000.0f);
    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();
	gluLookAt(0, 0, 10, 0, 0, 0, 0, 1, 0);
}
*/
void Mouse(int button, int state, int x, int y) //处理鼠标点击
{
	if(state==GLUT_DOWN && button==GLUT_LEFT_BUTTON){   // 鼠标左键被按下
        glRotatef(15.0, 0.0, 10.0, 0.0);
    }
    if(state==GLUT_DOWN && button==GLUT_RIGHT_BUTTON){   // 鼠标右键被按下
        glRotatef(15.0, 0.0, 0.0, 10.0);
    }
	if(state==GLUT_DOWN && button==GLUT_MIDDLE_BUTTON){   // 鼠标中键被按下
        glRotatef(15.0, 10.0, 0.0, 0.0);
    }
	glutPostRedisplay();
    if(state==GLUT_DOWN) //第一次鼠标按下时,记录鼠标在窗口中的初始坐标
        oldmx=x,oldmy=y;
}

void onMouseMove(int x,int y) //处理鼠标拖动
{
    du+=x-oldmx; //鼠标在窗口x轴方向上的增量加到视点绕y轴的角度上，这样就左右转了
    h +=0.03f*(y-oldmy); //鼠标在窗口y轴方向上的改变加到视点的y坐标上，就上下转了
    if(h>1.0f) h=1.0f; //视点y坐标作一些限制，不会使视点太奇怪
    else if(h<-1.0f) h=-1.0f;
    oldmx=x,oldmy=y; //把此时的鼠标坐标作为旧值，为下一次计算增量做准备
}
static int i = 0;

void myidle() // jump
{
	if(i == 5){
		//glutIdleFunc(0);
		//glutPostRedisplay();
		i = 0;
	}
	glTranslatef( 0.0, 3.0-i*6.0/4.0, 0.0 );
	leg = 40 - 10*i;
	legelbow = -80 + 20*i; // 左脚
	legRight = 40 - 10*i;
	legelbowRight = -80 + 20*i;

	shoulder = 240 + i*30/4;
	elbow = 20 - i * 5;
	shoulderRight = 300 - i*30/4;
	elbowRight = -20 + i * 5;

	Sleep(200);
	glutPostRedisplay();
	i += 1;
}

void myidle2()
{
	//glTranslatef( 0.0, 3.0-i*6.0/4.0, 0.0 );
	leg = 0;
	legelbow = 0; // 左脚
	legRight = 0;
	legelbowRight = 0;
	Sleep(200);
	glutPostRedisplay();
}

void myidle3() // running
{
	if(i == 7){
		//glutIdleFunc(0);
		//glutPostRedisplay();
		i = 0;
	}
	leg = 40 - 10*i;
	legelbow = -80 + 10*i; // 左脚

	legRight = -40 + 10*i;
	legelbowRight = -80 + 10*i;

	elbowRight2 = 20 + i * 10;
	shoulderRight2 = -330 - i*30/4;
	elbow2 = 20 + i * 10;
	shoulder2 = 330 + i*30/4;

	Sleep(200);
	glutPostRedisplay();
	i += 1;
}

void myidle4() // jump and somersault
{
	if(i >= 3 && i <= 6){
		glRotatef(90, 1, 0, 0);
	}
	if(i == 10){
		//glutIdleFunc(0);
		//glutPostRedisplay();
		i = 0;
	}
	//if( i < 3 || i > 6){
		glTranslatef( 0.0, 3.0-i*6.0/10.0, 0.0 );
	//}
	leg = 180 - 18*i;
	legelbow = -100 + 8*i; // 左脚
	legRight = 180 - 18*i;
	legelbowRight = -100 + 8*i;

	shoulder = 240 + i*30/10;
	elbow = 20 - i * 2;
	shoulderRight = 300 - i*30/10;
	elbowRight = -20 + i * 2;

	Sleep(200);
	glutPostRedisplay();
	i += 1;
}

void keyboard (unsigned char key, int x, int y)
{
	switch (key) {
		// left shoulder
		case ' ':
			//i = 0;
			//glutIdleFunc(myidle);
			
			if(!first)
			{
				glutIdleFunc(myidle);
				first=!first;
			}
			else
			{
				glutIdleFunc(0);
				//glutIdleFunc(0);
				first=!first;
			}
			
			break;
		case 'c':			
			if(!first)
			{
				glutIdleFunc(myidle3);
				first=!first;
			}
			else
			{
				glutIdleFunc(0);
				//glutIdleFunc(0);
				first=!first;
			}
			
			break;
		case 'v':			
			if(!first)
			{
				glutIdleFunc(myidle4);
				first=!first;
			}
			else
			{
				glutIdleFunc(0);
				//glutIdleFunc(0);
				first=!first;
			}
			break;
		case 'x':
			glTranslatef( 0.0, 3.0, 0.0 );
			leg = 40;
			legelbow = -80; // 左脚
			legRight = 40;
			legelbowRight = -80;
			glutPostRedisplay();
			break;
		case 'z':
			glTranslatef( 0.0, -3.0, 0.0 );
			leg = 0;
			legelbow = 0; // 左脚
			legRight = 0;
			legelbowRight = 0;
			glutPostRedisplay();
			break;
		case 's':			
			if(shoulder>-90)
				break;
			shoulder = (shoulder + 5) % 360;	// shoulder一开始是-90
			glutPostRedisplay();
			break;
		case 'w':
			if(shoulder<-270)	// 抬手 抬手一圈是180 所以变成270
				break;
			shoulder = (shoulder - 5) % 360;
			glutPostRedisplay();
			break;
		case 'd':		
			if(elbow>0)
				break;
			elbow = (elbow + 5) % 360;	// elbow一开始是0
			glutPostRedisplay();
			break;
		case 'e':
			if(elbow<-170)
				break;
			elbow = (elbow - 5) % 360;	// 抬手肘
			glutPostRedisplay();
			break;

		// right shoulder
		case 'r':
			if(shoulderRight>90)
				break;
			shoulderRight = (shoulderRight + 5) % 360;
			glutPostRedisplay();
			break;
		case 'f':		
			if(shoulderRight<-90)
				break;
			shoulderRight = (shoulderRight - 5) % 360;
			glutPostRedisplay();
			break;
		case 't':
			if(elbowRight>180)
				break;
			elbowRight = (elbowRight + 5) % 360;
			glutPostRedisplay();
			break;
		case 'g':
			if(elbowRight<0)
				break;
			elbowRight = (elbowRight - 5) % 360;
			glutPostRedisplay();
			break;

		// left leg
		case 'y':
			if(leg>90)
				break;
			leg = (leg + 5) % 360;	// leg一开始是0
			glutPostRedisplay();
			break;
		case 'h':
			if(leg<0)
				break;
			leg = (leg - 5) % 360;
			glutPostRedisplay();
			break;
		case 'u':
			if(legelbow>0)	// 左脚
				break;
			legelbow = (legelbow + 5) % 360;
			glutPostRedisplay();
			break;
		case 'j':
			if(legelbow<-90)
				break;
			legelbow = (legelbow - 5) % 360;
			glutPostRedisplay();
			break;

		// right leg
		case 'i':
			if(legRight>90)
				break;
			legRight = (legRight + 5) % 360;
			glutPostRedisplay();
			break;
		case 'k':
			if(legRight<0)
				break;
			legRight = (legRight - 5) % 360;
			glutPostRedisplay();
			break;
		case 'o':
			if(legelbowRight>0)
				break;
			legelbowRight = (legelbowRight + 5) % 360;
			glutPostRedisplay();
			break;
		case 'l':
			if(legelbowRight<-90)
				break;
			legelbowRight = (legelbowRight - 5) % 360;
			glutPostRedisplay();
			break;

		case 27:
			exit(0);
			break;
		default:
			break;
		}
}
/*
int main(int argc, char** argv)
{
	glutInit(&argc, argv);
	glutInitDisplayMode (GLUT_DOUBLE | GLUT_RGB);
	glutInitWindowSize (500, 500);
	glutInitWindowPosition (100, 100);
	glutCreateWindow (argv[0]);
	init ();
	glutDisplayFunc(display);
	glutReshapeFunc(reshape);
	glutMouseFunc(mymouse); // glutMouseFunc
	glutKeyboardFunc(keyboard);
	glutMainLoop();
	return 0;
}
*/
int main(int argc, char** argv)
{
    glutInit(&argc, argv);  // 所有的GLUT函数都有glut前缀并且那些完成一些初始化的函数有glutInit前缀
    glutInitDisplayMode (GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH);  // 你应该使用函数glutInitDisplayMode()定义显示方式
    // GLUT_RGBA或者GLUT_RGB。指定一个RGBA窗口，这是一个默认的颜色模式,GLUT_DEPTH.深度缓冲区。 
    glutInitWindowSize (800, 800);     // 接下来我们设置窗口大小，使用函数glutInitWindowSize（）。 
    glutInitWindowPosition (10, 10);  // 首先确定窗口位置（它默认的是屏幕左上角），我们使用函数glutInitWindowPosition（）
    glutCreateWindow (argv[0]); // 调用函数glutCreateWindow()来创建窗口了

    init ();

	glutDisplayFunc(display); // glutDisplayFunc函数用于注册一个绘图函数， 这样操作系统在必要时刻就会对窗体进行重新绘制操作
    glutIdleFunc(display);
//    glutDisplayFunc(displayT); // glutDisplayFunc函数用于注册一个绘图函数， 这样操作系统在必要时刻就会对窗体进行重新绘制操作
//    glutIdleFunc(displayT);  //设置不断调用显示函数
	glutReshapeFunc(myreshape); // 当你改变窗口大小时的回调(CallBack)函数,需要你自己编写的ReShape Function来注册 ,
    // 每当窗口的大小或形状改变时（包括窗口刚被创建时的那次），GLUT将会调用这个函数。这个回调函数接受这个窗口新的宽度和高度。

    //glutIdleFunc(myidle);   // glutIdleFunc设置全局的回调函数，当没有窗口事件到达时，GLUT程序功能可以执行后台处理任务或连续动画。
    // 如果启用，这个idle function会被不断调用，直到有窗口事件发生
    //glutMouseFunc(mymouse); // glutMouseFunc
	//glutIdleFunc(myidle);
	glutMouseFunc(Mouse);
	glutMotionFunc(onMouseMove);
	
    glutKeyboardFunc(keyboard);   // OpenGL的键盘响应回调函数

    glutMainLoop(); // GLUT提供了一个函数让程序进入一个永不结束的循环。一直等待处理下一个事件
    return 0;
}