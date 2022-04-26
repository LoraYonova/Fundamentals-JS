function maxNumber(arr) {

    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
       
        let currentElement = arr[i];
        let isTopNumber = true;

        for (let j = i + 1; j < arr.length; j++) {
           let nextEl = arr[j];
           if (currentElement <= nextEl) {
               isTopNumber = false;
               break;
           } 

       
        }

        if (isTopNumber) {
            arr2.push(currentElement);
        }

    }

    console.log(arr2.join(' '));

}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);