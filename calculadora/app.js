const express = require('express');
const app = express();
const port = 3000;

const suma = require('./modulos/suma');
const resta = require('./modulos/resta');
const multiplicacion = require('./Modulos/multiplicar');
const division = require('./Modulos/dividir');
const resto = require('./Modulos/resto');

app.use(express.json());

app.post('/calcular', (req, res) => {
    const { operacion, num1, num2 } = req.body;

    let resultado;

    switch (operacion) {

        case 'suma':
            resultado = suma(num1, num2);
        break;

        case 'resta':
            resultado = resta(num1, num2);
        break;

        case 'multiplicacion':
            resultado = resta(num1, num2);
        break;

        case 'division':
            resultado = division(num1, num2);
        break;

        case 'resto':
            resultado = resto(num1, num2);
        break;

        default:
            return res.status(400).send('operacion no valida');

    }

    res.send(`El resultado de la ${operacion} es: ${resultado}`)

});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
});