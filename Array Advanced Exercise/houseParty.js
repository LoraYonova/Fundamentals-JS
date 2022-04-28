function hauseParty(arr) {
     list = [];

    for (const command of arr) {

        let currentCommand = command.split(" ");

        let name = currentCommand[0];

        if (currentCommand.length == 3) {
            if (list.includes(name)) {
                console.log(`${name} is already in the list!`);

            } else {
                list.push(name);
            }
        } else {
            let index = list.indexOf(name);
            if (index !== -1) {

                list.slice(index, 1);

            } else {
                console.log(`${name} is not in the list!`);
            }
        }


    }

    console.log(list.join("\n"));
}

hauseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
);

hauseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);