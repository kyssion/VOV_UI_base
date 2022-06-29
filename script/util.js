
// 监听代码位的变化 ， 如果发生变化会调用对应的函数
function start_watch_dir(dir , f) {

    f.watch(dir,(event,filename)=>{
        console.log()
    })
}