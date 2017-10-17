#!/bin/bash

# ab -n 200 -c 100 https://www.baidu.com/
# ab -c 200 -t 100 http://127.0.0.1:8001/
# ab -n 200 -c 100 http://localhost:8001/
ab -n 200 -c 100 http://127.0.0.1:8001/