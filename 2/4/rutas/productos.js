const express = require('express');
const Producto = require('../modelos/producto');
const router = express.Router();

let productos = [];

// Crear producto
router.post('/', (req, res) => {
    const { nombre, categoria, precio, cantidad, proveedor } = req.body;
    const nuevoProducto = new Producto(nombre, categoria, precio, cantidad, proveedor);
    productos.push(nuevoProducto);
    res.status(201).send(nuevoProducto);
});

// Obtener producto
router.get('/', (req, res) => {
    res.status(200).send(productos);
});

// Actualizar  producto
router.patch('/:nombre', (req, res) => {
    const { nombre } = req.params;
    const productoActualizado = req.body;
    const indice = productos.findIndex(producto => producto.nombre === nombre);

    if (indice !== -1) {
        productos[indice] = { ...productos[indice], ...productoActualizado };
        res.status(200).send(productos[indice]);
    } else {
        res.status(404).send({ mensaje: 'Producto no encontrado' });
    }
});

// Eliminar producto
router.delete('/:nombre', (req, res) => {
    const { nombre } = req.params;
    const indice = productos.findIndex(producto => producto.nombre === nombre);

    if (indice !== -1) {
        const productoEliminado = productos.splice(indice, 1);
        res.status(200).send(productoEliminado);
    } else {
        res.status(404).send({ mensaje: 'Producto no encontrado' });
    }
});

module.exports = router;
