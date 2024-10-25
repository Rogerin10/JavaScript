const express = require('express');
const app = express();
app.use(express.json()); // Middleware para analizar JSON en las solicitudes

// Base de datos simulada
let libros = [
  { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' },
  { id: 2, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes' }
];

// Rutas de la API

// Obtener todos los libros
app.get('/api/libros', (req, res) => {
  res.json(libros);
});

// Obtener un libro por ID
app.get('/api/libros/:id', (req, res) => {
  const libro = libros.find(l => l.id === parseInt(req.params.id));
  if (!libro) return res.status(404).json({ error: 'Libro no encontrado' });
  res.json(libro);
});

// Crear un nuevo libro
app.post('/api/libros', (req, res) => {
  const nuevoLibro = {
    id: libros.length + 1,
    titulo: req.body.titulo,
    autor: req.body.autor
  };
  libros.push(nuevoLibro);
  res.status(201).json(nuevoLibro);
});

// Actualizar un libro existente
app.put('/api/libros/:id', (req, res) => {
  const libro = libros.find(l => l.id === parseInt(req.params.id));
  if (!libro) return res.status(404).json({ error: 'Libro no encontrado' });

  libro.titulo = req.body.titulo;
  libro.autor = req.body.autor;
  res.json(libro);
});

// Eliminar un libro
app.delete('/api/libros/:id', (req, res) => {
  const libroIndex = libros.findIndex(l => l.id === parseInt(req.params.id));
  if (libroIndex === -1) return res.status(404).json({ error: 'Libro no encontrado' });

  libros.splice(libroIndex, 1);
  res.status(204).send();
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
