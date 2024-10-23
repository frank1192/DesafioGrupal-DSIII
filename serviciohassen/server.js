const express = require('express');
const app = express();
const port = 7005;

app.get('/menu', (req, res) => {
    const menu = [
        {
            categoria: "Desayuno",
            items: [
                { nombre: "Pancakes con miel", precio: "$10" },
                { nombre: "Omelette de vegetales", precio: "$8" },
                { nombre: "Tostadas francesas", precio: "$9" }
            ]
        },
        {
            categoria: "Almuerzo",
            items: [
                { nombre: "Ensalada César con pollo", precio: "$12" },
                { nombre: "Hamburguesa clásica", precio: "$15" },
                { nombre: "Pasta a la boloñesa", precio: "$14" }
            ]
        },
        {
            categoria: "Cena",
            items: [
                { nombre: "Salmón a la parrilla", precio: "$20" },
                { nombre: "Filete de res con puré de papas", precio: "$22" },
                { nombre: "Risotto de hongos", precio: "$18" }
            ]
        },
        {
            categoria: "Bebidas",
            items: [
                { nombre: "Café", precio: "$3" },
                { nombre: "Té", precio: "$2" },
                { nombre: "Jugo de naranja", precio: "$4" }
            ]
        }
    ];
    res.json({ menu: menu });
});

app.listen(port, () => {
    console.log(`Servicio de Hotel corriendo en el puerto ${port}`);
});