let urlBase= 'https://api.openweathermap.org/data/2.5/weather'
let api_key='0008c4a277c18fee4b130f2a8f8af1f0'

let difereciakelvin=273.15

document.getElementById('botonBusqueda').addEventListener('click', ()=> {
    const ciudad= document.getElementById('ciudadEntrada').value
    if (ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
.then(response => response.json())
.then(response => mostrarDatosClima(response))
}

function mostrarDatosClima(data){
    
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre = `${data.name}, ${data.sys.country}`
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description
    const humedad= data.main.humidity
    const icono=data.weather[0].icon

    const ciudadTitulo= document.createElement('h2')
    ciudadTitulo.textContent=ciudadNombre
    const temInfo= document.createElement('p')
    temInfo.textContent=`La temperarura es: ${Math.floor(temperatura-difereciakelvin)}°C`
    const humInfo= document.createElement('p')
    humInfo.textContent=`La humedad es: ${humedad}%`
    const descripInfo= document.createElement('p')
    descripInfo.textContent=`La descripcion metereologica es: ${descripcion}`
    const descripIcono= document.createElement('img')
    descripIcono.src=`https://openweathermap.org/img/wn/${icono}@2x.png`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temInfo)
    divDatosClima.appendChild(humInfo)
    divDatosClima.appendChild(descripInfo)
    divDatosClima.appendChild(descripIcono)
}


