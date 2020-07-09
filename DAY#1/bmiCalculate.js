function bmiCalculate(beratBadan, tinggiBadan) {
    let tinggiDalamMeter = tinggiBadan/100
    let bmi = beratBadan / Math.pow(tinggiDalamMeter,2)
    hasilBmi = bmi.toFixed(2)
    return hasilBmi;
}

function bmi() {
    let orangPertama, orangKedua, isCompare;
    orangPertama = "Rifky";
    orangKedua = "Robby";
    bmiPertama = bmiCalculate(60, 168);
    bmiKedua = bmiCalculate(70, 178);

    isCompare = bmiPertama > bmiKedua ?
        `BMI ${orangPertama}(${bmiPertama}) Lebih Tinggi dari ${orangKedua}(${bmiKedua})` :
        `BMI ${orangKedua}(${bmiKedua}) Lebih Tinggi dari ${orangPertama}(${bmiPertama})`;
    console.log(isCompare)

}

// Result
bmi()