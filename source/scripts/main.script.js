import * as fetching from "./fetching-functions.script.js";
import * as helper from "./helper-functions.script.js";
import * as elementFunction from "./element-functions.script.js";
// Used apis:
// https://geocode.maps.co/ // 2 request per 1 sec.
// http://api.geonames.org/ // 1000 - h // 20000 - day
// https://api.open-meteo.com/ // 10000 - day

// const countriesSelectBox = document.querySelector(".countries");
// const searchInput = document.querySelector(".searchInput");
const firstForm = document.querySelector(".firstForm");
const container = document.querySelector(".data");
const mainAppWindow = document.querySelector(".main-window");

firstForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchValue = e.target.children[1].value;
  const submitButton = e.target.children[2];
  const coords = await fetching.getCoordinatesAndLocationName(searchValue);
  elementFunction.createDataElement(
    fetching.getWeatherData(coords),
    fetching.getTimeOfLocation(coords),
    coords,
    mainAppWindow
  );

  // To prevent non-stop submitting
  submitButton.disabled = true;
  setTimeout(function () {
    submitButton.disabled = false;
  }, 1000);
});
