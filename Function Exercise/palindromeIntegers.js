function polidromeIntegers(arr) {
   
    for (let i = 0; i < arr.length; i++) {

        let result = arr[i].toString();

        if (result.length == 0) {
                console.log("true");
                break;
        } 

        if (result[0] == result[result.length - 1]) {
            console.log("true");
        } else {
            console.log("false");
        }
        
    }

}

polidromeIntegers([123, 323, 421, 121]);
polidromeIntegers([32, 2, 232, 1010]);