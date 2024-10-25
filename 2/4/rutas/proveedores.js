const express = require('express');
const Proveedor = require('../modelos/proveedor');
const router = express.Router();

let proveedores = [];

// Crear proveedor
router.post('/', (req, res) => {
    const { nombre, contacto, direccion } = req.body;
    const nuevoProveedor = new Proveedor(nombre, contacto, direccion);
    proveedores.push(nuevoProveedor);
    res.status(201).send(nuevoProveedor);
});

// Obtener  proveedor
router.get('/', (req, res) => {
    res.status(200).send(proveedores);
});

// Actualizar un proveedors
router.patch('/:nombre', (req, res) => {
    const { nombre } = req.params;
    const proveedorActualizado = req.body;
    const indice = proveedores.findIndex(proveedor => proveedor.nombre === nombre);

    if (indice !== -1) {
        proveedores[indice] = { ...proveedores[indice], ...proveedorActualizado };
        res.status(200).send(proveedores[indice]);
    } else {
        res.status(404).send({ mensaje: 'Proveedor no encontrado' });
    }
});

// Eliminar proveedor
router.delete('/:nombre', (req, res) => {
    const { nombre } = req.params;
    const indice = proveedores.findIndex(proveedor => proveedor.nombre === nombre);

    if (indice !== -1) {
        const proveedorEliminado = proveedores.splice(indice, 1);
        res.status(200).send(proveedorEliminado);
    } else {
        res.status(404).send({ mensaje: 'Proveedor no encontrado' });
    }
});

module.exports = router;
