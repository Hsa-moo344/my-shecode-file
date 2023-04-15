function action(event) {
  event.preventDefault();
  let actionCity = document.querySelector(".form-control");
  let heading1 = document.querySelector("h1");
  heading1.innerHTML = actionCity.value;

  let now = new Date();
  let time = document.querySelector("#unit-time");
  let Day = now.getDay();
  let Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thu",
    "Friday",
    "Saturday",
  ];
  let day = [Days[Day]];
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0:${hour}`;
  }
  let minute = now.getMinutes();
  if (minute < 10) {
    minute = `0:${minute}`;
  }
  time.innerHTML = `${day} ${hour}:${minute}`;
}

let cityInput = document.querySelector("#search-form");
cityInput.addEventListener("submit", action);

function curFahrenheit(event) {
  event.preventDefault();
  let temp = document.querySelector("#temperature");
  temp.innerHTML = "66";
}
function curCelsius(event) {
  event.preventDefault();
  let temp = document.querySelector("#temperature");
  temp.innerHTML = "19";
}

let fahrenheit = document.querySelector("#fahrenheit-time");
fahrenheit.addEventListener("click", curFahrenheit);

let celsius = document.querySelector("#celsius-time");
celsius.addEventListener("click", curCelsius);
