function Pyramid() {

    let rows = 10;
    let  result = "";
    for(let i = 1; i <= rows; i++){

        for(let j = 1; j <= i; ++j){
            result += "*";
        }
        console.log(result)
        result = "";
    }
}

// Result
Pyramid()