const express = require('express');
const { habitaciones, habitacion } = require('./Modulos/habitacion');
const { reservas, reserva } = require('./Modulos/reserva');
const app = express();
const PORT = 3022;


app.use(express.json());

app.post('/habitaciones', (req, res) => {
    const { numero, tipo, precio, disponibilidad } = req.body;
    const nuevaReserva = new reserva(numero, tipo, precio, disponibilidad);
    habitaciones.push(nuevaReserva);
    res.status(201).json(nuevaReserva);
});

//obtener
app.get('/habitaciones', (req, res) => {
    res.json(habitaciones);
});

//editar
app.put('/habitaciones/:id', (req, res) => {
    const { id } = req.params;
    const habitacion = habitaciones.find(e => e.id == id);
    if (habitacion) {
        Object.assign(habitacion, req.body);
        res.json(habitacion);
    } else {
        res.status(404).json({ mensaje: 'habitacion no encontrado' });
    }
});

//Eliminar
app.delete('/habitaciones/:id', (req, res) => {
    const { id } = req.params;
    const index = habitaciones.findIndex(e => e.id == id);
    if (index !== -1) {
        habitaciones.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ mensaje: 'Evento no encontrado' });
    }
});

//CRUD
//crear Participante
app.post('/reservas', (req, res) => {
    const { nombreHuesped, fechaLlegada, fechaSalida, nroHabitacion } = req.body;
    const nuevaReserva = new reserva(nombreHuesped, fechaLlegada, fechaSalida, nroHabitacion);
    reservas.push(nuevaReserva);
    res.status(201).json(nuevaReserva);
});

//obtener
app.get('/reservas', (req, res) => {
    res.json(reservas);
});

//editar
app.get('/reservas/:reservaid', (req, res) => {
    const { id } = req.params;
    const reservaa = reservas.filter(p => p.reservaid == reservaid);
    res.json(reservaa);
});

//Eliminar
app.delete('/reservas/:id', (req, res) => {
    const { id } = req.params ;
    const index = reservas.findIndex(p => p.id == id);
    if (index !== -1) {
        reservas.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ mensaje: 'reserva no encontrado' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});