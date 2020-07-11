function divide(a,b,cb) {
    setTimeout(() => {
        let err;
        if(isNaN(a) || isNaN(b)) { //isNan, untuk cek apakah yang di input angka atau bukan
            err = "Ada yang bukan angka"
            cb(err, null)
        }
        const result = Number(a) / Number(b)
        cb(null, result)
    }, 2000)
}

// annonymous function
divide(14, 2, (err, result) => {
    if (err) {
        throw new Error(err)
    }
    console.log(`The result is : ${result}`)
})

console.log("Ini harusnya kepanggil duluan")