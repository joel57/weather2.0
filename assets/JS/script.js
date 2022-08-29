// var button = document.querySelector('.button')
// var cityInput = document.querySelector('.cityInput'
let weatherInformation = document.querySelector("#weatherContainer")
let forecastInfo1 = document.querySelector("#forecastContainer1") //tarjeta dia 1
let forecastInfo2 = document.querySelector("#forecastContainer2") //tarjeta dia 2
let forecastInfo3 = document.querySelector("#forecastContainer3")
let forecastInfo4 = document.querySelector("#forecastContainer4")
let forecastInfo5 = document.querySelector("#forecastContainer5")
var fiveDays = document.getElementById('5Days')
var cityList = document.querySelector("#cityList")

// localStorage
// localStorage.getItem get a variable from localstorage
// localStorage.setItem put a variable in localStorage only strings

$(document).ready(function(){
    if(localStorage.getItem("history")==undefined){
        console.log("there is not items in history")
    }else{
        
//test side city log
var history = JSON.parse(localStorage.getItem("history"))

//["orange","banana","pear"]
//    0        1       2
// 3

for (let index = 0; index < history.length; index++) {
    const element = history[index];
    let city = document.createElement('p')
city.textContent=element
cityList.appendChild(city)
}



    }
});

//Yess 8/26/22
async function search (){
    //this errases the search field (weatherInformation.innerHTML="")
    weatherInformation.innerHTML=""
    //
    var cityName =$("#cityInput").val()
    let response =await fetch("https://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&appid=2eca45ffa243e0add68c63c8e50768b3")
    let data=await response.json() 
    
    //

    //Rick 8/29/22 
    console.log(data) 
    fiveDays.style.visibility = "visible";

    if(localStorage.getItem("history")==undefined){
        var history = [cityName]
        localStorage.setItem("history",JSON.stringify(history))
    }else{
        var history = JSON.parse(localStorage.getItem("history"))
        history.push(cityName)
        localStorage.setItem("history",JSON.stringify(history))
    }


    let city = data["city"].name
    let temp = (1.8*((data["list"][0]["main"].temp)-273)+32).toFixed(2)
    let date = (data["list"][0].dt_txt).substring(0,10)
    let wind = data["list"][0]["wind"].speed
    let humidity = data["list"][0]["main"].humidity
    //Icon test
    //let icon = data["list"][0]["weather"][0].icon

    let printInfo = document.createElement('h2')
    printInfo.textContent=city+" "+date
    weatherInformation.appendChild(printInfo)

    //Icon test
    // let iconInfo =document.createElement('p')
    // iconInfo.textContent=icon+
    // weatherInformation.appendChild(iconInfo)

    let tempInfo = document.createElement('p')
    tempInfo.textContent="Temp: "+temp+" °F"
    weatherInformation.appendChild(tempInfo)

    let windInfo = document.createElement('p')
    windInfo.textContent="Wind: "+wind+" MPH"
    weatherInformation.appendChild(windInfo)

    let humidityInfo = document.createElement('p')
    humidityInfo.textContent="Humidity: "+humidity+" %"
    weatherInformation.appendChild(humidityInfo)

    
    //Day-2 info
    let temp2 = (1.8*((data["list"][6]["main"].temp)-273)+32).toFixed(2)
    let date2 = (data["list"][6].dt_txt).substring(0,10)
    let wind2 = data["list"][6]["wind"].speed
    let humidity2 = data["list"][6]["main"].humidity
    

    //para cada una de las tarjetas obtener y mostrar la informacion de los dias, temp, wind, humidity EXTRA: revisar como poner el icono
    let printInfo1 = document.createElement('h5')
    printInfo1.textContent=date2
    forecastInfo1.appendChild(printInfo1)

    let tempInfo1 = document.createElement('p')
    tempInfo1.textContent="Temp: "+temp2+" °F"
    forecastInfo1.appendChild(tempInfo1)

    let windInfo1 = document.createElement('p')
    windInfo1.textContent="Wind: "+wind2+" MPH"
    forecastInfo1.appendChild(windInfo1)

    let humidityInfo1 = document.createElement('p')
    humidityInfo1.textContent="Humidity: "+humidity2+" %"
    forecastInfo1.appendChild(humidityInfo1)


    //Day-3 info
    //Created Varibles to pull data from the API library: info is from the object list area 
    let temp3 = (1.8*((data["list"][15]["main"].temp)-273)+32).toFixed(2)
    let date3 = (data["list"][15].dt_txt).substring(0,10)
    let wind3 = data["list"][15]["wind"].speed
    let humidity3 = data["list"][15]["main"].humidity

    let printInfo2 = document.createElement('h5')
    printInfo2.textContent=date3
    forecastInfo2.appendChild(printInfo2)

    let tempInfo2 = document.createElement('p')
    tempInfo2.textContent="Temp: "+temp3+" °F"
    forecastInfo2.appendChild(tempInfo2)

    let windInfo2 = document.createElement('p')
    windInfo2.textContent="Wind: "+wind3+" MPH"
    forecastInfo2.appendChild(windInfo2)

    let humidityInfo2 = document.createElement('p')
    humidityInfo2.textContent="Humidity: "+humidity3+" %"
    forecastInfo2.appendChild(humidityInfo2)
}






