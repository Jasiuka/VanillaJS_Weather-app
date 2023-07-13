import * as fetching from "./fetching-functions.script.js";
import * as helper from "./helper-functions.script.js";
import * as elementFunction from "./element-functions.script.js";
// Used apis:
// https://geocode.maps.co/ // 2 request per 1 sec.
// http://api.geonames.org/ // 1000 - h // 20000 - day
// https://api.open-meteo.com/ // 10000 - day

const firstForm = document.querySelector(".left-panel__search-form");
const titleElement = document.querySelector(".right-panel__title");
const leftPanel = document.querySelector(".display-info-box__left-panel");
const rightPanel = document.querySelector(".display-info-box__right-panel");
const listBox = document.querySelector(".right-panel__down-list");
const mainAppWindow = document.querySelector(".main-window");

firstForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchInput = e.target.children[0];

  const coords = await fetching.getCoordinatesAndLocationName(
    searchInput.value
  );
  elementFunction.createDataElement(
    fetching.getWeatherData(coords),
    fetching.getTimeOfLocation(coords),
    coords,
    titleElement,
    leftPanel,
    rightPanel,
    listBox
  );

  // To prevent non-stop submitting
  searchInput.value = "";
  searchInput.disabled = true;
  setTimeout(function () {
    searchInput.disabled = false;
  }, 1000);
});
