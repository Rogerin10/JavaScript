const express = require('express');
const app = express();
const port = 3000;

// Middleware para analizar cuerpos de solicitudes en JSON
app.use(express.json());

// Datos de ejemplo: productos en formato JSON
let productos = [
    { id: 1, nombre: "Laptop", precio: 1500 },
    { id: 2, nombre: "Smartphone", precio: 800 }
];

// Ruta para obtener todos los productos
app.get('/productos', (req, res) => {
    res.json(productos);
});

// Ruta para obtener un producto por ID
app.get('/productos/:id', (req, res) => {
    const producto = productos.find(p => p.id === parseInt(req.params.id));
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ mensaje: "Producto no encontrado" });
    }
});

// Ruta para crear un nuevo producto
app.post('/productos', (req, res) => {
    const nuevoProducto = {
        id: productos.length + 1,
        nombre: req.body.nombre,
        precio: req.body.precio
    };
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
});

// Ruta para actualizar un producto por ID
app.put('/productos/:id', (req, res) => {
    const producto = productos.find(p => p.id === parseInt(req.params.id));
    if (producto) {
        producto.nombre = req.body.nombre || producto.nombre;
        producto.precio = req.body.precio || producto.precio;
        res.json(producto);
    } else {
        res.status(404).json({ mensaje: "Producto no encontrado" });
    }
});

// Ruta para eliminar un producto por ID
app.delete('/productos/:id', (req, res) => {
    const index = productos.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
        const productoEliminado = productos.splice(index, 1);
        res.json(productoEliminado);
    } else {
        res.status(404).json({ mensaje: "Producto no encontrado" });
    }
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
