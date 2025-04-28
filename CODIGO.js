const claveApi = '7b449c249ef9492f9a1234544252604';
const idioma ='es';
const inpCiudad= document.getElementById('input - ciudad');

async function obtenerClima(){
    const ciudad = inpCiudad.ariaValueMax;

    if(ciudad){
        alert('Por favor ingrese una ciudad');
        return; 
    }
    const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;
    const response = await fetch(apiClimaActual);

    mostarClima(data);
}


function mostrarClima(data) {
    document.querySelector('.clima-icono').src = data.current.condition.icon;
    document.querySelector('.clima-texto').innerHTML = data.current.condition.text;
    document.querySelector('.temp').innerHTML = data.current.temp_c + '°C';
    document.querySelector('.ciudad').innerHTML = data.location.name;
    document.querySelector('.humedad').innerHTML = data.current.humidity + '%';
    document.querySelector('.viento').innerHTML = data.current.wind_kph + ' km/h';
}
