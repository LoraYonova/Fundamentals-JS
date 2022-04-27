function solve(arr){

    arr.sort();

    for (let i = 0; i < arr.length; i++) {
        let count = i + 1;
      console.log(`${count}.${arr[i]}`);
        
    }

}

solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
solve(['Watermelon', 'Banana', 'Apples']);