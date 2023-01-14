let now = new Date();
console.log(now);

let today = now.getDate();
console.log(today);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
console.log(day);

let year = now.getFullYear();
console.log(year);

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];
console.log(month);

let hours = now.getHours();
console.log(hours);
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = "0" + minutes;
} else {
  minutes = minutes + "";
}

console.log(minutes);

let h5 = document.querySelector("#date");
h5.innerHTML = `${day} ${month} ${today} ${year} ${hours}:${minutes}`;

// Homework Week 5
function showTemperature(response) {
  document.querySelector("#current-location").innerHTML = response.data.name;
  document.querySelector("#temperature-number").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
}

function searchCity(city) {
  let apiKey = "717511f5e1c0dbfc617f361ab073e2e9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showTemperature);
}

function submission(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

let searchForm = document.querySelector("#enter-location");
searchForm.addEventListener("submit", submission);

function showCurrentPosition(position) {
  let apiKey = "717511f5e1c0dbfc617f361ab073e2e9";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showCurrentPosition);
}
let currentPositionForm = document.querySelector("#location-button");
currentPositionForm.addEventListener("click", getCurrentPosition);

searchCity("Eureka");
