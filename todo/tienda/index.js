const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Tareas en memoria
let tareas = [];

// Obtener todas las tareas
app.get('/tareas', (req, res) => {
    res.json(tareas);
});

// Crear una nueva tarea
app.post('/tareas', (req, res) => {
    const tarea = req.body;
    tarea.id = tareas.length + 1;
    tareas.push(tarea);
    res.status(201).json(tarea);
});

// Actualizar una tarea
app.put('/tareas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tareaActualizada = req.body;
    const index = tareas.findIndex(t => t.id === id);

    if (index !== -1) {
        tareas[index] = { ...tareaActualizada, id };
        res.json(tareas[index]);
    } else {
        res.status(404).json({ error: "Tarea no encontrada" });
    }
});

// Eliminar una tarea
app.delete('/tareas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    tareas = tareas.filter(t => t.id !== id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});
