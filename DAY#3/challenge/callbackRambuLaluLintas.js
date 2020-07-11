var merah = "Berhenti"

var kuning = "Hati-hati"

var hijau = "Jalan"


function Merah() {
    console.log(merah)
}

function Kuning(callback){
    setTimeout( () => {
        console.log(kuning)
        callback()
    }, 1000)

}

function Hijau() {
    setTimeout(()=> {
        console.log(hijau)
    }, 1000)

}

Merah()
Kuning(Hijau)