const apiKey = "e73189dc1226e94e32c2529d31469625";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?=units=metric&q=";

const searchBox = document.querySelector(".search input");
const buttonElemnt = document.querySelector(".search button");
const weatheIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    // if(data.name == "undefined"){
    //     document.querySelector(".city").innerHTML = "City name is inValiud";
    // }
    document.querySelector(".temp-level").innerHTML =Math.round(data.clouds.all) + "°c";
    document.querySelector(".humanity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";

    
    if(data.weather[0].main == "Clouds"){
        weatheIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatheIcon.src= "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatheIcon.src= "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatheIcon.src= "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatheIcon.src= "images/mist.png";
    }

   
}
buttonElemnt.addEventListener("click" ,()=>{
    checkWeather(searchBox.value);
})



