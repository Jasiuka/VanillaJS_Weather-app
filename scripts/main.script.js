import * as fetching from "./fetching-functions.script.js";
import * as helper from "./helper-functions.script.js";
import * as elementFunction from "./element-functions.script.js";
// Used apis:
// https://geocode.maps.co/ // 2 request per 1 sec.
// http://api.geonames.org/ // 1000 - h // 20000 - day
// https://api.open-meteo.com/ // 10000 - day

// Big elements, container variables

const mainDisplayWindow = document.querySelector(".display-info-box");
const firstForm = document.querySelector(".left-panel__search-form");
const firstWindow = document.querySelector(".first-window");
const firstWindowForm = document.querySelector(".first-window__form");
const titleElement = document.querySelector(".right-panel__title-text");
const displayInfoLeftPanelOuter = document.querySelector(
  ".display-info-box__left-panel--outer"
);
const leftPanel = document.querySelector(".display-info-box__left-panel");
const rightPanel = document.querySelector(".display-info-box__right-panel");
const listBox = document.querySelector(".right-panel__down-list");
const multipleDaysForecastBox = document.querySelector(
  ".display-info-box__left-panel--forecasts"
);
const settingsBox = document.querySelector(
  ".display-info-box__left-panel--settings"
);
const firstWindowSettingsBox = document.querySelector(
  ".first-window__settings"
);

// small element variables
const citySearchInput = document.querySelector(".search-input");
const citySearchInputLabel = document.querySelector(".search-input-label");

const firstWindowSearchInput = document.getElementById(
  "first-window__form-input"
);
const firstWindowSearchInputLabel = document.querySelector(
  ".first-window__form-input-label"
);
const leftPanelToggleButton = document.querySelector(".left-panel__toggle");
const saveButton = document.querySelector(".save-btn");
const clearButton = document.querySelector(".clear-btn");

const loadingBox = document.querySelector(".loading-box");
const messageBox = document.querySelector(".message-box");

// Defaults
let temperatureUnit = "celsius";
let hoursFormat = "h24";
let location = "";

let toggled = false;

// Display window form action
firstForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  console.log("Searching with: ", temperatureUnit);
  const searchInput = e.target.children[1];
  if (!searchInput.value) {
    helper.showMessageBox(
      messageBox,
      "Please enter a city name to find the location",
      true
    );
    return;
  }
  loadingBox.style.display = "flex";

  try {
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
      multipleDaysForecastBox,
      hoursFormat,
      temperatureUnit
    );
  } catch (error) {
    if (
      error instanceof TypeError &&
      error.message.includes("'lat' of 'jsonData[0]' as it is undefined")
    ) {
      helper.showMessageBox(messageBox, "Sorry, location was not found.", true);
    } else {
      helper.showMessageBox(
        messageBox,
        "An error occurred while processing data. Please try again later",
        true
      );
    }
    loadingBox.style.display = "none";
    helper.leftPanelToggleHandler(displayInfoLeftPanelOuter, leftPanel, true);
  }

  // helper.changeBoxStyles(mainDisplayWindow, leftPanel, rightPanel, settingsBox);
  loadingBox.style.display = "none";

  // To prevent non-stop submitting
  searchInput.value = "";
  searchInput.disabled = true;

  setTimeout(function () {
    searchInput.disabled = false;
  }, 1000);
});

// First form action (when no location selected)
firstWindowForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchInput = e.target.children[1];
  if (!searchInput.value) {
    helper.showMessageBox(
      messageBox,
      "Please enter a city name to find the location",
      true
    );
    return;
  }
  loadingBox.style.display = "flex";
  try {
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
      multipleDaysForecastBox,
      hoursFormat,
      temperatureUnit
    );
  } catch (error) {
    if (
      error instanceof TypeError &&
      error.message.includes("'lat' of 'jsonData[0]' as it is undefined")
    ) {
      helper.showMessageBox(messageBox, "Sorry, location was not found.", true);
    } else {
      helper.showMessageBox(
        messageBox,
        "An error occurred while processing data. Please try again later",
        true
      );
    }
    loadingBox.style.display = "none";
  }
  loadingBox.style.display = "none";
  helper.changeBoxStyles(firstWindow, mainDisplayWindow);
  helper.leftPanelToggleHandler(displayInfoLeftPanelOuter, leftPanel, true);
});

// Settings box when display window is visible (location selected)
settingsBox.addEventListener("click", (e) => {
  const target = e.target;

  if (titleElement.textContent !== "") {
    //
    // HOUR FORMAT INPUTS EVENT LISTENER
    //

    if (target.name === "hour-format") {
      // console.log("working");
      const timeElement = document.querySelector(".right-panel__time-text");
      const existingTime = timeElement.textContent;
      const hourlyForecastTimeElements =
        document.querySelectorAll(".list-item__time");
      if (target.value === "ampm") {
        timeElement.textContent = helper.convertToAmPm(existingTime);
        hourlyForecastTimeElements.forEach((element) => {
          const existingTime = element.textContent;
          element.textContent = helper.convertToAmPm(existingTime);
        });
        hoursFormat = target.value;
      }
      if (target.value === "h24") {
        timeElement.textContent = helper.convertTo24HourFormat(existingTime);
        hourlyForecastTimeElements.forEach((element) => {
          const existingTime = element.textContent;
          element.textContent = helper.convertTo24HourFormat(existingTime);
        });
        hoursFormat = target.value;
      }
      settingsBox.querySelectorAll("input").forEach((inputElement) => {
        if (inputElement.value === target.value) {
          inputElement.disabled = true;
        } else {
          inputElement.disabled = false;
        }
      });
    }
    //
    // TEMPERATURE UNIT INPUTS EVENT LISTENER
    //
    if (target.name === "temp") {
      const tempElementText = document.querySelector(
        ".left-panel__temperature-text"
      );
      const tempElementIcon = document.querySelector(
        ".left-panel__temperature-icon"
      );
      const hourlyForecastTempElements =
        document.querySelectorAll(".list-item__temp");
      const multipleDaysForecastElement = document.querySelectorAll(
        ".display-info-box__left-panel--forecasts-item-temperature"
      );
      const existingTemp = tempElementText.textContent;
      if (target.value === "fahrenheit") {
        tempElementText.textContent = helper.convertToFahrenheit(existingTemp);
        tempElementIcon.textContent = "°F";
        hourlyForecastTempElements.forEach((element) => {
          const hourlyTemp = element.textContent;
          element.textContent = helper.convertToFahrenheit(hourlyTemp);
        });
        multipleDaysForecastElement.forEach((element) => {
          const existingDayTemp = element.textContent;
          element.textContent = helper.convertToFahrenheit(existingDayTemp);
        });
        temperatureUnit = target.value;
      }
      if (target.value === "celsius") {
        tempElementText.textContent = helper.convertToCelsius(existingTemp);
        tempElementIcon.textContent = "°C";
        hourlyForecastTempElements.forEach((element) => {
          const hourlyTemp = element.textContent;
          element.textContent = helper.convertToCelsius(hourlyTemp);
        });
        multipleDaysForecastElement.forEach((element) => {
          const existingDayTemp = element.textContent;
          element.textContent = helper.convertToCelsius(existingDayTemp);
        });
        temperatureUnit = target.value;
      }

      settingsBox.querySelectorAll("input").forEach((inputElement) => {
        if (inputElement.value === target.value) {
          inputElement.disabled = true;
        } else {
          inputElement.disabled = false;
        }
      });
    }
    // FORMAT/UNIT CHANGE IF NO CITY SELECTED YET
  } else {
    if (target.name === "hour-format") {
      hoursFormat = target.value;
    }
    if (target.name === "temp") {
      temperatureUnit = target.value;
    }
  }

  console.log(temperatureUnit);
  console.log(hoursFormat);
});

// First window settings box action (when no location)
firstWindowSettingsBox.addEventListener("click", (e) => {
  const target = e.target;

  settingsBox.querySelectorAll("input").forEach((inputElement) => {
    inputElement.disabled = false;
  });
  firstWindowSettingsBox.querySelectorAll("input").forEach((inputElement) => {
    inputElement.disabled = false;
  });

  if (target.name === "f-hour-format") {
    hoursFormat = target.value;
    settingsBox.querySelector(`#${target.value}`).checked = true;
    settingsBox.querySelector(`#${target.value}`).disabled = true;
    firstWindowSettingsBox.querySelector(`#f${target.value}`).disabled = true;
  }
  if (target.name === "ftemp") {
    temperatureUnit = target.value;
    settingsBox.querySelector(`#${target.value}`).checked = true;
    settingsBox.querySelector(`#${target.value}`).disabled = true;
    firstWindowSettingsBox.querySelector(`#f${target.value}`).disabled = true;
  }
});

// Move labels when input fields are in focus
citySearchInput.addEventListener("focus", () => {
  citySearchInputLabel.classList.add("move-label");
});

citySearchInput.addEventListener("blur", () => {
  if (citySearchInput.value === "") {
    citySearchInputLabel.classList.remove("move-label");
  }
});

firstWindowSearchInput.addEventListener("focus", () => {
  firstWindowSearchInputLabel.classList.add("move-f-label");
});
firstWindowSearchInput.addEventListener("blur", () => {
  if (firstWindowSearchInput.value === "") {
    firstWindowSearchInputLabel.classList.remove("move-f-label");
  }
});

// Save/clear button actions
saveButton.addEventListener("click", () => {
  const locationArr = titleElement.textContent.split(",");

  location = locationArr[0];
  if (!location) {
    helper.showMessageBox(
      messageBox,
      "Save unsuccessful. Location not specified",
      true
    );
    return;
  }
  helper.saveDataObject(
    helper.createSaveObject(hoursFormat, temperatureUnit, location)
  );
  helper.showMessageBox(messageBox, "Saved successfully");
});
clearButton.addEventListener("click", () => {
  localStorage.removeItem("settings");
  helper.showMessageBox(messageBox, "Cleared successfully");
});

// Menu/Left panel toggle action
leftPanelToggleButton.addEventListener("click", () => {
  helper.leftPanelToggleHandler(displayInfoLeftPanelOuter, leftPanel, toggled);
  toggled = toggled === false ? true : false;
});

// Start of the app function
const appStart = async () => {
  const item = localStorage.getItem("settings");
  if (item) {
    loadingBox.style.display = "flex";

    const nItem = JSON.parse(item);
    temperatureUnit = nItem.temperatureUnit;
    hoursFormat = nItem.hourFormat;
    location = nItem.location;

    helper.checkHourButtonsBySettings(hoursFormat);
    helper.checkTempButtonsBySettings(temperatureUnit);

    const coords = await fetching.getCoordinatesAndLocationName(location);
    elementFunction.createDataElement(
      fetching.getWeatherData(coords),
      fetching.getTimeOfLocation(coords),
      coords,
      titleElement,
      leftPanel,
      rightPanel,
      listBox,
      multipleDaysForecastBox,
      hoursFormat,
      temperatureUnit
    );
    helper.changeBoxStyles(firstWindow, mainDisplayWindow);
    loadingBox.style.display = "none";
  } else {
    return;
  }
};

appStart();
