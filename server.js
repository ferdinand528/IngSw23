
const express = require ('express')

const app = express()

const sumar = require('./suma')

const port = 3001

app.get('/', (req, res)=> {
    const resultado = sumar(a, b);
    res.send(`El resultado de la suma es: ${resultado}`);
    });

app.listen(port, () =>{
    console.log('Servidor Express en funcionamiento en el puerto 3001');
})

