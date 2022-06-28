const promise = new Promise((res,rej)=>{
    console.log(4)
    setTimeout(()=>{
        res('fn3')
    },1001)
})
for (let i = 0; i < 10000000000; i++) {
    let a = i * i +1000000
}
const fn2 = ()=>{
   console.log('fn2')
}
const fn1 = ()=>{
    console.log('fn1')
    setTimeout(fn2,2000)
}

setTimeout(fn1,1000)
promise.then(data=>{
    console.log(data)
})
