const apiKey = "da8dfef69b8010c316aedaed4a3019c4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");

async function cheakWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   
   if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
   }
