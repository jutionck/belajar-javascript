function SwitchCase(inputBinatang) {
    let message;
    switch (inputBinatang) {
        case "kucing":
            message = `${inputBinatang} bersuara Meowww~`;
            break;
        case "anjing":
            message = `${inputBinatang} bersuara Guk Guk~`;
            break;
        case "sapi":
            message = `${inputBinatang} bersuara Moooooo~`;
            break;
        default:
            message = `${inputBinatang} belum ada di daftar`;
    }
    return message
}

function printSuaraBinatang(binatang) {
    let convertToLower = binatang.toLowerCase()
    console.log(SwitchCase(convertToLower));
}

printSuaraBinatang('KUDA')