function addAndSubtract(numOne, numTwo, numThree) {
    function sum() {
        return numOne + numTwo;
    }

    function subtract() {
        return sum() - numThree;
    }

    console.log(subtract());
}


addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);