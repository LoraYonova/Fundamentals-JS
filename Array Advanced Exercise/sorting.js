function sorting(arr) {
    arr.sort((a, b) => b - a);

    let sortArr = [];

   while(arr.length > 0) {
  
    let maxNumber = arr.shift();
        sortArr.push(maxNumber);

        let minNumber = arr.pop();
        sortArr.push(minNumber);
     

    }

    console.log(sortArr.join(" "));
}


sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);