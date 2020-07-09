function FizzBuzz() {
    FizzBuzzProccess(20)
}

function FizzBuzzProccess(numberInput) {
    let i;
    for (i = 1; i<=numberInput; i++) {
        if(i % 5 == 0 && i % 2 == 0) {
            PrintResult("FIZZBUZZ")
        } else if (i % 5 == 0 && i % 2 != 0) {
            PrintResult("FIZZ")
        } else if (i % 2 == 0 && i % 5 != 0) {
            PrintResult("BUZZ")
        } else {
            PrintResult(i)
        }
    }
}

function PrintResult(result) {
    console.log(result)
}
// print result
FizzBuzz()