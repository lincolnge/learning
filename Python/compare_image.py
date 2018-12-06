import cv2
import os


def compare_image(filepath1, filepath2):
    image1 = cv2.imread(filepath1)
    hist1 = cv2.calcHist([image1], [0], None, [256], [0, 256])
    image2 = cv2.imread(filepath2)
    hist2 = cv2.calcHist([image2], [0], None, [256], [0, 256])

    return cv2.compareHist(hist1, hist2, cv2.HISTCMP_CORREL)


if __name__ == '__main__':
    uploaded_file_path = os.path.join('/Users/asce/project/tensorflow/models-image/cyj.jpg')
    uploaded_file_path2 = os.path.join('/Users/asce/project/tensorflow/models-image/zhugeliang.jpg')
    result = compare_image(uploaded_file_path, uploaded_file_path2)
    print(result)
    # print(cv2.cv.CV_COMP_CORREL)
    print('cv2.HISTCMP_CORREL:', cv2.HISTCMP_CORREL)
    for option in cv2.__dict__:
        if 'CORREL' in option:
            print(option)

# 作者：钱肥肥
# 链接：https://www.jianshu.com/p/a95c43c1c4f4
# 來源：简书
# 简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
# 用 OpenCV histogram 比较图片相似度

# https://stackoverflow.com/questions/40451706/how-to-use-comparehist-function-opencv/40451993
