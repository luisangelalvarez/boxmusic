const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hola, Express!');
});

app.listen(port, () => {
  console.log(`El servidor Express está corriendo en http://localhost:${port}`);
});
