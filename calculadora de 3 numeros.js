const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el primer numero: ', (num1) => {
    rl.question('Ingrese el segundo numero: ', (num2) => {
        rl.question('Ingrese el tercer numero: ', (num3) => {

        rl.question('Ingrese la operación (+, -, *, /, %): ', (operacion) => {
            let resultado;
            switch (operacion) {
                case '+':
                    resultado = parseFloat(num1) + parseFloat(num2) + parseFloat(num3);
                    break;
                case '-':
                    resultado = parseFloat(num1) - parseFloat(num2) - parseFloat(num3);
                    break;
                case '*':
                    resultado = parseFloat(num1) * parseFloat(num2) * parseFloat(num3);
                    break;
                case '/':
                    resultado = parseFloat(num1) / parseFloat(num2) / parseFloat(num3);
                    break;
                case '%':
                    resultado = parseFloat(num1) % parseFloat(num2) % parseFloat(num3);
                    break;
                default:
                    console.log('Operación no válida');
                    rl.close();
                    return;
            }
            console.log(`El resultado de ${num1} ${operacion} ${num2} ${num3} es: ${resultado}`);
            rl.close();
        });
    });
});
});