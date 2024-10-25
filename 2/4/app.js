const express = require('express');
const productoRutas = require('./rutas/productos');
const proveedorRutas = require('./rutas/proveedores');
const app = express();
const port = 3500;

app.use(express.json());
app.use('/productos', productoRutas);
app.use('/proveedores', proveedorRutas);

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

/*
{
  "nombre": "Pizza Margarita",
  "categoria": "Alimentos",
  "precio": 8.99,
  "cantidad": 50,
  "proveedor": "Pizzeria Chillán"
}

{
  "nombre": "Pizza Pepperoni",
  "categoria": "Alimentos",
  "precio": 10.99,
  "cantidad": 30,
  "proveedor": {
    "nombre": "Pizzeria Chillán",
    "contacto": "contacto@pizzeriachillan.cl",
    "direccion": "Av. Central 123, Chillán, Chile"
  }
}

*/ 