const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Introduzca un número entero: ', (input) => {
    const numero = parseInt(input);

    if (numero % 2 === 0) {
        console.log('ES PAR');
    } else {
        console.log('ES IMPAR');
    }

    readline.close();
});