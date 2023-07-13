import {
  makeWeatherDescriptionAndBackground,
  getHoursFromTimeArray,
  makeWeatherIcon,
} from "./helper-functions.script.js";

export const createDataElement = async (
  weatherDataObject,
  locationTimeObject,
  { location },
  locationTitleElement,
  leftPanel,
  rightPanel,
  listBoxElement
) => {
  const weatherData = await weatherDataObject;
  const timeData = await locationTimeObject;
  // locationToAdd.innerHTML = "";

  const {
    hourly: {
      is_day: isDay,
      temperature_2m: currentTemperature,
      time: timeArray,
      weathercode: weatherCode,
    },
  } = weatherData;
  const { time: currentTime, date, sunset, sunrise } = timeData;
  let hours = currentTime.substring(0, 2);
  hours = hours.startsWith("0") ? hours.substring(1, 2) : hours;

  const weatherObj = makeWeatherDescriptionAndBackground(weatherCode[hours]);
  const todayWeatherData = {
    temperatureArray: currentTemperature.slice(0, 24),
    weatherCodeArray: weatherCode.slice(0, 24),
    dayTimeArray: timeArray.slice(0, 24),
  };

  // const dayHours = getHoursFromTimeArray(todayWeatherData.dayTimeArray);
  // console.log(dayHours);
  // const allDataObject = {
  //   currentTemp: currentTemperature[hours],
  //   currentTime: currentTime,
  //   sunset: sunset,
  //   sunrise: sunrise,
  //   isDay: isDay[hours],
  //   videoAndDesc: weatherObj,
  // };

  locationTitleElement.textContent = location;
  const existingTempElement = document.querySelector(
    ".left-panel__temperature"
  );
  if (existingTempElement) {
    existingTempElement.textContent = currentTemperature[hours];
  } else {
    leftPanel.appendChild(createTemperatureElement(currentTemperature[hours]));
  }

  const existingTimeAndDateElement = document.querySelector(
    ".right-panel__time-date-box"
  );
  if (existingTimeAndDateElement) {
    document.querySelector(".right-panel__time").textContent = currentTime;
    document.querySelector(".right-panel__date").textContent = date;
  } else {
    rightPanel.appendChild(createTimeAndDateElement(currentTime, date));
  }

  const exisitingDescriptionElement = document.querySelector(
    ".right-panel__weather-description"
  );
  if (exisitingDescriptionElement) {
    exisitingDescriptionElement.textContent = weatherObj.description;
  } else {
    rightPanel.appendChild(createDescriptionElement(weatherObj.description));
  }
  changeBackgroundImage(weatherObj.background);
  createHourlyForecastListElements(todayWeatherData, listBoxElement);
};

export const createTemperatureElement = (currentTemperature) => {
  const temperatureElement = document.createElement("p");
  temperatureElement.classList.add("left-panel__temperature");
  temperatureElement.textContent = currentTemperature;
  return temperatureElement;
};

export const createTimeAndDateElement = (currentTime, currentDate) => {
  const divForTimeAndDate = document.createElement("div");
  divForTimeAndDate.classList.add("right-panel__time-date-box");
  // Time
  const timeElement = document.createElement("p");
  timeElement.classList.add("right-panel__time");
  timeElement.textContent = currentTime;
  divForTimeAndDate.appendChild(timeElement);
  // Date
  const dateElement = document.createElement("p");
  dateElement.classList.add("right-panel__date");
  dateElement.textContent = currentDate;
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
  listBoxElement
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
    const hoursElement = document.createElement("p");
    hoursElement.textContent = dayHours[i];
    const iconElement = document.createElement("figure");
    iconElement.innerHTML = makeWeatherIcon(weatherCodeArray[i]);
    const temperatureElement = document.createElement("p");
    temperatureElement.textContent = temperatureArray[i];
    newWeatherListItem.appendChild(hoursElement);
    newWeatherListItem.appendChild(iconElement);
    newWeatherListItem.appendChild(temperatureElement);
    listBoxElement.appendChild(newWeatherListItem);
  }
};
