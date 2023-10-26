const express = require('express');//importa le modulo express
const app = express();//crea la instancia de express
const port = 3000; //se define el puerto

//definir una ruta usando app.get()
app.get('/', (req, res) =>{//define la ruta / (raiz) para las peticiones get
    res.send('Hello Express');//se ennvia la respuesta
});

//iniciar el servidor
app.listen(port, ()=> {//pone a escuchar el puerto
    console.log('Servidor Express escuchando el puerto ${port}');
}); 




































 module.exports = app;
