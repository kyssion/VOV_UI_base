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

### var/let/const 关键字

#### 关键字 var
1. 使用var 关键字， 则变量的作用域是当前的环境
2. 不使用var 关键字， 变量的作用域是全局
3. 我们在使用变量的时候， 是通过作用域链找的数据， 注意一个地方， js的作用域的定义是运行时确定的 ， 而不是声明时
4. 多个变量声明 可以使用 ， 号分割 ， ```var a=123,b=333,c=3333;```
5. js 声明提升 -> js 对变量会进行以下的修改
```javascript
function test(){
    console.log("test");
    var b = 123;
}
//  变更为
function test(){
    var b;
    console.log("test")
    b = 123;
}
```

> 这么做的目的应该是为了优化脚本， 明确一个的作用域做的修改

#### 关键字let

> 和 var 类似但是有如下的区别

1. 块级作用域 - let 和var 不同， var 是函数作用域， 运行时判断， let是块级作用域（todo 声明时？？？）
2. 全局声明 - let 声明全局变量的时候， 不会成为window对象的属性， 但是会在全局周期中有效果， 并且能保证不存在重复声明的情况
3. let 迭代器场景优化 ， 太常见了，加一个列子吧
```javascript
function test1(){

    for (let i=0;i<5;i++){
        funcI(i)
    }

    function funcI(i){
        setTimeout(()=>{
            console.log(i)
        })
    }
}
test1() // 输出 0,1,2,3,4,5
```
4. 声明提升 ： let 不支持声明提升， 所以在当前的作用域下， 不能有同名的let 变量支持

#### 关键字const

和 let 相同， 唯一的限制就是const 必须有初始值并且不能进行变更 ，  但是注意我们可以const定义一个对象， 然后修改这个对象自己内部的属性的 ， 这个是符合预期的

> 注意const同样也可以在for 循环和迭代器中使用


