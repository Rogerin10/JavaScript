// models/Evento.js
const reservas = [];

class reserva {
    constructor(nombreHuesped, fechaLlegada, fechaSalida, nroHabitacion) {
        this.nombreHuesped = nombreHuesped;
        this.fechaLlegada = fechaLlegada;
        this.fechaSalida = fechaSalida;
        this.nroHabitacion = nroHabitacion;
        this.id = reserva.incrementId();
    }

    static incrementId() {
        return reserva.currentId++;
    }

    static currentId = 1;
}

module.exports = {reservas, reserva};
