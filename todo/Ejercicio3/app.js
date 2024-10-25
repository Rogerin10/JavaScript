const express = require("express");
const app = express();
const port = 3000;
const Tarea = require('./modulos/Tareas');
const Usuarios = require('./modulos/Usuarios');

app.use(express.json());

// Tareas // 

let tareas = [
    {id: 1, titulo: 'Programar', descripcion: 'ojqsnfiun', fechaVencimiento: '04/12/2024', estado: "activo"},
    {id: 2, titulo: 'funar', descripcion: 'owiugcnvpiun', fechaVencimiento: '04/01/2025', estado: "activo"}
];


app.get('/mostrartarea', (req, res) =>{
    res.json(tareas);
});

app.post('/agregartarea', (req, res) => {
    const nuevaTarea = {
        id: tareas.lenght+1,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        fechaVencimiento: req.body.fechaVencimiento,
        estado: req.body.estado
    };
    tareas.push(nuevaTarea);
    res.status(201).json(nuevaTarea);
});

app.put('/actualizartarea/:id', (req, res) =>{
    const tarea = tareas.find(l => l.id === parseInt(req.params.id));
    if(!tarea) return res.status(404).send('La tarea no fue encontrada.');

    tarea.titulo = req.body.titulo;
    tarea.descripcion = req.body.descripcion;
    tarea.fechaVencimiento = req.body.fechaVencimiento;
    tarea.estado = req.body.estado
    res.json(tarea);
});

app.delete('/borrartarea/:id', (req, res) => {
    const tarea = tareas.find(l => l.numero === parseInt(req.params.tareas));
    if(!tarea) return res.status(404).send('La tarea no fue encontrada');

    const index = tareas.indexOf(tarea);
    tareas.splice(index, 1);
    res.json(tarea);
});

// Usuarios//


let usuarios = [
    {id: 1, nombre: "Matias", correo:"mcamposa@it.ucsc.cl", contraseña:"nqsoidnoai"},
    {id: 2, nombre: "Randall", correo:"rvega@it.ucsc.cl", contraseña:"03022005"}
];

app.get('/mostrarusuario', (req, res) =>{
    res.json(usuarios);
});

app.post('/agregarsuario', (req, res) => {
    const nuevaUsuario = {
        id: usuarios.lenght+1,
        nombre: req.body.nombre,
        correo: req.body.correo,
        contraseña: req.body.contraseña
    };
    usuarios.push(nuevaUsuario);
    res.status(201).json(nuevaUsuario);
});

app.put('/actualizarusuario/:id', (req, res) =>{
    const usuario = usuarios.find(l => l.id === parseInt(req.params.id));
    if(!usuario) return res.status(404).send('El usuario no fue encontrado.');

    usuario.nombre = req.body.nombre;
    usuario.correo = req.body.correo;
    usuario.contraseña = req.body.contraseña;
    res.json(usuario);
});

app.delete('/borrartarea/:id', (req, res) => {
    const tarea = tareas.find(l => l.numero === parseInt(req.params.tareas));
    if(!tarea) return res.status(404).send('La tarea no fue encontrada');

    const index = tareas.indexOf(tarea);
    tareas.splice(index, 1);
    res.json(tarea);
});

// Conexión Local Puerto: 3000 //
app.listen(port, () =>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
});