const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('ingrese el lado de cuadrado: ', (input) => {
    const a = parseFloat(input);
    const area = a * a;
    console.log('El area es ' + area);
    readline.close();
});

