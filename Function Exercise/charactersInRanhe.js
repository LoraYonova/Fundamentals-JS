function charInRange(firstChar, secondChar) {

    let start = firstChar.charCodeAt(0);
    let end = secondChar.charCodeAt(0);
    let result = [];

    if (end < start) {
        for (let j = end + 1; j < start; j++) {
            result.push(String.fromCharCode(j));
            
        }
    }

    for (let i = start + 1; i < end; i++) {
        result.push(String.fromCharCode(i));
    }

    console.log(result.join(" "));
}

charInRange('a', 'd');
charInRange('#', ':');
charInRange('C', '#');