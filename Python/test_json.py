import json

def main():
    res = {"result": "\u8bc6\u522b\u7ed3\u679c\uff1adirenjie , \u51c6\u786e\u5ea6\uff1a0.78754157", "name": "direnjie", "score": "0.78754157"}
    res2 = '{"result": "识别结果：direnjie , 准确度：0.78754157", "name": "direnjie", "score": 0.78754157}'
    res3 = {
        "result": "识别结果：direnjie , 准确度：0.78754157",
        "name": "direnjie",
        "score": 0.78754157,
    }
    print(res)
    print(res2)
    json_res = json.loads(res2)
    print(type(res))
    print(type(res2))
    print(type(json_res))

    f = open("demofile.txt", "r")
    ret = f.read()
    print(ret)
    print(type(ret))
    json_ret = json.loads(ret)
    print(type(json_ret))

    print(json.dumps(res3))


if __name__ == "__main__":
    main()
