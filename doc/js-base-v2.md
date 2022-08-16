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
5. 
