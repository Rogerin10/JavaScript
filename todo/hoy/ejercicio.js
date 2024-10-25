const express = require('express');
const app = express();
const port =  3000;

app.use(express.urlencoded({extended: true}));

app.use('/', (req, res) => {
    res.send(`
    <form action="/calculate" method="post">
        <label for="num1">Numero 1:</label>
        <input type="number" id="num1" name="num1" required><br>
        <label for="num2">Numero 2:</label>
        <input type="number" id="num2" name="num2" required><br>
        <label for="num3">Numero 3:</label>
        <input type="number" id="num3" name="num3" required><br>
        <button type="submit">Enviar></button>
    </form>
    `);
});

app.post('/calculate',  (req, res) => {
    const num1 = parseFloat(red.body.num1);
    const num2 = parseFloat(red.body.num2);
    const num3 = parseFloat(red.body.num3);

    const sum =  num1 + num2 + num3;
    const difference = num1 - num2 - num3;
    const product= num1 *  num2 * num3;
    const quotient =  num1 / num2 / num3;
    const modulo = num1  % num2 % num3;

    res.send(`
    <h1>Resultados:</h1>
    <p>Suma: ${sum}</p>
    <p>Resta: ${difference}</p>
    <p>Multiplicacion: ${product}</p>
    <Division: ${quotient}</p>
    <p>Modulo: ${modulo}</p>
    <a href="/">Volver</a>
    `)
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});


