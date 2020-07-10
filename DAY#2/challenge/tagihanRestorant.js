// var array
let restaurant = [250000, 710000, 125000];
let tips = [10, 15, 20];

let Pembayaran = (restaurant) => {
    // declare all variable
    let i = 0, lenRestaurant = restaurant.length, tipsAmount, total;
    // loop restaurant variable
    for(; i < lenRestaurant;) {
        // check price to give tips
        if(restaurant[i] > 500000) {
            tipsAmount = restaurant[i] * (tips[0] / 100);
            total = restaurant[i] + tipsAmount
        } else if(restaurant[i] >=250000 && restaurant[i] <= 500000) {
            tipsAmount = restaurant[i] * (tips[1] / 100);
            total = restaurant[i] + tipsAmount
        } else {
            tipsAmount = restaurant[i] * (tips[2] / 100);
            total = restaurant[i] + tipsAmount
        }
        console.log("Tagihan  :" + restaurant[i]);
        console.log("Tips \t :" + tipsAmount);
        console.log("Total \t :" + total);
        console.log("-----------------------------")
        i++
    }
}

// call function to display
console.log("[Challenge 3.2] Tagihan Restoran")
Pembayaran(restaurant);
