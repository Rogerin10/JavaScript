const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Generar un numero entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Funcion 
function iniciarJuego() {
    rl.question('Adivina el número entre 1 y 100: ', (respuesta) => {
        const intento = parseInt(respuesta, 10);

        if (isNaN(intento)) {
            console.log('Por favor, introduce un número válido.');
            return iniciarJuego();
        }

        if (intento < numeroSecreto) {
            console.log('Demasiado bajo. Intenta nuevamente.');
            iniciarJuego();
        } else if (intento > numeroSecreto) {
            console.log('Demasiado alto. Intenta nuevamente.');
            iniciarJuego();
        } else {
            console.log('¡Felicidades! Adivinaste el número.');
            rl.close();
        }
    });
}

iniciarJuego();
