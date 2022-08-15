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

### 变量数据类型

js 6 种数据类型 ， underfined， Null ， boolean number string Symbol（符号类型）Object 类型

- typeof 操作符

使用 typeof 操作符号可以货渠道类型的真是类型 ， 返回之一般为如下

- underfind
- boolean
- string
- number
- object
- function
- symbol
```javascript
let i = "message"
console.log(typeof i) // 输出 string
```

> 注意一个点 ： underfind 指代变量没有初始化， null 指代对象没有初始化

#### boolean 类型这里其实要注意一个特殊的操作

```javascript
// 以下情况 ， 使用 boolean方法强制转化 - 返回false
console.log(Boolean(""))
console.log(Boolean(false))
console.log(Boolean(0),Boolean(NaN))
console.log(Boolean(null))
console.log(Boolean(undefined))
```

#### Number类型

几个边界变量 

```javascript
Infinity // + 无穷大
-Infinity // - 无穷大
NaN // 非数字
```

几个常用的方法

```javascript
// 返回false的场景， 表示可以转化成数字的场景 ， true 的情况需要特殊关注
isNaN(10)
isNaN("10")
isNaN(true)
```

数字转化常用方法

```javascript
Number(); //-> 参考NaN方法
parseInt(); //-> 转整形
parseFloat();//-> 转浮点型
```

#### string 类型

注意方法 toString =》可以将变量变成字符串类型

模板字符串支持  =》 保留原来的格式 ， 使用``符号支持

```javascript
`
dsfasdgasdf asdfadgd`
```

字符串插值支持 

```javascript
let zz = "fffff"
let item = `sdfadgdsf ${zz} asfdgsdf`
```

#### object 类型

声明对象

```javascript
let o = new Object()
```

对象内置方法

```javascript
let o = new Object()
o.constructor // 构造函数
o.hasOwnProperty("name") // 自己的名称
o.isPrototypeOf(o) // 判断当前对象是不是一个对象的原型
o.propertyIsEnumerable() // 判断当前的变量是否可以被for-in 枚举
o.toLocaleString() // 
o.toString()
o.valueOf() // 和toString() 相同
```


#### function 类型

function 是 javascript中一个比较特殊的类型 
1. function 可以做为变量
2. function 返回值可以不声明 ， 以实际返回的结果为结论（也就说function 返回的类型是未知的t）

## 4. 原始值& 引用值 & 作用域 & 内存

javascript 中的原始值有 underfind ， null ， bool ， string ， number ， 符号 
javascript 其他的场景都是引用值

new 操作 -> 创造一个对象 

> 引申 javascript 和java 在一定程度上很像 ，比如 int 类型和Interger类型 ， 实际上运行的结构类似， 但是一个是int 类型一个是object

new 创建的object 类型可以附加属性

```javascript
let objectItem = new Onject("");
objectItem.name = "test name" // 支持增加新的属性
function test1(){

    for (const i=0;i<5;++i){
        funcI(i)
    }

    function funcI(i){
        setTimeout(()=>{
            console.log(i)
        })
    }
}

let name ="ffff"
console.log(`asgadsfasdf ${name} fsdfasfd`)
```
### typeof 和javascript instanceof -> 判断类型

typeof 可以用来判断变量的低类型
instanceof 可以用来判断对象的类型

```javascript
console.log(persion instanceof Array) //  判断persion这个变量是不是Array这个类型
```

> 作用域链javascript = > var变量是运行时刻指定 ， let 是定义时

# js 常用对象

## Date

1. 创建方法和初始化方法
```javascript
var dateItem = new Date()
dateItem = Date.parse("2022-07-22T12:22:22") // 传入字符串转化成毫秒数 
dateItem = Date.UTC(2022,7,22,22,22,22,33) // 字符串化时间
```

2. 时间信息打印

```javascript
var dateItem = new Date()
dateItem.toString() // 打印有时区的时间信息
dateItem.toLocaleDateString() // 打印当前时间的
dateItem.toDateString()
dateItem.toTimeString()

// DateString 有周信息
```

3. 操作符号

> date 对象是可以直接进行比较的

```javascript
var date1 = new Date(Date.UTC(2022,7,7))
var date2 = new Date(Date.UTC(2022,7,8))
console.log(date1>date2)
```

## 正则表达式对象

## 内置对象 string number bool 分别对应相关的操作函数

## globe window math 

> 注意关键对象eval 函数


# js 内建数据结构

定型数组

Array

Map

Set
