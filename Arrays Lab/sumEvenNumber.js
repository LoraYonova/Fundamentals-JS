function sumEvenNumber(arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);    
    }

    for (let num of arr) {
        if (num % 2 == 0) {
            sum += num;
        }
    }
    console.log(sum);
}

sumEvenNumber(['1','2','3','4','5','6']);
sumEvenNumber(['3','5','7','9']);
sumEvenNumber(['2','4','6','8','10']);