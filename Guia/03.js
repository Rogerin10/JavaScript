const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pregunta por el año
readline.question("Introduce un año: ", (input) => {
    const año = parseInt(input);

    // Comprueba si el año es bisiesto

    if ((año % 4 === 0 && año % 100 !== 0) || (año % 100 === 0 && año % 400 === 0)) {
        console.log(`El año ${año} es bisiesto`);
    } else {
        console.log(`El año ${año} no es bisiesto`);
    }

    readline.close();
});
