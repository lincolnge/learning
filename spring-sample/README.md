# spring-sample

## 环境：

### Java:

    $ java -version
    java version "1.8.0_74"
    Java(TM) SE Runtime Environment (build 1.8.0_74-b02)
    Java HotSpot(TM) 64-Bit Server VM (build 25.74-b02, mixed mode)

### maven:

    mvn -version
    Apache Maven 3.3.9 (bb52d8502b132ec0a5a3f4c09453c07478323dc5; 2015-11-11T00:41:47+08:00)
    Maven home: /usr/local/Cellar/maven/3.3.9/libexec
    Java version: 1.8.0_74, vendor: Oracle Corporation
    Java home: /Library/Java/JavaVirtualMachines/jdk1.8.0_74.jdk/Contents/Home/jre
    Default locale: en_US, platform encoding: UTF-8
    OS name: "mac os x", version: "10.11.3", arch: "x86_64", family: "mac"

### 如果环境有问题

    $ jenv local oracle64-1.8.0.74
    $ jenv enable-plugin maven

## 运行：

在根目录下，运行

    $ ./run.sh
    # 或
    $ ./run.sh 1

或者在 `~/gs-handling-form-submission/initial` 目录下

    $ ./gradlew build && mvn spring-boot:run

gs-rest-service 项目同理。

## 详情请查看：

- gs-rest-service. <https://spring.io/guides/gs/rest-service/>
- gs-handling-form-submission. <https://spring.io/guides/gs/handling-form-submission/>
