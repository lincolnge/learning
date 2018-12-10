# import the necessary packages
import numpy as np
import pyautogui
import cv2

if __name__ == "__main__":

    # take a screenshot of the screen and store it in memory, then
    # convert the PIL/Pillow image to an OpenCV compatible NumPy array
    # and finally write the image to disk
    # image = pyautogui.screenshot()
    times = 2
    image = pyautogui.screenshot(region=(0, 0, 667 * times, 375 * times))
    # image = pyautogui.screenshot(region=(0, 0, 1440, 900))
    image = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)
    cv2.imwrite("in_memory_to_disk.png", image)

