domRender();

//SELECCION DE ELEMENTOS DEL DOM

const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", domRender);

function domRender(){
     //FUNCION QUE ENVIA UNA PETICION A LA RUTA /APIREST Y GUARDA LA RESPUESTA DEL SERVIDOR EN UNA VARIABLE RESPONSE
  fetch("/apirest").then(function(response) {
    response.json().then(function(response) {
      let personas = response;
      while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }
      //ESTE BUCLE RENDERIZA POR CADA PERSONA UN DIV EN EL DOM
      for (let person of personas) {
        const div = document.createElement("div");

        div.innerHTML = `<p>nombre: ${person.nombre}  profesion: ${person.profesion} edad: ${person.edad}</p>`;
        container.appendChild(div);
      }
    });
  });
}
