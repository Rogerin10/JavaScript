const express = require('express');
const app = express();
const port = 3000;

// Ruta que devuelve XML con contenido HTML embebido
app.get('/producto', (req, res) => {
    const xml = `
        <producto>
            <id>1</id>
            <nombre>Laptop</nombre>
            <descripcion>Laptop de alto rendimiento</descripcion>
            <precio>1500</precio>
            <detallesHTML>
                <![CDATA[
                    <div class="descripcion">
                        <h2>Especificaciones del producto</h2>
                        <p>Esta laptop incluye 16GB de RAM y 512GB de SSD.</p>
                    </div>
                ]]>
            </detallesHTML>
        </producto>
    `;
    
    res.set('Content-Type', 'application/xml');
    res.send(xml);
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
