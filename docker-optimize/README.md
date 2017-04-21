docker 优化实践
====

1. 减小 docker 体积
2. 减少编译时间

在 Dockerfile 中， 每一条指令都会创建一个镜像层，继而会增加整体镜像的大小。所以尽量都写在同一层里面。

选择镜像系统，可以选小一点的系统。

删除的操作要和创建的操作放在同一行命令下。


压缩镜像：

    $ docker export <hashcommit> | docker import - <name>:<tab>

提取二进制文件，编译后的文件，删除不需要使用的源文件。

[1]: <https://blog.c.163.com/2016/11/602/> "7 步精简 Docker 镜像（上）"
[2]: <https://blog.c.163.com/2016/11/709/> "7 步精简 Docker 镜像（下）"
