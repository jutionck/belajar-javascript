// var array
let restaurant = [250000, 710000, 125000];
let tips = [10, 15, 20];

let Pembayaran = (restaurant) => {
    // declare all variable
    let i = 0, lenRestaurant = restaurant.length, tipsAmount, subTotal, arr = [];
    // loop restaurant variable
    for(; i < lenRestaurant;) {
        // check price to give tips
        if(restaurant[i] > 500000) {
            tipsAmount = restaurant[i] * (tips[0] / 100);
            subTotal = restaurant[i] + tipsAmount
        } else if(restaurant[i] >=250000 && restaurant[i] <= 500000) {
            tipsAmount = restaurant[i] * (tips[1] / 100);
            subTotal = restaurant[i] + tipsAmount
        } else {
            tipsAmount = restaurant[i] * (tips[2] / 100);
            subTotal = restaurant[i] + tipsAmount
        }
        // make arr is object use method push
        arr.push({
            Tagihan: restaurant[i],
            Tips: tipsAmount,
            Total: subTotal
        })
        i++
    }
    // print result
    console.log(arr)
}

// call function to display
console.log("[Challenge 3.2] Tagihan Restoran")
Pembayaran(restaurant);
