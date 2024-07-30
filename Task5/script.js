const apiKey = "a04d780c7985782598e138eb9ac5f1b3";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const cities = {
  kolkata: "Kolkata",
  bengaluru: "Bengaluru",
  chennai: "Chennai",
  mumbai: "Mumbai",
  pune: "Pune",
  patna: "Patna",
  jaipur: "Jaipur",
  delhi: "Delhi"
};

async function checkWeather(city) {
  if (!cities[city.toLowerCase()]) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    return;
  }
  const apiKey="a04d780c7985782598e138eb9ac5f1b3";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cities[city.toLowerCase()]}&appid=${apiKey}`;
  
  const response = await fetch(apiUrl);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "images/clouds.png";
        break;
      case "Clear":
        weatherIcon.src = "images/clear.png";
        break;
      case "Rain":
        weatherIcon.src = "images/rain.png";
        break;
      case "Drizzle":
        weatherIcon.src = "images/drizzle.png";
        break;
      case "Mist":
        weatherIcon.src = "images/mist.png";
        break;
    }
    
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
