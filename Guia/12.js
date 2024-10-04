const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Introduce un número límite para generar la lista de números primos: ", (input) => {
    const limite = parseInt(input);

    // Crear una lista de nuermos primos hasta el limite ingresado
    const primos = generarPrimos(limite);

    // Imprimir numeros
    console.log("Números primos hasta " + limite + ": " + primos);
    rl.close();
});

// Funcion para generar numeros
function generarPrimos(limite) {
    const primos = [];

    for (let i = 2; i <= limite; i++) {
        if (esPrimo(i)) {
            primos.push(i); // Agregar el numero primo a la lista
        }
    }

    return primos;
}

// Funcion verificar si un número es primo
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

