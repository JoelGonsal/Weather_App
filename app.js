const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=";
const API_KEY = "a17cf3e0c69136504fb0e9d8530a61c7";


const img = document.querySelector("#imgnew");

const weather = document.querySelector("#weather");

const btn = document.querySelector ("#enterbtn");

const temperature = document.querySelector("#temperature");

const names = document.querySelector("#countryname");

const humidity = document.querySelector("#humid1");

const wind = document.querySelector("#wind1");

const loc = document.querySelector("#locationenter");


const getData = async () =>
{
      let data = loc.value;


      if (data === "") {
        alert("Please enter a city name!"); 
      }
    let final_url = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${API_KEY}&units=metric`;
let response = await fetch (final_url);
console.log(response);
let ans = await response.json();
console.log(ans.name);
names.innerText = await ans.name;
temperature.innerText = await ans.main.temp+"°C";
humidity.innerText = await ans.main.humidity+ "%";
wind.innerText = await ans.wind.speed+" km/h";
console.log(ans.weather[0].main);
if(ans.weather[0].main === "Clouds")
{
img.src ="images/clouds.png";
}
else if (ans.weather[0].main==="Clear")
{
img.src ="images/clear.png";
}
else if (ans.weather[0].main==="Rain"){
img.src ="images/rain.png";
}
else if (ans.weather[0].main==="Drizzle"){
img.src ="images/drizzle.png";
}
else if (ans.weather[0].main==="Mist"){
img.src = "images/mist.png";
}



weather.style.display = "block";

};



btn.addEventListener("click",() =>
{
    getData();
  

});