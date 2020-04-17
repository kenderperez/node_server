  //MODULOS REQUERIDOS PARA EL PROYECTO
  
  const express = require('express');
  const path = require('path');
  //INICIALIZACION DEL SERVIDOR
const app = express();

app.listen(1338, ()=>{
    console.log('server on port 1337', __dirname)
})
  
//ARCHIVOS ESTATICOS ENVIADOS A LA RUTA /
app.use('/', express.static(__dirname +'/public'));
app.use(express.json());
