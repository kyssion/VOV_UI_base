# 语言

## js 引入 html的方法

1. ```<script>``` 标签引入 : 8个属性 -> async : 不阻塞下载 ， charset : 指定代码字符集 , crossorigin ： cors 快栈请求配置 （anonymous不需要设置凭据标记， use-credentials 设置凭据标志）， defer ： 表示脚本可以延迟到文档完全被解析和现实之后在执行，intergity : 允许对比接受到的字段指定加密签名验证完整性。src : 指定要执行的代码尾部文件，type ： 代表脚本中语言内容类型
- script 脚本的限制 ： 脚本中不能出现 ```</script>``` 会导致浏览器解析截断 ， 可以使用转译方法避免 ```<\/script>```

> 外部引用 script 脚本的时候可以使用 SPDY/HTTP2 批量获取一批文件， 关键是浏览器是否支持

2. 动态添加脚本 - 默认异步加载
```javascript
let script = document.createElement('script');
script.src = 'xxx.js'
script.async = false; // 强制指定同步加载
document.head.appendChild(script)
```

## js 语法基础

## 1. 严格模式下 （“use strict”）的特殊点

## 2. 代码规范

## 3. 变量系列