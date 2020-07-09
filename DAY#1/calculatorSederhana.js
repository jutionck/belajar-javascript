function calculator(numOne, numTwo, operation) {
    let hasil;
    switch (operation) {
        case "+":
            hasil = numOne + numTwo;
            console.log(`${numOne} + ${numTwo} = ${hasil}`);
            break;
        case "-":
            hasil = numOne - numTwo;
            console.log(`${numOne} - ${numTwo} = ${hasil}`);
            break;
        case "*":
            hasil = numOne * numTwo;
            console.log(`${numOne} * ${numTwo} = ${hasil}`);
            break;
        case "/":
            if(numOne == 0 || numTwo == 0) {
                console.log("Can't Divide")
            } else {
                hasil = numOne / numTwo;
                console.log(`${numOne} / ${numTwo} = ${hasil}`);
            }
            break;
        default:
            console.log("Operation not found!")
    }
}

calculator(2,3,"/")