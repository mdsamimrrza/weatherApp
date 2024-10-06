document.addEventListener('DOMContentLoaded',()=>{
   const  cityinput= document.getElementById("city-input");
   const getweatherbtn = document.getElementById("get-weather-btn");
   const weatherinfo = document.getElementById("weather-info");
   const  cityname= document.getElementById("city-name");
   const temperature = document.getElementById("temperature");
   const description = document.getElementById("description");
   const errormessage = document.getElementById("error-message");
   const  windspeed = document.getElementById("wind-speed");

   const API_KEY = "c06fcd3e52ea2784aa5bc2a326ff2d24";

    getweatherbtn.addEventListener('click', async()=>{
        const city = cityinput.value.trim();
        if(!city){
            alert("Enter City Name ");
            return;
        }
        
        try {
            const weatherdata =await fetchWeatherData(city);
            displayWeatherData(weatherdata);
        } catch (error) {
            showError()
        }

    })

    async function  fetchWeatherData(city){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const response = await fetch(url)
        if(!response.ok){
            throw new Error("city not found");
        }
        const data = await response.json()
        return data
    }

    function displayWeatherData(data){
        console.log(data);
        const{name,main, weather ,wind} = data
        cityname.textContent = name;
        temperature.textContent = `Temperature : ${main.temp}`;
        description.textContent = `description : ${weather[0].description}`
        windspeed.innerHTML = `windspeed : ${wind.speed}`

        weatherinfo.classList.remove('hidden');
        errormessage.classList.add('hidden')

        
    }
    function showError(){
        weatherinfo.classList.remove('hidden');
        errormessage.classList.add('hidden');
    }
});