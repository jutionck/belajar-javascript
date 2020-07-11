const Number = (waktu) => new Promise((resolve, reject) =>{
    setTimeout(()=> {
        let err;
        if(isNaN(waktu)) {
            err = "Inputan harus angka";
            reject(err);
        } else {
            resolve(true);
        }
    }, 100)
})

const janji = (waktu) => (
    new Promise((resolve, reject)=>{
    setTimeout(()=> {
        if(waktu === 0) {
            let err = "Angka tidak boleh 0";
            reject(err);
        } else if(waktu >= 7 && waktu <= 11){
            resolve(console.log("Datang"));
        } else if(waktu >= 12 && waktu <= 24) {
            resolve(console.log("Tidak Datang!"));
        } else {
            resolve(console.log("Waktu hanya sampai 24"));
        }
    }, 200)
}))

const printResult = async (waktu) => {
    const cekNumber = await Number(waktu);
    if (cekNumber === true) {
       return await janji(waktu);
    }
}

printResult(8).then().catch((err)=> console.log(err));
printResult(12).then().catch((err)=> console.log(err));
