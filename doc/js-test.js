function test1(){
    console.log(this.color)
}

let test2 = ()=>{
    console.log(this.color)
}

function test3(){
    console.log(this.color)
}

color = 'blue'

let o= {
    color :'red'
}

test1()
test2()

o.test2 = test3
o.test2()