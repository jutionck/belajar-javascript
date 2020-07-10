let livecode = (hari, bulan, tahun) => {
    var namaBulan;
    for(let i = 1; i <= hari; i++) {
        if (i > 31) {
            console.log(`Tanggal ${hari} tidak ada`);
        } else if(i == hari) {
            if(bulan > 12) {
                console.log(`Bulan ${bulan} tidak ada`);
            } else {
                switch (bulan) {
                    case 1:
                        namaBulan = "Januari";
                        if (tahun % 4 === 0) {
                            console.log(hari + " " + namaBulan + " " + tahun);
                        } else if (tahun % 400 === 0) {
                            console.log(hari + " " + namaBulan + " " + tahun);
                        } else {
                            console.log(`Tahun Kabisat tidak terjadi pada ${tahun}`);
                        }
                        break;
                    case 2:
                        namaBulan = "Februari";
                        if (hari == 29) {
                            console.log(`Tahun Kabisat tidak terjadi pada ${tahun}`);
                        } else if (hari > 28 && tahun % 4 != 0) {
                            console.log(`Februari tahun ${tahun} hanya ada tanggal 1 sampai 28`);
                        } else if (hari > 29) {
                            console.log(`Februari tahun ${tahun} hanya ada tanggal 1 sampai 29`);
                        }
                        break;
                    case 3:
                        namaBulan = "Maret";
                        if (tahun % 4 === 0) {
                            console.log(hari + " " + namaBulan + " " + tahun);
                        } else if (tahun % 400 === 0) {
                            console.log(hari + " " + namaBulan + " " + tahun);
                        } else {
                            console.log(`Tahun Kabisat tidak terjadi pada ${tahun}`);
                        }
                        break;
                    case 4:
                        namaBulan = "April"
                        if (hari > 30) {
                            console.log(`${namaBulan} hanya ada tanggal 1 sampai 30`);
                        } else if (hari <= 30) {
                            console.log(hari + " " + namaBulan + " " + tahun);
                        }
                        break;
                    case 5:
                        namaBulan = "Mei";
                        if (tahun % 4 === 0) {
                            console.log(hari + " " + namaBulan + " " + tahun);
                        } else if (tahun % 400 === 0) {
                            console.log(hari + " " + namaBulan + " " + tahun);
                        } else {
                            console.log(`Tahun Kabisat tidak terjadi pada ${tahun}`);
                        }
                    case 6:
                        namaBulan = "Juni";
                        if (tahun % 4 === 0) {
                            console.log(hari + " " + namaBulan + " " + tahun);
                        } else if (tahun % 400 === 0) {
                            console.log(hari + " " + namaBulan + " " + tahun);
                        } else {
                            console.log(`Tahun Kabisat tidak terjadi pada ${tahun}`);
                        }
                        break;
                    case 7:
                        namaBulan = "Juli";
                        if (tahun % 4 === 0) {
                            console.log(hari + " " + namaBulan + " " + tahun);
                        } else if (tahun % 400 === 0) {
                            console.log(hari + " " + namaBulan + " " + tahun);
                        } else {
                            console.log(`Tahun Kabisat tidak terjadi pada ${tahun}`);
                        }
                        break;
                    case 8:
                        namaBulan = "Agustus";
                        if (tahun % 4 === 0) {
                            console.log(hari + " " + namaBulan + " " + tahun);
                        } else if (tahun % 400 === 0) {
                            console.log(hari + " " + namaBulan + " " + tahun);
                        } else {
                            console.log(`Tahun Kabisat tidak terjadi pada ${tahun}`);
                        }
                        break;
                    case 9:
                        namaBulan = "September";
                        if (tahun % 4 === 0) {
                            console.log(hari + " " + namaBulan + " " + tahun);
                        } else if (tahun % 400 === 0) {
                            console.log(hari + " " + namaBulan + " " + tahun);
                        } else {
                            console.log(`Tahun Kabisat tidak terjadi pada ${tahun}`);
                        }
                        break;
                    case 10:
                        namaBulan = "Oktober";
                        if (tahun % 4 === 0) {
                            console.log(hari + " " + namaBulan + " " + tahun);
                        } else if (tahun % 400 === 0) {
                            console.log(hari + " " + namaBulan + " " + tahun);
                        } else {
                            console.log(`Tahun Kabisat tidak terjadi pada ${tahun}`);
                        }
                        break;
                    case 11:
                        namaBulan = "November";
                        if (tahun % 4 === 0) {
                            console.log(hari + " " + namaBulan + " " + tahun);
                        } else if (tahun % 400 === 0) {
                            console.log(hari + " " + namaBulan + " " + tahun);
                        } else {
                            console.log(`Tahun Kabisat tidak terjadi pada ${tahun}`);
                        }
                        break;
                    case 12:
                        namaBulan = "Desember";
                        if (tahun % 4 === 0) {
                            console.log(hari + " " + namaBulan + " " + tahun);
                        } else if (tahun % 400 === 0) {
                            console.log(hari + " " + namaBulan + " " + tahun);
                        } else {
                            console.log(`Tahun Kabisat tidak terjadi pada ${tahun}`);
                        }
                        break;
                    default:
                        namaBulan = "Nama Bulan tidak ada"
                }
            }
        }
    }
}




// console.log("//input Livecode(29, 2, 2021)")
livecode(29,2,2021);

// console.log("//input Livecode(30, 2, 2021)")
livecode(30,2,2021);

// console.log("//input Livecode(30, 2, 2020)")
livecode(30,2,2020);

// console.log("//input Livecode(31, 4, 2020)")
livecode(31,4,2020);

// console.log("//input Livecode(21, 7, 2020)")
livecode(21,7,2020);