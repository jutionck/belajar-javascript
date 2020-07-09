function pyramid(rows) {

    let result = "";
    let i,j,k;
    for(i = 1, k = 0; i <= rows; i++, k = 0) {

        for(j = 1; j <= rows-i; j++) {
            result += " ";
        }

        for(;k != 2*i-1;) {
            result += "*";
            k++;
        }
        console.log(result)
        result = "";
    }
}

pyramid(10);