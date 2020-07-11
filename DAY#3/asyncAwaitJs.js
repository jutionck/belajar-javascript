const number = (a, b) => new Promise((resolve, reject) =>{
    setTimeout(() =>{
        let err
        if (isNaN(a) || isNaN(b)) {
            err = 'Ada yang bukan sebuah angka'
            reject(err)
        } else {
            resolve(true)
        }
    }, 500)
})
const divide = (a, b)=> new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let err;
        if (b === 0) {
            err = 'Pembagi tidak boleh angka 0'
            reject(err)
        }
        const result = Number(a) / Number(b)
        resolve(result)
    }, 1500)
})
const add = (a,b) => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const result = Number(a) + Number(b)
        resolve(result)
    },2000)
})
const substraction = (a,b) => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // console.log(a, b)
        if (a < b) {
            c = a, a = b, b= c
            const result = Number(a) - Number(b)
            resolve(result)
        }
    })
})
const run = async function (a, b) {
    const isNumber = await number(a,b)
    console.log(isNumber)
    if (isNumber === true) {
        const resultDivide = await divide(a,b)
        console.log(resultDivide)
        const resultAdd = await add(resultDivide, 10)
        console.log(resultAdd)
        const resultSub = await substraction(resultAdd, 20)
        return resultSub
    }
}
run(14, 12)
    .then((result)=> console.log(`The Final result : ${result}`))
    .catch((err)=> console.log(err))