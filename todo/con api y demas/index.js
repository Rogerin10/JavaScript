// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Datos de ejemplo
let productos = [
    { id: 1, nombre: "Producto 1", precio: 100 },
    { id: 2, nombre: "Producto 2", precio: 200 },
];

// Ruta GET para obtener productos
app.get('/api/productos', (req, res) => {
    res.json(productos);
});

// Ruta POST para añadir un nuevo producto
app.post('/api/productos', (req, res) => {
    const nuevoProducto = { id: productos.length + 1, ...req.body };
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
