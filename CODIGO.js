const claveApi = '7b449c249ef9492f9a1234544252604';
const idioma = 'es';
const inpCiudad = document.getElementById('input-ciudad');

async function obtenerClima() {
    const ciudad = inpCiudad.value;

    if (!ciudad) {
        alert('Por favor ingrese una ciudad');
        return;
    }

    const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

    try {
        const response = await fetch(apiClimaActual);
        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        mostrarClima(data);
    } catch (error) {
        console.error("Error al obtener el clima:", error.message);
        alert("No se encontró la ciudad o hubo un error con la API.");
    }
}

function mostrarClima(data) {
    document.querySelector('.clima-icono').src = data.current.condition.icon;
    document.querySelector('.clima-texto').textContent = data.current.condition.text;
    document.querySelector('.temp').textContent = data.current.temp_c + '°C';
    document.querySelector('.ciudad').textContent = data.location.name;
    document.querySelector('.humedad').textContent = data.current.humidity + '%';
    document.querySelector('.viento').textContent = data.current.wind_kph + ' km/h';
}
