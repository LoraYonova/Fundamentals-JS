function calculator(numOne, numTwo, operator) {

    let operatots = ["multiply", "divide", "add", "subtract"];
    let total = 0;

    if (operator == operatots[0]) {
        total = numOne * numTwo;

    } else if (operator == operatots[1]){
        total = numOne / numTwo;

    } else if (operator == operatots[2]) {
        total = numOne + numTwo;

    } else if (operator == operatots[3]) {
        total = numOne - numTwo;
    }

    console.log(total);

}

calculator(5, 5, 'multiply');
calculator(40, 8, 'divide');
calculator(12, 19, 'add');
calculator(50, 13, 'subtract');