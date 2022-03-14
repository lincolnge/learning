#include<stdio.h>
#include<string.h>
#include<sys/types.h>

#include <iostream>

#pragma pack(2)

using namespace std;

//下面两个结构是位图的结构
typedef struct BITMAPFILEHEADER
{
    u_int16_t bfType;
    u_int32_t bfSize;
    u_int16_t bfReserved1;
    u_int16_t bfReserved2;
    u_int32_t bfOffBits;
}BITMAPFILEHEADER;

typedef struct BITMAPINFOHEADER
{
    u_int32_t biSize;
    u_int32_t biWidth;
    u_int32_t biHeight;
    u_int16_t biPlanes;
    u_int16_t biBitCount;
    u_int32_t biCompression;
    u_int32_t biSizeImage;
    u_int32_t biXPelsPerMeter;
    u_int32_t biYPelsPerMeter;
    u_int32_t biClrUsed;
    u_int32_t biClrImportant;
}BITMAPINFODEADER;

void showBmpHead(BITMAPFILEHEADER &pBmpHead){
    cout<<"位图文件头:"<<endl;
    cout<<"文件头类型:"<<pBmpHead.bfType<<endl;
    cout<<"文件大小:"<<pBmpHead.bfSize<<endl;
    cout<<"保留字_1:"<<pBmpHead.bfReserved1<<endl;
    cout<<"保留字_2:"<<pBmpHead.bfReserved2<<endl;
    cout<<"实际位图数据的偏移字节数:"<<pBmpHead.bfOffBits<<endl<<endl;
}

void showBmpInforHead(BITMAPINFODEADER &pBmpInforHead){
    cout<<"位图信息头:"<<endl;
    cout<<"结构体的长度:"<<pBmpInforHead.biSize<<endl;
    cout<<"位图宽:"<<pBmpInforHead.biWidth<<endl;
    cout<<"位图高:"<<pBmpInforHead.biHeight<<endl;
    cout<<"biPlanes平面数:"<<pBmpInforHead.biPlanes<<endl;
    cout<<"biBitCount采用颜色位数:"<<pBmpInforHead.biBitCount<<endl;
    cout<<"压缩方式:"<<pBmpInforHead.biCompression<<endl;
    cout<<"biSizeImage实际位图数据占用的字节数:"<<pBmpInforHead.biSizeImage<<endl;
    cout<<"X方向分辨率:"<<pBmpInforHead.biXPelsPerMeter<<endl;
    cout<<"Y方向分辨率:"<<pBmpInforHead.biYPelsPerMeter<<endl;
    cout<<"使用的颜色数:"<<pBmpInforHead.biClrUsed<<endl;
    cout<<"重要颜色数:"<<pBmpInforHead.biClrImportant<<endl;
}

int main( int argc, char **argv )
{
    cout<<"重要:"<<argv[1]<<endl;

    FILE *fp = fopen(argv[1], "rb");

    BITMAPFILEHEADER head;
    BITMAPINFODEADER info;

    fread(&head, 1, sizeof(BITMAPFILEHEADER), fp);
    fread(&info, 1, sizeof(BITMAPINFODEADER), fp);

    showBmpHead(head);
    showBmpInforHead(info);

    cout<<sizeof(BITMAPFILEHEADER)<<endl; cout<<sizeof(BITMAPINFODEADER)<<endl;

    fclose(fp);

    return 0;
}
