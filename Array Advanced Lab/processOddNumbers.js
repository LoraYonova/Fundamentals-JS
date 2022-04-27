function solve(arr) {

    let result = arr
        .filter((num, i) => i % 2 == 1)
        .map(x => 2 * x)
        .reverse();
        return console.log(result.join(' '));

}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);