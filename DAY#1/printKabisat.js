function Kabisat(inputTahun) {
    let message;
    if(inputTahun % 4 == 0) {
        message = "TAHUN KABISAT";
    } else if(inputTahun % 400 == 0) {
        message = "TAHUN KABISAT";
    } else {
        message = "BUKAN TAHUN KABISAT"
    }
    return message;
}

function printTahunKabisat(tahun) {
    console.log(Kabisat(tahun));
}

// Result
printTahunKabisat(2020);
printTahunKabisat(2019);