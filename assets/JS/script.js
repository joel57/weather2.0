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

for (let index = 0; index < history.length; index++) {
    const element = history[index];
    let city = document.createElement('div')
    city.onclick=function(){
        historyB(element)
    }
    city.classList.add('buttonHistory')
city.textContent=element
cityList.appendChild(city)
}



    }
});

//Yess 8/26/22
async function search (){
    //this errases the search field (weatherInformation.innerHTML="")
    weatherInformation.innerHTML=""
    forecastInfo1.innerHTML=""
    forecastInfo2.innerHTML=""
    forecastInfo3.innerHTML=""
    forecastInfo4.innerHTML=""
    forecastInfo5.innerHTML=""
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

    //Curent City temp and info
    let city = data["city"].name
    let temp = (1.8*((data["list"][0]["main"].temp)-273)+32).toFixed(2)
    let date = (data["list"][0].dt_txt).substring(0,10)
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

    
    //Day-1 info
    let temp1 = (1.8*((data["list"][6]["main"].temp)-273)+32).toFixed(2)
    let date1 = (data["list"][6].dt_txt).substring(0,10)
    let wind1 = data["list"][6]["wind"].speed
    let humidity1 = data["list"][6]["main"].humidity
    

    let printInfo1 = document.createElement('h5')
    printInfo1.textContent=date1
    forecastInfo1.appendChild(printInfo1)

    //this is the call for the icon from the data list for this card
    
    let icon1 = data["list"][0]["weather"][0].icon
    console.log(icon1)

    let image1 = document.createElement('img')
    image.src="https://openweathermap.org/img/w/"+icon1+".png"
    forecastInfo1.appendChild(image1)

    //-----

    let tempInfo1 = document.createElement('p')
    tempInfo1.textContent="Temp: "+temp1+" °F"
    forecastInfo1.appendChild(tempInfo1)

    let windInfo1 = document.createElement('p')
    windInfo1.textContent="Wind: "+wind1+" MPH"
    forecastInfo1.appendChild(windInfo1)

    let humidityInfo1 = document.createElement('p')
    humidityInfo1.textContent="Humidity: "+humidity1+" %"
    forecastInfo1.appendChild(humidityInfo1)


    //Day-2 info
    //Created Varibles to pull data from the API library: info is from the object list area 
    let temp2 = (1.8*((data["list"][15]["main"].temp)-273)+32).toFixed(2)
    let date2 = (data["list"][15].dt_txt).substring(0,10)
    let wind2 = data["list"][15]["wind"].speed
    let humidity2 = data["list"][15]["main"].humidity

    let printInfo2 = document.createElement('h5')
    printInfo2.textContent=date2
    forecastInfo2.appendChild(printInfo2)

//this is the call for the icon from the data list for this card
    
    let icon2 = data["list"][0]["weather"][0].icon
    console.log(icon2)

    let image = document.createElement('img')
    image.src="https://openweathermap.org/img/w/"+icon2+".png"
    forecastInfo2.appendChild(image)

    //--------------

    let tempInfo2 = document.createElement('p')
    tempInfo2.textContent="Temp: "+temp2+" °F"
    forecastInfo2.appendChild(tempInfo2)

    let windInfo2 = document.createElement('p')
    windInfo2.textContent="Wind: "+wind2+" MPH"
    forecastInfo2.appendChild(windInfo2)

    let humidityInfo2 = document.createElement('p')
    humidityInfo2.textContent="Humidity: "+humidity2+" %"
    forecastInfo2.appendChild(humidityInfo2)



    //Day-3 info

    let temp3 = (1.8*((data["list"][21]["main"].temp)-273)+32).toFixed(2)
    let date3 = (data["list"][21].dt_txt).substring(0,10)
    let wind3 = data["list"][21]["wind"].speed
    let humidity3 = data["list"][21]["main"].humidity

    let printInfo3 = document.createElement('h5')
    printInfo3.textContent=date3
    forecastInfo3.appendChild(printInfo3)

    let tempInfo3 = document.createElement('p')
    tempInfo3.textContent="Temp: "+temp3+" °F"
    forecastInfo3.appendChild(printInfo3)

    let windInfo3 = document.createElement('p')
    windInfo3.textContent="Wind: "+wind3+" MPH"
    forecastInfo3.appendChild(windInfo3)

    let humidityInfo3 = document.createElement('p')
    humidityInfo3.textContent="Humidity: "+humidity3+" %"
    forecastInfo3.appendChild(humidityInfo3)


    //Day-4 Info

    let temp4 = (1.8*((data["list"][21]["main"].temp)-273)+32).toFixed(2)
    let date4 = (data["list"][21].dt_txt).substring(0,10)
    let wind4 = data["list"][21]["wind"].speed
    let humidity4 = data["list"][21]["main"].humidity

    let printInfo4 = document.createElement('h5')
    printInfo4.textContent=date4
    forecastInfo4.appendChild(printInfo4)

    let tempInfo4 = document.createElement('p')
    tempInfo4.textContent="Temp: "+temp4+" °F"
    forecastInfo4.appendChild(printInfo4)

    let windInfo4 = document.createElement('p')
    windInfo4.textContent="Wind: "+wind4+" MPH"
    forecastInfo4.appendChild(windInfo4)

    let humidityInfo4 = document.createElement('p')
    humidityInfo4.textContent="Humidity: "+humidity4+" %"
    forecastInfo4.appendChild(humidityInfo4)

}






//--------------------------------------------------





async function historyB(nameButton){
    weatherInformation.innerHTML=""
    forecastInfo1.innerHTML=""
    forecastInfo2.innerHTML=""
    forecastInfo3.innerHTML=""
    forecastInfo4.innerHTML=""
    forecastInfo5.innerHTML=""
    //
    var cityName =$("#cityInput").val()
    let response =await fetch("https://api.openweathermap.org/data/2.5/forecast?q="+nameButton+"&appid=2eca45ffa243e0add68c63c8e50768b3")
    let data=await response.json() 
    
    //

    //Rick 8/29/22 
    console.log(data) 
    fiveDays.style.visibility = "visible";


    //Curent City temp and info
    let city = data["city"].name
    let temp = (1.8*((data["list"][0]["main"].temp)-273)+32).toFixed(2)
    let date = (data["list"][0].dt_txt).substring(0,10)
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

    
    //Day-1 info
    let temp1 = (1.8*((data["list"][6]["main"].temp)-273)+32).toFixed(2)
    let date1 = (data["list"][6].dt_txt).substring(0,10)
    let wind1 = data["list"][6]["wind"].speed
    let humidity1 = data["list"][6]["main"].humidity
    

    //para cada una de las tarjetas obtener y mostrar la informacion de los dias, temp, wind, humidity EXTRA: revisar como poner el icono
    let printInfo1 = document.createElement('h5')
    printInfo1.textContent=date1
    forecastInfo1.appendChild(printInfo1)

    let tempInfo1 = document.createElement('p')
    tempInfo1.textContent="Temp: "+temp1+" °F"
    forecastInfo1.appendChild(tempInfo1)

    let windInfo1 = document.createElement('p')
    windInfo1.textContent="Wind: "+wind1+" MPH"
    forecastInfo1.appendChild(windInfo1)

    let humidityInfo1 = document.createElement('p')
    humidityInfo1.textContent="Humidity: "+humidity1+" %"
    forecastInfo1.appendChild(humidityInfo1)


    //Day-2 info
    //Created Varibles to pull data from the API library: info is from the object list area 
    let temp2 = (1.8*((data["list"][15]["main"].temp)-273)+32).toFixed(2)
    let date2 = (data["list"][15].dt_txt).substring(0,10)
    let wind2 = data["list"][15]["wind"].speed
    let humidity2 = data["list"][15]["main"].humidity

    let printInfo2 = document.createElement('h5')
    printInfo2.textContent=date2
    forecastInfo2.appendChild(printInfo2)

//this is the call for the icon from the data list for this card
    
    let icon2 = data["list"][0]["weather"][0].icon
    console.log(icon2)

    let image = document.createElement('img')
    image.src="https://openweathermap.org/img/w/"+icon2+".png"
    forecastInfo2.appendChild(image)

    // let testIcon = 

    let tempInfo2 = document.createElement('p')
    tempInfo2.textContent="Temp: "+temp2+" °F"
    forecastInfo2.appendChild(tempInfo2)

    let windInfo2 = document.createElement('p')
    windInfo2.textContent="Wind: "+wind2+" MPH"
    forecastInfo2.appendChild(windInfo2)

    let humidityInfo2 = document.createElement('p')
    humidityInfo2.textContent="Humidity: "+humidity2+" %"
    forecastInfo2.appendChild(humidityInfo2)



    //Day-3 info

    let temp3 = (1.8*((data["list"][21]["main"].temp)-273)+32).toFixed(2)
    let date3 = (data["list"][21].dt_txt).substring(0,10)
    let wind3 = data["list"][21]["wind"].speed
    let humidity3 = data["list"][21]["main"].humidity

    let printInfo3 = document.createElement('h5')
    printInfo3.textContent=date3
    forecastInfo3.appendChild(printInfo3)

    let tempInfo3 = document.createElement('p')
    tempInfo3.textContent="Temp: "+temp3+" °F"
    forecastInfo3.appendChild(printInfo3)

    let windInfo3 = document.createElement('p')
    windInfo3.textContent="Wind: "+wind3+" MPH"
    forecastInfo3.appendChild(windInfo3)

    let humidityInfo3 = document.createElement('p')
    humidityInfo3.textContent="Humidity: "+humidity3+" %"
    forecastInfo3.appendChild(humidityInfo3)
}







