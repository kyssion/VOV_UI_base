function * generatorFn(){
    for (const x of [1,2,3]){
        try{
            yield x;
        } catch (e){
            console.log(e)
        }
    }
}

const g = generatorFn()
console.log(g.next())
g.throw("foo")
g.return()// 直接终止
console.log(g.next())