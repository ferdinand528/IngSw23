
const express = require ('express')

const app = express()

const sumar = require('./suma')

const port = 3001

app.get('/', (req, res)=> {
    const resultado = sumar(2,5);
    res.send(`El resultado de la suma es: ${resultado}`);
    console.log('Esto funciona parece');
    });

app.listen(port, () =>{
    console.log('Servidor Express en funcionamiento en el puerto 3001');
})

