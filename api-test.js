const claveApi = '7b449c249ef9492f9a1234544252604'
const idioma ='es';
const ciudad = 'Huancayo'

const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;
const response = await fetch(apiClimaActual);
let  data = await response.json();
console.log(data.current.condition);

