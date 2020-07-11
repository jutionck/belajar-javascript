const isNumber = (a,b) => new Promise((resolve, reject) =>{
    setTimeout(()=> {
        let err;
        if(isNaN(a) || isNaN(b)) {
            err = "Ada yang bukan sebuah angka";
            reject(err)
        } else {
            resolve(true)
        }
    }, 2000)
})

const divide = (a,b) => new Promise((resolve, reject) =>{
    setTimeout(()=> {
        if(b === 0) {
            let err = "Pembagi tidak boleh 0";
            reject(err)
        }
        const result = Number(a) / Number(b)
        resolve(result)
    })
})

const add = (a,b) => new Promise((resolve, reject) =>{
    setTimeout(()=> {
        const result = Number(a) + Number(b)
        resolve(result)
    })
})

const substraction = (a,b) => new Promise((resolve, reject) =>{
    setTimeout(()=> {
        if(Math.sign(a) == -1) {
            let err = "Angka awal tidak boleh negatif"
            reject(err)
        } else if(a < b) {
            let c = a
            a = b;
            b = c;
            // [a,b] = [b, a]
            const result = Number(a) -  Number(b)
            resolve(result)
        } else {
            const result = Number(a) -  Number(b)
            resolve(result)
        }
    })
})
//
// substraction(-3, 10)
//     .then((substraction)=> {
//         console.log(substraction)
//     })
//     .catch((err)=> {
//         console.log(err)
//     })


let getResult = () => {
    let a = 14, b = 2;
    isNumber(a,b)
        .then((isNumber) => {
            console.log(isNumber)
            if(isNumber === true) {
                // hitung pembagian
                return divide(a,b)
            }
        })
        // hitung penjumlahan
        .then((resultDivide) => {
            console.log(resultDivide)
            return add(resultDivide, 10)
        })
        .then((resultAdd) => {
            console.log(resultAdd)
            return substraction(resultAdd, 20)
        })
        .then((resultSub)=> {
            console.log(`The final result : ${resultSub}`)
        })
        .catch((err)=> {
            console.log(err)
        })
}

getResult()