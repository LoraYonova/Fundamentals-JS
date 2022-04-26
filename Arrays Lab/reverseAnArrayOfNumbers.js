function reverse(n, input) {

    let arr = [];
    for (let i = 0; i < n; i++) {
       arr.push(input[i]);
        
    }

    let output = "";

    for (let j = arr.length - 1; j >= 0; j--) {
        output += arr[j] + " ";
        
    }

    console.log(output);
}

reverse(3, [10, 20, 30, 40, 50]);
reverse(4, [-1, 20, 99, 5]);
reverse(2, [66, 43, 75, 89, 47]);