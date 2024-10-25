const express = require('express');
const app = express();
app.use(express.json()); // Middleware para interpretar JSON en las solicitudes

// Base de datos simulada
let usuarios = [
    { id: 1, nombre: 'Juan', email: 'juan@example.com' },
    { id: 2, nombre: 'Ana', email: 'ana@example.com' }
];

// Rutas de la API

// Obtener todos los usuarios
app.get('/api/usuarios', (req, res) => {
    res.json(usuarios);
});

// Obtener un usuario por ID
app.get('/api/usuarios/:id', (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(usuario);
});

// Crear un nuevo usuario
app.post('/api/usuarios', (req, res) => {
    const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre: req.body.nombre,
        email: req.body.email
    };
    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
});

// Actualizar un usuario existente
app.put('/api/usuarios/:id', (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    usuario.nombre = req.body.nombre;
    usuario.email = req.body.email;
    res.json(usuario);
});

// Eliminar un usuario
app.delete('/api/usuarios/:id', (req, res) => {
    const usuarioIndex = usuarios.findIndex(u => u.id === parseInt(req.params.id));
    if (usuarioIndex === -1) return res.status(404).json({ error: 'Usuario no encontrado' });

    usuarios.splice(usuarioIndex, 1);
    res.status(204).send();
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
