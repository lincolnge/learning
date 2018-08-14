测试 nrm、npmrc 的优先级
====

## 实验

### 1. 没有设置 nrm。
默认设置 registry 为 https://registry.npmjs.org/

下载的所有包都是通过以上域名获取。

### 2. nrm use yarn。
设置 registry 为 https://registry.yarnpkg.com/。

看源码可知实际做的事情是

```JavaScript
npm.commands.config(['set', 'registry', registry.registry], function (err, data) {
    if (err) return exit(err);
    console.log('                        ');
    var newR = npm.config.get('registry');
    printMsg([
        '', '   Registry has been set to: ' + newR, ''
    ]);
})
```
即

```bash
npm set registry 'https://registry.yarnpkg.com/'
```

效果为

```bash
cat ~/.npmrc
registry=https://registry.yarnpkg.com/
```

安装结果是从 registry.yarnpkg.com 里面下包。

### 3. 本地使用 npmrc。
当前项目操作

```bash
touch .npmrc
```

在 npmrc 里面填写，***vim .npmrc***

```bash
registry=https://registry.npm.taobao.org/
```

安装结果是从 registry.npm.taobao.org 里面下包。

### 4. 使用本地 npmrc + nrm。

有本地 npmrc 的时候，执行 `nrm ls` 输出的目录是 npmrc 上设置的目录。

### 5. 使用本地 npmrc + package-lock.json

这个分两种情况。

- 直接执行 `npm i` 将从 package-lock 中获取文件的下载地址。
- 如果执行的是 `npm i <package>` 将从 npmrc 中获取下载地址，并更新 package-lock。

### 6. npm i chai --registry https://registry.yarnpkg.com/

效果与只使用 `.npmrc` 一致。

## 总结

`.npmrc` 的配置文件与 `package-lock.json` 的配置文件优先级是比较高的。
其次才是 nrm 的配置项。

`nrm` 其实是设置了 global 的 npmrc。项目下的 npmrc 肯定优先级更高一些。
