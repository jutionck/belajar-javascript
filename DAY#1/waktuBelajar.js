function Waktu(inputJam) {
    let message;
    if(inputJam >= 8 && inputJam <= 11) {
        message = "WAKTU BELAJAR";
    } else if(inputJam >= 13 && inputJam <= 17) {
        message = "WAKTU BELAJAR";
    } else if(inputJam == 12) {
        message = "WAKTU ISTIRAHAT";
    } else if(inputJam >= 4 && inputJam <= 5) {
        message = "WAKTU BANGUN";
    } else if(inputJam > 24) {
        message = "HANYA ADA 24 JAM DALAM SEHARI"
    } else {
        message = "WAKTU MAIN";
    }
    return message
}

function printMessage(jam) {
    console.log(Waktu(jam))
}

// Result
printMessage(9)
printMessage(12)
printMessage(4)
printMessage(25)
printMessage(20)