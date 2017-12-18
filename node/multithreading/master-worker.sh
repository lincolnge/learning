#!/bin/bash

netstat -ant | awk '$6 == "LISTEN"'

# 找到端口为 1000~2000 的然后执行
# curl http://127.0.0.1:xxx
