function sumFirstAndLlastElement(arr) {

    arr = arr.map(Number);
    console.log(arr[0] + arr.pop());
}

sumFirstAndLlastElement(['20', '30', '40']);
sumFirstAndLlastElement(['5', '10']);