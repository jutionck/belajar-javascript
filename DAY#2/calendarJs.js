let getDay = (day) => {
    for(let i = 1; i <= 31; i++) {
        if (day > 31) {
            return `${day} not availble`;
        }
        return day
    }
}

let getMonth = (month) => {
    for(let i = 1; i <= 12; i++) {
        if (month > 12) {
            return `${month} not availble`;
        }
        return month
    }
}

let getKabisat = (tahun) => {
    if(tahun % 4 === 0) {
        return tahun
    } else {
        return `${tahun} bukan merupakan tahun kabisat`;
    }
}

let printDate = (day,month,year) => {
    let monthName;
    let isValid = getMonth(month);
    switch (isValid) {
        case 1:
            monthName = "Januari";
            if(day == getDay(day) && year == getKabisat(year)) {
                console.log(`${day} ${monthName} ${year}`);
            } else {
                console.log(`${year} bukan tahun kabisat`);
            }
            break;
        case 2:
            monthName = "Februari";
            if(getDay(day) && year == getKabisat(year)) {
                if (day == 29) {
                    console.log(`${monthName} tahun ${year} hanya ada tanggal 1 sampai 28`);
                } else {
                    console.log(`${day} ${monthName} ${year}`);
                }
            }
            break;
            default:
                console.log("Error");
    }
}

printDate(29,2,2021)