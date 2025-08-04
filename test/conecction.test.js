// const express = require('express');
// const mysql = require('mysql2/promise');
// const cors = require('cors');
const fetch = require('node-fetch'); 

describe('Conexion hacia react native usando fetch', () => {
    it('conexion de react a servidor con fetch', () => {
        const url = 'http://localhost:3000/';
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
    });
})

