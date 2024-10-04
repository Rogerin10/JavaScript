const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese la base del triangulo: ", (base) => {
    readline.question("Ingrese la altura del triangulo: ", (altura) => {
        const area = (parseFloat(base) * parseFloat(altura)) / 2;
        console.log("El area del triangulo es: " + area);
        readline.close();
    });
});

