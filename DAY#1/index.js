// Javascript Basis - Variable

// 1
// let x, y;

// 2
// const PHI = 3.14;

// 3
// let userName = null
// let lastName = undefined

// 4 :result-> 11
// let x = 1;
// x = x + "1"
// console.log(x)

// 5 :result-> -1 and -1
// var y = 0;
// console.log(--y); pre decrement (y = -1 + y)
// console.log(y++); post increment (y = y + 1)

// 6 :result-> 1 and 3
// let x = 1;
// console.log(x++);
// console.log(++x);

// 7 :result-> error const not reassign
// const x = 1;
// console.log(x + 1);
// console.log(x++);

// 8
// before
// x = 1;
// let x;
// console.log(x);
//after
// let x;
// x = 1;
// console.log(x);
// cause, let must declare first, except var

//9 N Telur, 1 Lusin 12 Buah
// function hitungTelur(jumlah) {
//     let lusin;
//     let sisaTelur;
//     lusin = jumlah / 12;
//     let pareLusin = parseInt(lusin)
//     sisaTelur = jumlah % 12;
//     let hasil = `Anda memiliki ${pareLusin} lusin dan ${sisaTelur} sisa telur`
//     console.log(hasil)
// }
//
// hitungTelur(56)

//10 GROS AND LUSIN
// function hitungTelurLagi(jumlah) {
//     let gross
//     let lusin
//     let sisaTelur;
//     gross = jumlah / 144;
//     let pareGross = parseInt(gross)
//     lusin = (jumlah % 144) / 12;
//     let pareLusin = parseInt(lusin)
//     sisaTelur = (jumlah % 144 % 12)
//     let hasil = `Anda memiliki ${pareGross} gross, ${pareLusin} lusin, ${sisaTelur} sisa telur`
//     console.log(hasil)
// }
//
// hitungTelurLagi(1342)


// Extra Pedas
// function hitungTelurGross(grossBuah,lusinBuah, jumlahBuah) {
//     let gross, lusin, sisaTelur, hasil;
//     gross = parseInt(jumlahBuah / grossBuah);
//     lusin = parseInt((jumlahBuah % grossBuah) / lusinBuah);
//     sisaTelur = (jumlahBuah % 144 % 12)
//     console.log(hasil = `Anda memiliki ${gross} gross, ${lusin} lusin, ${sisaTelur} sisa telur`);
// }
// // Print result
// function printHitungTelurGross(var1) {
//
// }
// printHitungTelurGross(hitungTelurGross(144,12,1342))

function getName(namaDepan, namaBelakang) {
    return namaDepan + namaBelakang
}

console.log(getName("Jution", "Candra"))