const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let continuar = true;

const askQuestion = (question) => {
    return new Promise((resolve) => {
        readline.question(question, (answer) => {
            resolve(answer);
        });
    });
};

const main = async () => {
    while (continuar) {
        const num1 = parseFloat(await askQuestion("Ingrese el primer número: "));
        const num2 = parseFloat(await askQuestion("Ingrese el segundo número: "));

        console.log("Seleccione la operación a realizar:");
        console.log("1. Suma");
        console.log("2. Resta");
        console.log("3. Multiplicación");
        console.log("4. División");
        console.log("5. Resto");

        const opcion = parseInt(await askQuestion("Opción: "));

        let resultado = 0;
        switch (opcion) {
            case 1:
                resultado = num1 + num2;
                break;
            case 2:
                resultado = num1 - num2;
                break;
            case 3:
                resultado = num1 * num2;
                break;
            case 4:
                if (num2 !== 0) {
                    resultado = num1 / num2;
                } else {
                    console.log("No se puede dividir por cero.");
                    continue;
                }
                break;
            case 5:
                resultado = num1 % num2;
                break;
            default:
                console.log("Opción inválida.");
                continue;
        }

        console.log("El resultado es: " + resultado);

        const respuesta = await askQuestion("¿Desea realizar otra operación? (s/n): ");
        if (respuesta.toLowerCase() !== 's') {
            continuar = false;
            console.log("La respuesta es: " + resultado);
        }
    }

    readline.close();
};

main();

