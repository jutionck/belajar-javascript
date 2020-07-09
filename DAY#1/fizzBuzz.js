function FizzBuzz(numberInput) {
    let i;
    for (i = 1; i<=numberInput; i++) {
        if(i % 5 == 0 && i % 2 == 0) {
            console.log("FIZZBUZZ")
        } else if (i % 5 == 0 && i % 2 != 0) {
            console.log("FIZZ")
        } else if (i % 2 == 0 && i % 5 != 0) {
            console.log("BUZZ")
        } else {
            console.log(i)
        }
    }
}

FizzBuzz(5)