function solve(numberPages, pagesReadInHour, numberOfDay) {

    let totalTime = numberPages / pagesReadInHour;
    let requiredHours = totalTime / numberOfDay;

    console.log(requiredHours);
}

solve(212, 20, 2);
solve(432, 15, 4);