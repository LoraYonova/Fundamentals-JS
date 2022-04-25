function solve (n) {

    for (let i = 1; i <= n; i++) {
      
        let result = 0;
        let numString = String(i);

        for (let j = 0; j < numString.length; j++) {
            
            result += Number(numString[j]);
            
        }

        let special = false;

        if (result == 5 || result == 7 || result == 11) {
            special = true;
        }

        if (special) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }

}

solve(15);
