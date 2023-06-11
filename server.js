
const express = require ('express')

const app = express()

const port = 3001

app.get('/', (req, res)=> {
    res.send({
        data: 'Hola Mundo'
    })

})

app.listen(port, () =>{
    console.log('La aplicacion esta en linea!');
})

