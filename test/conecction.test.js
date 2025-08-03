const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const fetch = require('node-fetch'); // Asegúrate de instalarlo: npm install node-fetch

// describe('conexion a servidor', () => {
//     let server;
//     const app = express();
//     const PORT = 3000;

//     app.use(cors());

//     app.get('/', (req, res) => {
//         res.json({ mensaje: 'Servidor Node.js con Express está funcionando' });
//     });

//     beforeAll(async () => {
//         server = await new Promise((resolve) => {
//             const srv = app.listen(PORT, () => resolve(srv));
//         });
//     });

//     afterAll(async () => {
//         await server.close();
//     });

//     test('conexion a servidor', () => {
//         const address = server.address().address === '::' ? 'localhost' : server.address().address;
//         console.log(`Servidor escuchando en http://${address}:${PORT}`);
//         expect(server.listening).toBe(true);
//     });
// });


it('conexion de react a servidor con fetch', () => {
    const url = 'http://localhost:3000/';
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
});
