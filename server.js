const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Configuración de la conexión a MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'tu_basededatos'
});

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos MySQL:', error);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

// Ruta para obtener todos los zapatos
app.get('/api/products', (req, res) => {
  connection.query('SELECT * FROM products', (error, results) => {
    if (error) {
      console.error('Error al obtener los productos:', error);
      res.status(500).json({ message: 'Error al obtener los productos' });
      return;
    }
    res.json(results);
  });
});

// Ruta para agregar un nuevo zapato
app.post('/api/products', (req, res) => {
  const productData = req.body;
  connection.query('INSERT INTO products SET ?', productData, (error, result) => {
    if (error) {
      console.error('Error al crear un nuevo producto:', error);
      res.status(500).json({ message: 'Error al crear un nuevo producto' });
      return;
    }
    productData.id = result.insertId;
    res.status(201).json(productData);
  });
});

// Ruta para obtener un zapato por ID
app.get('/api/products/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM products WHERE id = ?', id, (error, results) => {
    if (error) {
      console.error('Error al obtener el producto:', error);
      res.status(500).json({ message: 'Error al obtener el producto' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ message: 'Zapato no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Ruta para actualizar un zapato por ID
app.put('/api/products/:id', (req, res) => {
  const id = req.params.id;
  const updatedProductData = req.body;
  connection.query('UPDATE products SET ? WHERE id = ?', [updatedProductData, id], (error) => {
    if (error) {
      console.error('Error al actualizar el producto:', error);
      res.status(500).json({ message: 'Error al actualizar el producto' });
      return;
    }
    res.json(updatedProductData);
  });
});

// Ruta para eliminar un zapato por ID
app.delete('/api/products/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM products WHERE id = ?', id, (error) => {
    if (error) {
      console.error('Error al eliminar el producto:', error);
      res.status(500).json({ message: 'Error al eliminar el producto' });
      return;
    }
    res.status(204).end();
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
