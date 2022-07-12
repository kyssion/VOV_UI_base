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