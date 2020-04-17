const casos= document.getElementById('casos');
const recuperados = document.getElementById('recuperados');
const muertes = document.getElementById('muertes');
const casoshoy= document.getElementById('casostoday');
const activos = document.getElementById('activos');
const muerteshoy = document.getElementById('muertestoday');
	
/*este codigo trae los datos de la api*/	
async function getData(pais) {
  try{
    let response = await fetch(`https://coronavirus-19-api.herokuapp.com/countries/${pais}`);
    return await response.json();
  }catch(err){
    console.error(err);
    // Handle errors here
  }

  
  
}

getData('venezuela').then((data)=>{
	//aca tengo el objeto de los datos almacenado en la variable data
	casos.innerHTML = data.cases;
	recuperados.innerHTML = data.recovered;
	muertes.innerHTML = data.deaths;
	casoshoy.innerHTML = data.todayCases;
	activos.innerHTML = data.active;
	muerteshoy.innerHTML = data.todayDeaths;
	console.log(data)
})
