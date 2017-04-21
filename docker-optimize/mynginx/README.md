docker run --name webserver -d -p 80:80 nginx

docker exec -it webserver bash # 容器已经启动的。

docker commit [选项] <容器ID或容器名> [<仓库名>[:<标签>]]

docker commit --author "wanggengzhou" --message "修改" webserver nginx:v2

docker diff webserver
