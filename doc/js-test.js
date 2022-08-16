let mapS = new Map()
mapS.set("a","a")
console.log(mapS.entries === mapS[Symbol.iterator])


for (let item of mapS[Symbol.iterator]()){
    console.log(item)
}