// constructor
let person = new Object();

// literal
let person2 = {
    name: "Eza",
    age: 23,
    gender: null,
    'alamat tinggal' : "depok" // bisa define key lebih dari 1 kata, memakai petik
}

// add property
person2.gender = "Laki-laki";
console.log(person2);

// delete property
delete  person2.gender;
console.log(person2)

// akses key lebih dari 1 kata menggunakan square bracket
console.log(person2["alamat tinggal"]);

// in operator -> cek apakah key ada atau tidak (jika ada true, jika tidak ada false)
console.log("gender" in person2);
console.log(person2.name != undefined);

// akses semua isi object menggunakan for/in
for(const key in person2) {
    console.log(person2[key])
}

// akses semua isi object menggunakan for/of harus person2 = []
// for(const key of person2) {
//     console.log(key)
// }

// stored and copied by reference
let user1 = {
    name: "Apin"
}
let user2 = user1
console.log(user1 === user2)

// copied value
let action1 = {canWalk: true};
let action2 = {canSpeak: true};

Object.assign(user1, action1, action2);
action1.canWalk = false;
console.log(user1);

let user3 = Object.assign({}, user1)
console.log(user3);

// cek apakah object sama
console.log(user3 === user1)