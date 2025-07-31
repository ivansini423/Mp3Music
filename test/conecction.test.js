
const express = require('express')
const mysql = require('mysql2/promise')


const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const PORT = 3000;

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
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en: http://localhost:${PORT}`);

    });
});
test('conexion a base de datos', async () => { await connection() })

