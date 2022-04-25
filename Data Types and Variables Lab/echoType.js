function echoType(type){

    let param = typeof(type);

    console.log(param);

    if (param == 'string' || param == 'number') {
        console.log(type);
    } else {
        console.log('Parameter is not suitable for printing')
    }

}

echoType('Hello, JavaScript!');
echoType(18);
echoType(null);