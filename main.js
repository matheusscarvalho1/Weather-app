const apiKey ="9479773d12ab884c381bf821daeb6047";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.buscar input');
const searchBtn = document.querySelector('.buscar button');
const weatherIcon = document.querySelector('.icone-tempo');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".erro").style.display = "block";
        document.querySelector(".tempo").style.display = "none";
    } else {
        var data = await response.json();
    console.log (data);

    document.querySelector(".cidade") .innerHTML =  data.name;
    document.querySelector(".temp") .innerHTML = Math.round(data.main.temp) + " °c";
    document.querySelector(".umidade") .innerHTML = data.main.humidity + " %";
    document.querySelector(".vento") .innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";

    }
    
    document.querySelector(".tempo").style.display = "block";
    document.querySelector(".erro").style.display = "none";
   }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value); 
})

checkWeather();