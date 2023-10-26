/*
const express = require('express');//importa le modulo express
const app == 3000; //se define el puerto
 express();//crea la instancia de express
const port 
//definir una ruta usando app.get()
app.get('/', (req, res) =>{//define la ruta / (raiz) para las peticiones get
    res.send('Hello Express');//se ennvia la respuesta
});

//iniciar el servidor
app.listen(port, ()=> {//pone a escuchar el puerto
    console.log('Servidor Express escuchando el puerto ${port}');
}); 
*/

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
  });




































 module.exports = app;
