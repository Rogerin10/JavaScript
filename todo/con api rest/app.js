const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware para analizar JSON

// Datos de ejemplo
let usuarios = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Ana" },
];

// Ruta GET para obtener todos los usuarios
app.get('/api/usuarios', (req, res) => {
  res.json(usuarios);
});

// Ruta POST para agregar un nuevo usuario
app.post('/api/usuarios', (req, res) => {
  const nuevoUsuario = { id: usuarios.length + 1, ...req.body };
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
