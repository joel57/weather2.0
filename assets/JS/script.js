var button = document.querySelector('.button')
var cityInput = document.querySelector('.cityInput')



button.addEventListener('click',function(){
    fetch("api.openweathermap.org/data/2.5/forecast?q'+cityInput+'&appid=2eca45ffa243e0add68c63c8e50768b3")
    .then(response => response.json())
    .then(data => console.log(data))
    
    .catch(err => alert("Please add city name"))

})
