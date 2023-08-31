import {
  makeWeatherDescriptionAndBackground,
  getHoursFromTimeArray,
  makeWeatherIcon,
  scrollToTheCurrentHourAndHighlight,
  make14DaysForecastObject,
  convertToFahrenheit,
  convertToAmPm,
} from "./helper-functions.script.js";

export const createDataElement = async (
  weatherDataObject,
  locationTimeObject,
  { location },
  locationTitleElement,
  leftPanel,
  rightPanel,
  listBoxElement,
  multipleForecastsBox,
  hoursFormat,
  temperatureUnits
) => {
  const weatherData = await weatherDataObject;
  const timeData = await locationTimeObject;

  createMultipleDaysForecastElements(
    make14DaysForecastObject(weatherData),
    multipleForecastsBox,
    temperatureUnits
  );

  const {
    hourly: {
      temperature_2m: currentTemperature,
      time: timeArray,
      weathercode: weatherCode,
    },
  } = weatherData;
  const { time: currentTime, date, sunset, sunrise } = timeData;
  let currentHour = currentTime.substring(0, 2);
  currentHour = currentHour.startsWith("0")
    ? currentHour.substring(1, 2)
    : currentHour;

  const weatherObj = makeWeatherDescriptionAndBackground(
    weatherCode[currentHour]
  );
  const todayWeatherData = {
    temperatureArray: currentTemperature.slice(0, 24),
    weatherCodeArray: weatherCode.slice(0, 24),
    dayTimeArray: timeArray.slice(0, 24),
  };

  // Change location text
  const mediaQuery = window.matchMedia("only screen and (max-width: 45rem)");
  if (mediaQuery.matches) {
    if (location.length > 27) {
      locationTitleElement.style.fontSize = "3rem";
      locationTitleElement.style.wordBreak = "break-all";
    } else {
      locationTitleElement.style.fontSize = "5rem";
      locationTitleElement.style.wordBreak = "break-word";
    }
  } else {
    if (location.length > 27) {
      locationTitleElement.style.fontSize = "4rem";
      locationTitleElement.style.wordBreak = "break-all";
    } else {
      locationTitleElement.style.fontSize = "6rem";
    }
  }
  locationTitleElement.textContent = location;

  // Check if temp element exist, if exist change it's text, if not, create new element.
  const existingTempElement = document.querySelector(
    ".left-panel__temperature-text"
  );
  if (existingTempElement) {
    existingTempElement.textContent = changeTemperatureText(
      temperatureUnits,
      currentTemperature[currentHour]
    );
  } else {
    leftPanel.appendChild(
      createTemperatureElement(
        currentTemperature[currentHour],
        temperatureUnits
      )
    );
  }

  // Check if date and time element exist, if exist change it's text, if not, create new element.

  const existingTimeAndDateElement = document.querySelector(
    ".right-panel__time-date-box"
  );
  if (existingTimeAndDateElement) {
    document.querySelector(".right-panel__time-text").textContent =
      hoursFormat === "h24" ? currentTime : convertToAmPm(currentTime);
    document.querySelector(".right-panel__date-text").textContent = date;
  } else {
    rightPanel.appendChild(
      createTimeAndDateElement(currentTime, date, hoursFormat)
    );
  }

  // Check if description element exist, if exist change it's text, if not, create new element.

  const exisitingDescriptionElement = document.querySelector(
    ".right-panel__weather-description"
  );
  if (exisitingDescriptionElement) {
    exisitingDescriptionElement.textContent = weatherObj.description;
  } else {
    rightPanel.appendChild(createDescriptionElement(weatherObj.description));
  }

  // Change background image
  changeBackgroundImage(weatherObj.background);
  // Create hourly forecast list items and add them to the list
  listBoxElement.style.overflowX = "scroll";
  createHourlyForecastListElements(
    todayWeatherData,
    listBoxElement,
    temperatureUnits,
    hoursFormat
  );

  // Scroll to the current hour forecast element and highlight it
  scrollToTheCurrentHourAndHighlight(
    timeArray[currentHour].split("T")[1],
    listBoxElement,
    hoursFormat
  );
};

export const createTemperatureElement = (
  currentTemperature,
  temperatureUnits = "celsius"
) => {
  const temperatureUnit = temperatureUnits === "celsius" ? "°C" : "°F";
  const temperatureElement = document.createElement("p");
  const temperatureElementIcon = document.createElement("span");
  temperatureElementIcon.classList.add("left-panel__temperature-icon");
  temperatureElementIcon.textContent = temperatureUnit;
  const temperatureElementText = document.createElement("span");
  temperatureElementText.classList.add("left-panel__temperature-text");

  if (temperatureUnits === "celsius") {
    temperatureElementText.textContent = currentTemperature;
  } else {
    temperatureElementText.textContent =
      convertToFahrenheit(currentTemperature);
  }
  temperatureElement.classList.add("left-panel__temperature");
  temperatureElement.appendChild(temperatureElementText);
  temperatureElement.appendChild(temperatureElementIcon);
  return temperatureElement;
};

export const changeTemperatureText = (
  tempUnits = "celsius",
  currentTemperature
) => {
  let currTemp;
  if (tempUnits === "celsius") {
    currTemp = currentTemperature;
  } else {
    currTemp = convertToFahrenheit(currentTemperature);
  }
  return currTemp;
};

export const createTimeAndDateElement = (
  currentTime,
  currentDate,
  hoursFormat
) => {
  const divForTimeAndDate = document.createElement("div");
  divForTimeAndDate.classList.add("right-panel__time-date-box");
  // Time
  const timeElement = document.createElement("p");
  const timeElementIcon = document.createElement("span");
  timeElementIcon.classList.add("right-panel__time-icon");
  const timeElementText = document.createElement("span");
  timeElementText.classList.add("right-panel__time-text");
  timeElementText.textContent =
    hoursFormat === "h24" ? currentTime : convertToAmPm(currentTime);
  timeElementIcon.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><title>clock-watch</title><path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0ZM36.34,18.1a3.27,3.27,0,1,1-1.2,4.46,3.27,3.27,0,0,1,1.2-4.46ZM18,36.53A3.26,3.26,0,1,1,19.19,41,3.27,3.27,0,0,1,18,36.53ZM11.33,61.66a3.27,3.27,0,1,1,3.26,3.27,3.27,3.27,0,0,1-3.26-3.27Zm6.78,25.1A3.27,3.27,0,1,1,22.58,88a3.27,3.27,0,0,1-4.47-1.2ZM36.54,105.1A3.26,3.26,0,1,1,41,103.91a3.27,3.27,0,0,1-4.47,1.19Zm25.14,6.67a3.27,3.27,0,1,1,3.26-3.26,3.26,3.26,0,0,1-3.26,3.26ZM86.78,105A3.27,3.27,0,1,1,88,100.52,3.27,3.27,0,0,1,86.78,105Zm18.34-18.43a3.27,3.27,0,1,1-1.2-4.47,3.27,3.27,0,0,1,1.2,4.47Zm6.67-25.14a3.27,3.27,0,1,1-3.27-3.26,3.26,3.26,0,0,1,3.27,3.26ZM105,36.32a3.27,3.27,0,1,1-4.46-1.19A3.28,3.28,0,0,1,105,36.32ZM86.57,18a3.27,3.27,0,1,1-4.46,1.2A3.27,3.27,0,0,1,86.57,18ZM61.44,11.31a3.27,3.27,0,1,1-3.27,3.27,3.27,3.27,0,0,1,3.27-3.27ZM58.31,49.52h6.48a.73.73,0,0,0,.74-.73L61.77,21.51,57.58,48.79a.74.74,0,0,0,.73.73Zm14,14.29V60.18a.72.72,0,0,1,.73-.73l27.3,1.85-27.3,3.24a.71.71,0,0,1-.73-.73Zm-10.79-9.5A7.69,7.69,0,1,1,53.87,62a7.69,7.69,0,0,1,7.69-7.69ZM100.84,22a55.72,55.72,0,1,0,16.32,39.4A55.55,55.55,0,0,0,100.84,22Z"/></svg>`;
  timeElement.classList.add("right-panel__time");
  timeElement.appendChild(timeElementIcon);
  timeElement.appendChild(timeElementText);
  divForTimeAndDate.appendChild(timeElement);
  // Date
  const dateElement = document.createElement("p");
  dateElement.classList.add("right-panel__date");
  const dateElementIcon = document.createElement("span");
  dateElementIcon.classList.add("right-panel__date-icon");
  dateElementIcon.innerHTML = `<svg class="icon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.92 122.88"><title>schedule-calendar</title><path d="M108.68,122.88H11.24A11.28,11.28,0,0,1,0,111.64V22.55A11.28,11.28,0,0,1,11.24,11.31H21.61V25.14a12.35,12.35,0,0,0,4.67,9.61,14.55,14.55,0,0,0,18.31,0,12.35,12.35,0,0,0,4.67-9.61V11.31H70.2V25.14a12.35,12.35,0,0,0,4.67,9.61,14.55,14.55,0,0,0,18.31,0,12.35,12.35,0,0,0,4.67-9.61V11.31h10.83a11.3,11.3,0,0,1,11.24,11.24v89.09a11.27,11.27,0,0,1-11.24,11.24ZM83.58,56.77h16.1a2.07,2.07,0,0,1,2.06,2v13.4a2.07,2.07,0,0,1-2.06,2H83.58a2.06,2.06,0,0,1-2-2V58.82a2.05,2.05,0,0,1,2-2Zm-31.51,0H68.18a2.06,2.06,0,0,1,2,2v13.4a2.07,2.07,0,0,1-2,2H52.07a2.06,2.06,0,0,1-2-2V58.82a2.06,2.06,0,0,1,2-2Zm-31.84,0H36.34a2.06,2.06,0,0,1,2,2v13.4a2.07,2.07,0,0,1-2,2H20.23a2.06,2.06,0,0,1-2.05-2V58.82a2.05,2.05,0,0,1,2.05-2ZM83.58,85.26h16.1a2.07,2.07,0,0,1,2.06,2v13.4a2.06,2.06,0,0,1-2.06,2.05H83.58a2.06,2.06,0,0,1-2-2.05V87.31a2.06,2.06,0,0,1,2-2Zm-31.51,0H68.18a2.06,2.06,0,0,1,2,2v13.4a2.06,2.06,0,0,1-2,2.05H52.07a2.06,2.06,0,0,1-2-2.05V87.31a2.07,2.07,0,0,1,2-2Zm-31.84,0H36.34a2.06,2.06,0,0,1,2,2v13.4a2.06,2.06,0,0,1-2,2.05H20.23a2.06,2.06,0,0,1-2.05-2.05V87.31a2.06,2.06,0,0,1,2.05-2ZM78.6,4.45C78.6,2,81,0,84,0s5.43,2,5.43,4.45V25.14c0,2.46-2.42,4.45-5.43,4.45s-5.42-2-5.42-4.45V4.45ZM30,4.45C30,2,32.44,0,35.44,0s5.42,2,5.42,4.45V25.14c0,2.46-2.42,4.45-5.42,4.45S30,27.6,30,25.14V4.45ZM3.6,43.86v66.58a8.87,8.87,0,0,0,8.84,8.84h95a8.87,8.87,0,0,0,8.85-8.84V43.86Z"/></svg>`;
  const dateElementText = document.createElement("span");
  dateElementText.classList.add("right-panel__date-text");
  dateElementText.textContent = currentDate;
  dateElement.appendChild(dateElementIcon);
  dateElement.appendChild(dateElementText);
  divForTimeAndDate.appendChild(dateElement);
  return divForTimeAndDate;
};

export const createDescriptionElement = (description) => {
  const newDescriptionElement = document.createElement("p");
  newDescriptionElement.classList.add("right-panel__weather-description");
  newDescriptionElement.textContent = description;
  return newDescriptionElement;
};

export const changeBackgroundImage = (backgroundUrl) => {
  const windowBackgroundElement = document.querySelector(".background-img");
  const displayBoxBackgroundElement = document.querySelector(
    ".display-info-box__background-img"
  );
  windowBackgroundElement.setAttribute("src", backgroundUrl);
  displayBoxBackgroundElement.setAttribute("src", backgroundUrl);
};

const createHourlyForecastListElements = (
  { temperatureArray, weatherCodeArray, dayTimeArray },
  listBoxElement,
  temperatureUnits = "celsius",
  hourFormat = "h24"
) => {
  listBoxElement.innerHTML = "";
  if (!temperatureArray || !weatherCodeArray || !dayTimeArray) {
    return;
  }
  if (
    temperatureArray.length !== 24 ||
    weatherCodeArray.length !== 24 ||
    dayTimeArray.length !== 24
  ) {
    return;
  }
  const dayHours = getHoursFromTimeArray(dayTimeArray);
  for (let i = 0; i < temperatureArray.length; i++) {
    const newWeatherListItem = document.createElement("li");
    newWeatherListItem.classList.add("right-panel__down-list--list-item");
    newWeatherListItem.dataset.time =
      hourFormat === "h24" ? dayHours[i] : convertToAmPm(dayHours[i]);
    const hoursElement = document.createElement("p");
    hoursElement.classList.add("list-item__time");
    hoursElement.textContent =
      hourFormat === "h24" ? dayHours[i] : convertToAmPm(dayHours[i]);
    const iconElement = document.createElement("figure");
    iconElement.innerHTML = makeWeatherIcon(weatherCodeArray[i]);
    const temperatureElement = document.createElement("p");
    temperatureElement.classList.add("list-item__temp");
    temperatureElement.textContent =
      temperatureUnits === "celsius"
        ? temperatureArray[i]
        : convertToFahrenheit(temperatureArray[i]);
    newWeatherListItem.appendChild(hoursElement);
    newWeatherListItem.appendChild(iconElement);
    newWeatherListItem.appendChild(temperatureElement);
    listBoxElement.appendChild(newWeatherListItem);
  }
};

export const createMultipleDaysForecastElements = (
  objectOf14DaysForecast,
  boxToAppend,
  temperatureUnits = "celsius"
) => {
  boxToAppend.innerHTML = "";
  const title = document.createElement("h3");
  title.textContent = "Next 14 days forecast";
  boxToAppend.appendChild(title);

  const newForecastsDiv = document.createElement("div");
  newForecastsDiv.classList.add("display-info-box__left-panel--forecasts-list");

  Object.entries(objectOf14DaysForecast).forEach(([key, value]) => {
    // Data variables
    const temperature =
      temperatureUnits === "celsius"
        ? value.midDayTemp
        : convertToFahrenheit(value.midDayTemp);
    const description = value.midDayWeatherDescription.description;
    const icon = value.midDayWeatherIcon;
    const date = key;
    const dateObject = new Date(date);
    const dayName = dateObject.toLocaleString("en-US", { weekday: "long" });
    newForecastsDiv.appendChild(
      createMultipleForecastsElement(
        temperature,
        description,
        icon,
        date,
        dayName
      )
    );
  });
  boxToAppend.appendChild(newForecastsDiv);
};

export const createMultipleForecastsElement = (
  temp,
  desc,
  iconHTML,
  date,
  dayName
) => {
  const newForecastElement = document.createElement("div");
  newForecastElement.classList.add(
    "display-info-box__left-panel--forecasts-item"
  );
  const newForecastElementTemperature = document.createElement("p");
  newForecastElementTemperature.classList.add(
    "display-info-box__left-panel--forecasts-item-temperature"
  );
  newForecastElementTemperature.textContent = temp;
  const newForecastElementIcon = document.createElement("figure");
  newForecastElementIcon.innerHTML = iconHTML;
  const newForecastElementDate = document.createElement("p");
  newForecastElementDate.textContent = date;
  const newForecastElementDayName = document.createElement("p");
  newForecastElementDayName.classList.add("day-name");
  newForecastElementDayName.textContent = dayName;

  newForecastElement.appendChild(newForecastElementTemperature);
  newForecastElement.appendChild(newForecastElementIcon);
  newForecastElement.appendChild(newForecastElementDayName);
  newForecastElement.appendChild(newForecastElementDate);
  return newForecastElement;
};
