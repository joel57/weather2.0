// var button = document.querySelector('.button')
// var cityInput = document.querySelector('.cityInput'
let weatherInformation = document.querySelector("#weatherContainer")
let forecastInfo1 = document.querySelector("#forecastContainer1") //tarjeta dia 1
let forecastInfo2 = document.querySelector("#forecastContainer2") //tarjeta dia 2
let forecastInfo3 = document.querySelector("#forecastContainer3")
let forecastInfo4 = document.querySelector("#forecastContainer4")
let forecastInfo5 = document.querySelector("#forecastContainer5")



//Yess Tutor 8/26/22
async function search (){
    //this errases the search field (weatherInformation.innerHTML="")
    weatherInformation.innerHTML=""
    //
    var cityName =$("#cityInput").val()
    let response =await fetch("https://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&appid=2eca45ffa243e0add68c63c8e50768b3")
    let data=await response.json() 
    console.log(data) 

    let city = data["city"].name
    let temp = (1.8*((data["list"][0]["main"].temp)-273)+32).toFixed(2)
    let date = (data["list"][0].dt_txt).substring(0,9)
    let wind = data["list"][0]["wind"].speed
    let humidity = data["list"][0]["main"].humidity
    

    let printInfo = document.createElement('h2')
    printInfo.textContent=city+" "+date
    weatherInformation.appendChild(printInfo)

    let tempInfo = document.createElement('p')
    tempInfo.textContent="Temp: "+temp+" °F"
    weatherInformation.appendChild(tempInfo)

    let windInfo = document.createElement('p')
    windInfo.textContent="Wind: "+wind+" MPH"
    weatherInformation.appendChild(windInfo)

    let humidityInfo = document.createElement('p')
    humidityInfo.textContent="Humidity: "+humidity+" %"
    weatherInformation.appendChild(humidityInfo)

    let temp2 = (1.8*((data["list"][2]["main"].temp)-273)+32).toFixed(2)
    let date2 = (data["list"][2].dt_txt).substring(0,9)
    let wind2 = data["list"][2]["wind"].speed
    let humidity2 = data["list"][2]["main"].humidity

    console.log(temp2)
    console.log(date2)
    console.log(wind2)
    console.log(humidity2)


    //para cada una de las tarjetas obtener y mostrar la informacion de los dias, temp, wind, humidity EXTRA: revisar como poner el icono
    let printInfo1 = document.createElement('h3')
    printInfo1.textContent=date2
    forecastInfo1.appendChild(printInfo1)

    //let tempInfo1 = document.createElement('p')
    //tempInfo1.textContent="Temp: "+temp+" °F"
    //weatherInformation.appendChild(tempInfo)

    //let windInfo1 = document.createElement('p')
    //windInfo.textContent="Wind: "+wind+" MPH"
    //weatherInformation.appendChild(windInfo)

    //let humidityInfo1 = document.createElement('p')
    //humidityInfo.textContent="Humidity: "+humidity+" %"
    //weatherInformation.appendChild(humidityInfo)
}




    // fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=2eca45ffa243e0add68c63c8e50768b3")
    // .then(response => response.json())
    // .then(data => console.log(data))





