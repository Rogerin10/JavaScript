// models/Evento.js
const habitaciones = [];

class habitacion {
    constructor(numero, tipo, precio, disponibilidad) {
        this.numero = numero;
        this.tipo = tipo;
        this.precio = precio;
        this.disponibilidad = disponibilidad;
        this.id = habitacion.incrementId();
    }

    static incrementId() {
        return habitacion.currentId++;
    }

    static currentId = 1;
}

module.exports = {habitaciones, habitacion};
