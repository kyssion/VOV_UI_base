# js 对象

1. 声明一个对象

```javascript
let person= {
    name :"name",
    age:29,
    sayName: function (){
        console.log(this.name)
    }
}
```

2. 针对属性类型修改

js 修改这些属性可以使用js的 Object。defineProperty方法进行修改

```javascript
let persion = {}
// 三个属性 -> 定义一个属性
Object.defineProperties(persion,"name", {
    writable:false, // 是否可以被修改
    enumerable: false, // 是否可以被迭代
    configurable: false, // 是否可以delete删除并且重新定义
    value : 12,
    get(){
        return this.name
    },
    set(newValue){
        this.name = newValue
    }
    }
)
// 支持两个属性 - 可以同时创建多个变量
Object.defineProperties(persion, {
        name: {
            writable: false, // 是否可以被修改
            enumerable: false, // 是否可以被迭代
            configurable: false, // 是否可以delete删除并且重新定义
            value: 12,
            get() {
                return this.name
            },
            set(newValue) {
                this.name = newValue
            }
        }
    }
)
```
3. 针对属性类型的读取

```javascript
Object.getOwnPropertyDescriptor(对象, "变量名称")// 返回属性信息枚举
Object.getOwnPropertyDescriptors()// 返回每一个数据行的配置信息
```

4. object 对象属性合并

```javascript
Object.assign({},{}) //  后一个合并到前一个中
```
5. es6 对象声明简写方法

- 属性名称复写

```javascript
let name = "name"
let p = {
    name:name
}

// 等价于

let p={
    name
}

// 函数嵌套保留

function setName(name){
    return {
        name
    }
}
let p = setName("name")
console.log(p.name)// 输出name ， 这个name 是保留的
```

- 字符串（动态）属性直接赋值

```javascript
let name = 'name'
let p ={}
p[name] = name

// 可以写成
let p={
    [name]:"name"
}

// 还支持函数写入

function createName(name){
    return "this_"+name
}

let p = {
    [createName("tttt")]:"name"
}
```

- 快速函数命名
```javascript
let name = "thisName"
let p = {
    name_ :"ffff",
    sayName(name){
        return this.name_
    },
    get name(){ // 获取属性
        return this.name_ 
    },
    set name(name){ // 设置属性
        this.name_ = name
    },
    [name](){ // 自定义方法名称
        
    }
}
```

- 对象解构

```javascript
let p ={
    name:"fsdfs",
    age :16,
    fuc :{
        ppp:"123",
        zzz:{
            qqq:"ffff"
        }
    }
}

let {name:ppp,age:zzz,fuc:{ppp:qqq},fuc:{zzz:{qqq:yyy}}}=p
let {name,age} = p // 简写方法

function item(p,{name,age},z){ //还支持函数
    console.log(name, age)
}
function item2(p,{name:ffff,age:tttt},z){ // 还支持函数
    console.log(ffff, tttt)
}
let i = {
    name:"fff",
    age : 123
}
item2(123,i,123)

```