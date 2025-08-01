const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.json({ mensaje: 'Servidor Node.js con Express está funcionando' });

    
});

const server = app.listen(PORT, () => {
    const address = server.address().address === '::' ? 'localhost' : server.address().address;
    console.log(`Servidor escuchando en http://${address}:${PORT}`);
});

