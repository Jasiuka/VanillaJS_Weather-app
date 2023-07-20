import * as fetching from "./fetching-functions.script.js";
import * as helper from "./helper-functions.script.js";
import * as elementFunction from "./element-functions.script.js";
// Used apis:
// https://geocode.maps.co/ // 2 request per 1 sec.
// http://api.geonames.org/ // 1000 - h // 20000 - day
// https://api.open-meteo.com/ // 10000 - day

const mainDisplayWindow = document.querySelector(".display-info-box");
const firstForm = document.querySelector(".left-panel__search-form");
const titleElement = document.querySelector(".right-panel__title-text");
const leftPanel = document.querySelector(".display-info-box__left-panel");
const rightPanel = document.querySelector(".display-info-box__right-panel");
const listBox = document.querySelector(".right-panel__down-list");
const multipleDaysForecastBox = document.querySelector(
  ".display-info-box__left-panel--forecasts"
);
const citySearchInput = document.querySelector(".search-input");
const citySearchInputLabel = document.querySelector(".search-input-label");

// Defaults
let temperatureUnit = "celsius";
let hoursFormat = "h24";

firstForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchInput = e.target.children[1];

  console.log(searchInput.value);
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
    listBox,
    multipleDaysForecastBox
  );

  helper.changeBoxStyles(mainDisplayWindow, leftPanel, rightPanel);
  // To prevent non-stop submitting
  searchInput.value = "";
  searchInput.disabled = true;
  setTimeout(function () {
    searchInput.disabled = false;
  }, 1000);
});

leftPanel.addEventListener("click", (e) => {
  const target = e.target;
  if (target.name === "hour-format") {
    const timeElement = document.querySelector(".right-panel__time-text");
    const existingTime = timeElement.textContent;
    const hourlyForecastTimeElements =
      document.querySelectorAll(".list-item__time");
    if (target.value === "am/pm") {
      timeElement.textContent = helper.convertToAmPm(existingTime);
      hourlyForecastTimeElements.forEach((element) => {
        const existingTime = element.textContent;
        element.textContent = helper.convertToAmPm(existingTime);
      });
      hoursFormat = "am/pm";
    }
    if (target.value === "h24") {
      timeElement.textContent = helper.convertTo24HourFormat(existingTime);
      hourlyForecastTimeElements.forEach((element) => {
        const existingTime = element.textContent;
        element.textContent = helper.convertTo24HourFormat(existingTime);
      });
      hoursFormat = "h24";
    }
  }
  if (target.name === "temp") {
    const tempElementText = document.querySelector(
      ".left-panel__temperature-text"
    );
    const tempElementIcon = document.querySelector(
      ".left-panel__temperature-icon"
    );
    const hourlyForecastTempElements =
      document.querySelectorAll(".list-item__temp");
    const existingTemp = tempElementText.textContent;
    if (target.value === "fahrenheit") {
      tempElementText.textContent = helper.convertToFahrenheit(existingTemp);
      tempElementIcon.textContent = "°F";
      hourlyForecastTempElements.forEach((element) => {
        const hourlyTemp = element.textContent;
        element.textContent = helper.convertToFahrenheit(hourlyTemp);
      });
      temperatureUnit = "fahrenheit";
    }
    if (target.value === "celsius") {
      const tempElementText = document.querySelector(
        ".left-panel__temperature-text"
      );
      const tempElementIcon = document.querySelector(
        ".left-panel__temperature-icon"
      );
      const hourlyForecastTempElements =
        document.querySelectorAll(".list-item__temp");
      const existingTemp = tempElementText.textContent;
      tempElementText.textContent = helper.convertToCelsius(existingTemp);
      tempElementIcon.textContent = "°C";
      hourlyForecastTempElements.forEach((element) => {
        const hourlyTemp = element.textContent;
        element.textContent = helper.convertToCelsius(hourlyTemp);
      });
      temperatureUnit = "celsius";
    }
  }
});

citySearchInput.addEventListener("focus", () => {
  citySearchInputLabel.classList.add("move-label");
});

citySearchInput.addEventListener("blur", () => {
  if (citySearchInput.value === "") {
    citySearchInputLabel.classList.remove("move-label");
  }
});
