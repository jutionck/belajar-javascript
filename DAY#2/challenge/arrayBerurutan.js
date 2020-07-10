function Urutan() {
    let arr = ["warung", "ke", "jalan", "saya"]
    console.log(arr.reverse())
}


function Urutan2() {
    let arr = ["warung", "ke", "jalan", "saya"];
    let arrUrutan = []
    for (let i = arr.length; i >=0; --i) {
        arrUrutan.push(arr[i]);
    }
    console.log(arrUrutan)
}

Urutan2()