window.addEventListener('load', fourCity);
window.addEventListener('load', one);
window.addEventListener('load', two);
window.addEventListener('load', three);

function fourCity() {
  let four = document.querySelector(".four");
  let apiKey = "466bb530a7d426fb42b230fdda00d5dc";
  let output = '';

  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&APPID='+apiKey);
  xhr.onload = function() {
    if(this.status == 200) {
      let data = JSON.parse(this.responseText);
      let icon = data.weather[0].icon;
      let icon_src = 'https://openweathermap.org/img/w/'+icon+'.png';
      output += "<div class='city_title'><p>"+data.name+"</p></div>";
      output += "<div class='city_temperature'><span class='city_picture'><img src='"+icon_src+"'></span><p>"+Math.round(data.main.temp)+"  &deg;C</p></div>";
      four.innerHTML = output;
    }
  }
  xhr.send();
}

function three() {
  let three = document.querySelector(".three");
  let apiKey = "466bb530a7d426fb42b230fdda00d5dc";
  let output = '';

  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=sydney&units=metric&APPID='+apiKey);
  xhr.onload = function() {
    if(this.status == 200) {
      let data = JSON.parse(this.responseText);
      let icon = data.weather[0].icon;
      let icon_src = 'https://openweathermap.org/img/w/'+icon+'.png';
      output += "<div class='city_title'><p>"+data.name+"</p></div>";
      output += "<div class='city_temperature'><span class='city_picture'><img src='"+icon_src+"'></span><p>"+Math.round(data.main.temp)+"  &deg;C</p></div>";
      three.innerHTML = output;
    }
  }
  xhr.send();
}

function two() {
  let two = document.querySelector(".two");
  let apiKey = "466bb530a7d426fb42b230fdda00d5dc";
  let output = '';

  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=cairo&units=metric&APPID='+apiKey);
  xhr.onload = function() {
    if(this.status == 200) {
      let data = JSON.parse(this.responseText);
      let icon = data.weather[0].icon;
      let icon_src = 'https://openweathermap.org/img/w/'+icon+'.png';
      output += "<div class='city_title'><p>"+data.name+"</p></div>";
      output += "<div class='city_temperature'><span class='city_picture'><img src='"+icon_src+"'></span><p>"+Math.round(data.main.temp)+"  &deg;C</p></div>";
      two.innerHTML = output;
    }
  }
  xhr.send();
}

function one() {
  let one = document.querySelector(".one");
  let apiKey = "466bb530a7d426fb42b230fdda00d5dc";
  let output = '';

  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID='+apiKey);
  xhr.onload = function() {
    if(this.status == 200) {
      let data = JSON.parse(this.responseText);
      let icon = data.weather[0].icon;
      let icon_src = 'https://openweathermap.org/img/w/'+icon+'.png';
      output += "<div class='city_title'><p>"+data.name+"</p></div>";
      output += "<div class='city_temperature'><span class='city_picture'><img src='"+icon_src+"'></span><p>"+Math.round(data.main.temp)+"  &deg;C</p></div>";
      one.innerHTML = output;
    }
  }
  xhr.send();
}

let search_button = document.querySelector(".search_button");
let message = document.querySelector(".message");


search_button.addEventListener('click', getWeather);

function getWeather() {
  let apiKey = "466bb530a7d426fb42b230fdda00d5dc";
  let city = document.querySelector(".city");
  let output = '';
  let date = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let today = days[date.getDay()];
  cityValue = city.value;

  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' +cityValue+ '&units=metric'+ '&APPID='+apiKey);
  xhr.onload = function() {
    if(this.status == 200) {
      let data = JSON.parse(this.responseText);

      //message.innerHTML = display(data);
      let icon = data.weather[0].icon;
      let icon_src = 'https://openweathermap.org/img/w/'+icon+'.png';
      output += "<div class='card'>";
      output += "<div class='title'><p>"+data.name+ ", "+data.sys.country+ "</p></div>";
      output += "<div class='left_side'>";
      output += "<div class='picture'><img src='"+icon_src+"'></div>";
      output += "<div class='today'><p>"+today+"</p></div>";
      output += "<div class='min_max_tep'><p>&darr; "+data.main.temp_min+" &deg;C</p><p>&uarr; "+data.main.temp_max+" &deg;C</p></div>";
      output += "</div>";
      output += "<div class='right_side'>";
      output += "<div class='temperature'><p>"+Math.round(data.main.temp)+" &deg;C</p></div>";
      output += "<div class='description'><p>"+data.weather[0].main+"</p></div>";
      output += "<div class='humi'><p class='hum_img'><img src='weatherImages/drop.png'>"+data.main.humidity+"%</p></div>";
      output += "<div class='wind'><p>Wind: <span class='wind_result'>"+data.wind.speed+"mph</span></p></div>";
      output += "<div class='pressure'><p>Pressure: <span class='pressure_result'>"+data.main.pressure+"mb</span></p></div>";
      output += "</div>";
      output += "</div>";

      message.style.display = "block";
      message.innerHTML = output;
    }
  }
  xhr.send();
}
