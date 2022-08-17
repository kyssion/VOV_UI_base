class Person{
    name
    constructor(use){
        if(use===true){
            return {
                name:"p2"
            }
        }
        this.name = "p1"
    }
}

let p1 = new Person()
let p2 = new Person(true)
console.log(p1)
console.log(p2)
console.log(p1 instanceof Person)
console.log(p2 instanceof Person)

let p3 = new p1.constructor()
console.log(p3)
console.log(p3 instanceof Person)