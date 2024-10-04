const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Introduce los grados Celcius: ", (input) => {
    const gradosC = parseFloat(input);
    const gradosF = (gradosC * 9 / 5) + 32;
    console.log(`${gradosC} grados Celcius es igual a ${gradosF} grados Farenheit`);
    readline.close();
});

