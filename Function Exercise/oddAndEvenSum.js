function oddAndEvenSum(number) {
    let num = number.toString();

    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < num.length; i++) {
    
        if (Number(num[i]) % 2 == 0) {
            evenSum += Number(num[i]);
        } else {
            oddSum += Number(num[i]);
        }
        
    }
  

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);