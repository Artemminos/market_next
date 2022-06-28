const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('hello')
    }, 1000)
});
/*promise
    .then((data)=>{
        console.log(data)
    });*/

(async () => {
    let data
    try {
        data = await promise
    } catch (error) {
        data = error
    }
    console.log(data)
})()
const fn = async () => {

}
fn()


const getUsers = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('users')
    }, 1000)
})


const fetchData = () => {
    const data = {
        content:[
            {
                name: 'art',
                pass: '123'
            }
        ],
        status:200
    }
    return data
}

const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            resolve(fetchData())
        } catch (error) {
            reject(error)
        }
    }, 2000)
})
getData.then((data)=>{
    console.log(data)
})
const someFn = async ()=>{
    const {content} = await getData
    const {status} = await getData
    console.log(content)
}
someFn()
getUsers.then((data) => {
    console.log(data)
}).catch((data) => {
    console.log(data)
})


