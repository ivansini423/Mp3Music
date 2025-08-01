
const express = require('express')
const mysql = require('mysql2/promise')
const cors = require('cors');



const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.json({ mensaje: 'Servidor Node.js con Express está funcionando' });
});

function(){
    
}


const connection = async () => {
    const con = await mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'Jesh',
        database: 'coffe_dev'
    });
    await con.connect();
    console.log('connected as id ' + con.threadId);
}
test('conexion a servidor', async () => {
   
const server = app.listen(PORT, () => {
    const address = server.address().address === '::' ? 'localhost' : server.address().address;
    console.log(`Servidor escuchando en http://${address}:${PORT}`);
});
});
test('conexion a base de datos', async () => { await connection() })

