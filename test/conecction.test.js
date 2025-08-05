// const express = require('express');
// const mysql = require('mysql2/promise');
// const cors = require('cors');
const fetch = require('node-fetch'); 

describe('Conexion hacia react native usando fetch', () => {
    it('debería conectarse al servidor y recibir una respuesta JSON válida', async () => {
        const url = 'http://localhost:3000/';
        const response = await fetch(url);
        const data = await response.json();

        expect(response.ok).toBe(true);
        expect(data).toHaveProperty('mensaje', 'Servidor Node.js con Express está funcionando');
        expect(data).toHaveProperty('estado', 'Conexión establecida');
    });
})
