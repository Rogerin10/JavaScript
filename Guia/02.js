const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Ingrese una palabra: ", (input) => {
    const letra = input.charAt(0);

    if (letra === letra.toUpperCase()) {
        console.log("La letra: " + letra + " es Mayuscula");
    } else {
        console.log("La letra: " + letra + " es Minuscula");
    }

    readline.close();
});

