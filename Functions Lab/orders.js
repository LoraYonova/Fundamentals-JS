function order(product, count) {
    let products = ["coffee", "water", "coke", "snacks"];
    let price = 0;

    if (product == products[0]) {
        price = 1.50 * count;

    } else if (product == products[1]) {
        price = 1.00 * count;

    } else if (product == products[2]) {
        price = 1.40 * count;

    } else if (product == products[3]) {
        price = 2.00 * count;
    }

    console.log(price.toFixed(2));
}

order("water", 5);
order("coffee", 2);