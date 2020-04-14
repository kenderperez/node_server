  //MODULOS REQUERIDOS PARA EL PROYECTO
  
  const express = require('express');
  const path = require('path');
  
  const accountSid = 'ACba34d01b6a8fd5d7e654f992990c91ca';
  const authToken = '3af7cddbe900b50576e9d8e2d3c77cd4';
  const client = require('twilio')(accountSid, authToken);
  
  const number = '+14243670189';

//INICIALIZACION DEL SERVIDOR
const app = express();

app.listen(1337, ()=>{
    console.log('server on port 1337', __dirname)
})

//ARCHIVOS ESTATICOS ENVIADOS A LA RUTA /
app.use('/', express.static(__dirname +'/public'));
app.use(express.json());

//clase personas
class Persona{
    constructor(nombre, edad, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
}
//PETICIONES HTTP DEL CLIENTE


app.post('/agregar_contenido', function(req, res){
    
    let data = req.body;
    const person = new Persona(data.nombre, data.edad, data.profesion);
    arrayPersonas.push(person)
    client.messages
  .create({
     body: 'nombre: ' + person.nombre + 'profesion: ' + person.profesion,
     from: '+14243670189',
     to: '+14243670189'
   })
  .then(message => console.log(message.sid));
    

    res.json({
        status: 'resivido'
    })
})

    //Peticion get a la ruta /apirest
app.get('/apirest', function(req, res){
console.log(req.url);


res.send(arrayPersonas) //respuesta
})

const arrayPersonas = [
    {
        nombre:'kender',
        edad: 24,
        profesion: 'desarrollador'
    },
    {
        nombre: 'juan',
        edad: 26,
        profesion: 'diseñador'
    },
    {
        nombre:'ryam',
        edad: 25,
        profesion: 'mecanico'
    },
    {
        nombre: 'juan',
        edad: 26,
        profesion: 'medico'
    }
        

];


