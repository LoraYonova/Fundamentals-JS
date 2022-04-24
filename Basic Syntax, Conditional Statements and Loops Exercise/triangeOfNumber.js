function triangleOfNumbers(n) {

    for (let i = 1; i <= n; i++) {
        let line = "";
      for (let j = 1; j <= i; j++) {
          
          line += i;
          if (j !== i) {
              line += " ";
          }
      }
      console.log(line);
    }

}

triangleOfNumbers(3);