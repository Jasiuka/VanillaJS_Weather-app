// const searchValue = prompt("Your search value");
// const fixedSearchValue = searchValue.replace(" ", "+");
// console.log(fixedSearchValue);
const countriesSelectBox = document.querySelector(".countries");
const searchInput = document.querySelector(".searchInput");
const form = document.querySelector(".searchForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
});

const getCoordinates = async (cityName) => {
  const responseFromAPI = await fetch(
    `https://geocode.maps.co/search?q={${cityName}}`
  );
  const jsonData = await responseFromAPI.json();
  console.log(jsonData[0]);
  const { lat, lon } = jsonData[0];
  const cityCoords = {
    lat: lat,
    lon: lon,
  };
  return cityCoords;
};

const coords = await getCoordinates("Rokiškis");
console.log(coords);

const getWeatherData = async ({ lat, lon }) => {
  const lattitude = +lat;
  const longtitude = +lon;

  const lattitudeValue = lattitude.toFixed(2);
  const longtitudeValue = longtitude.toFixed(2);

  const responseFromAPI = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lattitudeValue}&longitude=${longtitudeValue}&hourly=temperature_2m`
  );
  const jsonData = await responseFromAPI.json();
  console.log(jsonData);
};

getWeatherData(coords);
