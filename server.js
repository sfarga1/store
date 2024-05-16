const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

// Permite que el servidor acepte solicitudes CORS desde cualquier origen
app.use(cors());

// Parsea las solicitudes con formato JSON
app.use(bodyParser.json());

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Monlau2024',
  database: 'zapatos'
});

// Conectar a MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Ruta para obtener todos los productos
app.get('/api/products', (req, res) => {
  const query = 'SELECT * FROM products';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching products:', err);
      res.status(500).json({ message: 'Error al obtener los productos' });
      return;
    }
    res.json(results);
  });
});

// Ruta para obtener un producto por ID
app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const query = 'SELECT * FROM products WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error fetching product by ID:', err);
      res.status(500).json({ message: 'Error al obtener el producto' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ message: 'Producto no encontrado' });
      return;
    }
    res.json(results[0]);
  });
});

// Ruta para agregar un nuevo producto
app.post('/api/products', (req, res) => {
  const producto = req.body;
  const query = 'INSERT INTO products SET ?';
  db.query(query, producto, (err, results) => {
    if (err) {
      console.error('Error adding product:', err);
      res.status(500).json({ message: 'Error al agregar el producto' });
      return;
    }
    res.status(201).json({ id: results.insertId, ...producto });
  });
});

// Ruta para actualizar un producto por ID
app.put('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const producto = req.body;
  const query = 'UPDATE products SET ? WHERE id = ?';
  db.query(query, [producto, id], (err, results) => {
    if (err) {
      console.error('Error updating product:', err);
      res.status(500).json({ message: 'Error al actualizar el producto' });
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).json({ message: 'Producto no encontrado' });
      return;
    }
    res.json({ id, ...producto });
  });
});

// Ruta para eliminar un producto por ID
app.delete('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const query = 'DELETE FROM products WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error deleting product:', err);
      res.status(500).json({ message: 'Error al eliminar el producto' });
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).json({ message: 'Producto no encontrado' });
      return;
    }
    res.status(204).end();
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
