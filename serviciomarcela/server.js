const express = require('express');
const app = express();
const port = 7000;

app.get('/mensajes', (req, res) => {
    const mensajes = [
        "Hola, soy el servicio de Marcela!",
        "Bienvenidos/as a la clase de microservicios",
        "Espero que estén aprendiendo mucho",
        "bye bye"
    ];
    res.json({ mensajes: mensajes });
});

app.listen(port, () => {
    console.log(`Servicio de Marcela corriendo en el puerto ${port}`);
});
