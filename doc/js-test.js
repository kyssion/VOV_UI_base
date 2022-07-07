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

test1()