const readline = require('readline');

console.log("Hola Mundo");
console.log("Calculadora de Consumo de combustible");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Cuantos Kilometros Condujo?? ", (kim) => {
    rl.question("Cuantos Litros A utilizado?? ", (lit) => {
        var eficiencia=(kim/lit);
        console.log("La eficiencia de su vehiculo es de "+eficiencia+" km por Litro de Combustible");
        rl.close();
    });
});