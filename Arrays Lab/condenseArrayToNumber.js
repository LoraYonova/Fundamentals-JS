function condenseArrayToNumber(arr) {


    while (arr.length > 1) {
        let condensed = [arr.length - 1];
    for (let i = 0; i < arr.length - 1; i++) {
       condensed[i] = arr[i] + arr[i + 1];
        
    }
    arr = condensed;
  
}
console.log(arr[0]);
    

}

condenseArrayToNumber([2,10,3]);
condenseArrayToNumber([5,0,4,1,2]);
condenseArrayToNumber([1]);