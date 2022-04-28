function train(arr) {

    let wagons = arr.shift().split(" ").map(Number);
    let capacity = Number(arr.shift());

    for (const command of arr) {
        let currentCommnad = command.split(" ");

        if (currentCommnad[0] === 'Add') {
            wagons.push(Number(currentCommnad[1]));
        } else {
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + Number(currentCommnad[0]) <= capacity) {
                    wagons[i] += Number(currentCommnad[0]);
                    break;
                }

            }
        }
    }

    console.log(wagons.join(" "));

}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);