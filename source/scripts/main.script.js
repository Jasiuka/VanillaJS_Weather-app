// Used apis:
// https://geocode.maps.co/ // 2 request per 1 sec.
// http://api.geonames.org/ // 1000 - h // 20000 - day
// https://api.open-meteo.com/ // 10000 - day

// const searchValue = prompt("Your search value");
// const fixedSearchValue = searchValue.replace(" ", "+");
// console.log(fixedSearchValue);
const countriesSelectBox = document.querySelector(".countries");
const searchInput = document.querySelector(".searchInput");
const form = document.querySelector(".searchForm");
const container = document.querySelector(".data");
const todayDate = new Date();

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(e.target.children);
  console.log(e.target.children[0].value);
  const searchValue = e.target.children[0].value;
  const submitButton = e.target.children[1];
  submitButton.disabled = true;
  const coords = await getCoordinates(searchValue);
  getTimeOfLocation(coords);
  createIsDayElement(
    getWeatherData(coords),
    getTimeOfLocation(coords),
    container
  );
  setTimeout(function () {
    submitButton.disabled = false;
  }, 1000);
});

const getCoordinates = async (cityName) => {
  const responseFromAPI = await fetch(
    `https://geocode.maps.co/search?q={${cityName}}`
  );
  const jsonData = await responseFromAPI.json();
  // console.log(jsonData[0]);
  if (!jsonData) {
    return "City was not found";
  }
  const { lat, lon } = jsonData[0];
  const cityCoords = {
    lat: lat,
    lon: lon,
  };
  console.log(jsonData);
  return cityCoords;
};

// const coords = await getCoordinates("Tokyo");

const getTimeOfLocation = async ({ lat, lon }) => {
  const lattitude = +lat;
  const longtitude = +lon;
  const latitudeValue = lattitude.toFixed(2);
  const longitudeValue = longtitude.toFixed(2);

  const responseFromAPI = await fetch(
    `http://api.geonames.org/timezoneJSON?lat=${latitudeValue}&lng=${longitudeValue}&username=jasiuka`
  );
  const jsonData = await responseFromAPI.json();
  const timeArray = jsonData.time.split(" ");
  const sunsetArray = jsonData.sunset.split(" ");
  const sunriseArray = jsonData.sunrise.split(" ");

  const locationSunset = sunsetArray[1];
  const locationSunrise = sunriseArray[1];
  const locationTime = timeArray[1];

  return {
    time: locationTime,
    sunset: locationSunset,
    sunrise: locationSunrise,
  };
};
const getWeatherData = async ({ lat, lon }) => {
  const lattitude = +lat;
  const longtitude = +lon;
  const latitudeValue = lattitude.toFixed(2);
  const longitudeValue = longtitude.toFixed(2);
  const responseFromAPI = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitudeValue}&longitude=${longitudeValue}&hourly=temperature_2m,weathercode,is_day&daily=sunrise,sunset&timezone=auto`
  );
  const jsonData = await responseFromAPI.json();
  return jsonData;
};

const createIsDayElement = async (jsonData, locationTimeObject, container) => {
  const locationTimeData = await locationTimeObject;
  const weatherData = await jsonData;
  const hours = locationTimeData.time.substring(0, 2);

  const {
    hourly: { is_day },
  } = weatherData;
  const isDayNow = is_day[hours];
  const newElement = document.createElement("p");
  newElement.textContent = isDayNow === 1 ? "It is day now" : "It is night now";
  container.appendChild(newElement);
};

// getTimeOfLocation(coords);
// createIsDayElement(
//   getWeatherData(coords),
//   getTimeOfLocation(coords),
//   container
// );
