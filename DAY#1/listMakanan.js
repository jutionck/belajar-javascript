// var foods = {nasigoreng: 6000, AyamGoreng: 15000}
//
// console.log(foods.AyamGoreng)

// List Makanna

function printFoodPrice(foodName) {
    switch (foodName) {
        case "Nasi":
            console.log(`${foodName} Harga Rp. 6000`);
            break;
        case "Ayam Goreng":
            console.log(`${foodName} Harga Rp. 15000`);
            break;
        case "Ayam Bakar":
            console.log(`${foodName} Harga Rp. 18000`);
            break;
        case "Bebek Goreng":
            console.log(`${foodName} Harga Rp. 25000`);
            break;
        case "Bebek Bakar":
            console.log(`${foodName} Harga Rp. 30000`);
            break;
        default:
            console.log(`${foodName} Not Found`)
    }
}

printFoodPrice("Ayam Bakar")