#!/bin/bash
# shell脚本将gbk文件转化为utf-8
# https://blog.csdn.net/pangyemeng/article/details/74315869
function gbk2utf(){
    file="$1"
    echo "处理文件 '$file' ..."
    iconv -f gb2312 -t UTF-8 -c "$file" > tmp 
    mv -f tmp "$file"
}
 
function getdir(){
    for element in `ls $1`
    do  
        dir_or_file=$1"/"$element
        echo $dir_or_file
        if [ -d $dir_or_file ]
        then
            getdir $dir_or_file
        else
            gbk2utf $dir_or_file
        fi  
    done
}
getdir $1
