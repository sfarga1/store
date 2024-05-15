const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Permite que el servidor acepte solicitudes CORS desde cualquier origen
app.use(cors());

// Parsea las solicitudes con formato JSON
app.use(bodyParser.json());

// Datos de los zapatos inicialmente vacíos
let zapatos = [];

// Ruta para obtener todos los zapatos
app.get('/api/products', (req, res) => {
  res.json(zapatos);
});

// Ruta para obtener un zapato por ID
app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const zapato = zapatos.find(z => z.id === id);
  if (zapato) {
    res.json(zapato);
  } else {
    res.status(404).json({ message: 'Zapato no encontrado' });
  }
});

// Ruta para agregar un nuevo zapato
app.post('/api/products', (req, res) => {
  const zapato = req.body;
  zapatos.push(zapato);
  res.status(201).json(zapato);
});

// Ruta para actualizar un zapato por ID
app.put('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = zapatos.findIndex(z => z.id === id);
  if (index !== -1) {
    zapatos[index] = req.body;
    res.json(zapatos[index]);
  } else {
    res.status(404).json({ message: 'Zapato no encontrado' });
  }
});

// Ruta para eliminar un zapato por ID
app.delete('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  zapatos = zapatos.filter(z => z.id !== id);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
