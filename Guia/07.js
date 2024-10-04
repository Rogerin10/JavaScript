console.log("Cafeteria");
console.log("-------------- Menu del día --------------");
console.log("1. Gohan --> $4000 ");
console.log("2. Completo --> $2000 ");
console.log("3. Ensalada --> $3000 ");
console.log("4. Cafe --> $500 ");

// Capturar la entrada del usuario
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Por favor, seleccione el plato que desea (1, 2 o 3): ", opcion => {
    let total = 0.0;
    let plato = "";

    switch (parseInt(opcion)) {
        case 1:
            plato = "Gohan";
            total = 4000;
            break;
        case 2:
            plato = "Completo";
            total = 2000;
            break;
        case 3:
            plato = "Ensalada";
            total = 3000;
            break;
        case 4:
            plato = "Cafe";
            total = 500;
            break;
        default:
            console.log("Opción inválida");
            readline.close();
            return;
    }
    
    const date = new Date(); // objeto fecha

    console.log("Plato seleccionado: " + plato);
    console.log("Total a pagar: $" + total);
    console.log("Fecha de la compra: " + date);

    readline.close();
});

