fis3-parser-imweb-data-checker
============================

fis3 数据检查器插件

## 安装与使用 

全局安装

```bash
npm install fis3-parser-imweb-data-checker -g
```

## FIS3

```js
fis.match('*.js', {
    .match('**.js', {
        parser: fis.plugin('imweb-data-checker', {
            ignores: ['T']
        })
    })
})
```