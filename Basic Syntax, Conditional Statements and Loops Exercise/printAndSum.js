function printAndSum(start, end) {
    let sum = 0;
    let squence = '';
    for (let i = start; i <= end; i++) {
        sum += i;
        squence += i + " ";
    }

    console.log(squence);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);