import { makeWeatherDescriptionAndCreateBackground } from "./helper-functions.script.js";

export const createDataElement = async (
  weatherDataObject,
  locationTimeObject,
  { location },
  containerInDocument
) => {
  const weatherData = await weatherDataObject;
  const timeData = await locationTimeObject;

  const {
    hourly: {
      is_day: isDay,
      temperature_2m: currentTemperature,
      weathercode: weatherCode,
    },
  } = weatherData;
  const { time: currentTime, sunset, sunrise } = timeData;
  let hours = currentTime.substring(0, 2);
  hours = hours.startsWith("0") ? hours.substring(1, 2) : hours;
  console.log(weatherCode[hours]);
  const weatherObj = makeWeatherDescriptionAndCreateBackground(
    weatherCode[hours]
  );

  const allDataObject = {
    currentTemp: currentTemperature[hours],
    currentTime: currentTime,
    sunset: sunset,
    sunrise: sunrise,
    isDay: isDay[hours],
    videoAndDesc: weatherObj,
  };

  containerInDocument.appendChild(
    createBackgroundVideoElement(weatherObj.background)
  );
  containerInDocument.appendChild(
    createMainLocationDataDisplay(location, allDataObject)
  );
  // const dataElementHTML = `<div>
  //   <div class="background-video">
  //     <video class="video-content" autoplay muted loop>
  //       <source src=${weatherObj.background} type="video/mp4" />
  //     </video>
  //   </div>
  //     <h2>${location}</h2>
  //     <p>Current temperature: <span>${currentTemperature[hours]}</span>°C</p>
  //     <p>Current time: <span>${currentTime}</span></p>
  //     <p>It is <span>${isDay[hours] === 1 ? "day" : "night"}</span> now</p>
  //     <p>Sun sets at: ${sunset}</p>
  //     <p>Sun rises at: ${sunrise}</p>
  //     <p>Weather description: <span>${weatherObj.description}</span></p>
  //   </div>`;

  // containerInDocument.innerHTML = dataElementHTML;
};

const createBackgroundVideoElement = (backgroundUrl) => {
  const existingVideoElement = document.querySelector(".video-content");
  if (existingVideoElement) {
    return existingVideoElement.parentNode;
  }
  const newDiv = document.createElement("div");
  newDiv.classList.add("background-video");
  const newVideoElement = document.createElement("video");
  newVideoElement.classList.add("video-content");
  newVideoElement.setAttribute("autoplay", "");
  newVideoElement.setAttribute("loop", "");
  newVideoElement.setAttribute("muted", "");
  const newSourceElement = document.createElement("source");
  newSourceElement.setAttribute("src", `${backgroundUrl}`);
  newSourceElement.setAttribute("type", "video/mp4");
  newVideoElement.appendChild(newSourceElement);
  newDiv.appendChild(newVideoElement);
  return newDiv;
};

const createMainLocationDataDisplay = (
  locationName,
  {
    sunset,
    sunrise,
    videoAndDesc: { description },
    currentTemp,
    currentTime,
    isDay,
  }
) => {
  const newDiv = document.createElement("div");
  // Title element
  const titleElement = document.createElement("h2");
  titleElement.textContent = locationName;
  newDiv.appendChild(titleElement);

  const dataDiv = document.createElement("div");
  // Current time element
  const currentTimeElement = document.createElement("p");
  currentTimeElement.textContent = `Current time: ${currentTime}`;
  // Current temperature element
  const currentTemperatureElement = document.createElement("p");
  currentTemperatureElement.textContent = `Current temperature: ${currentTemp}°C`;
  // It is day or night element
  const isDayOrNightElement = document.createElement("p");
  isDayOrNightElement.textContent = `It is a ${
    isDay === 1 ? "day" : "night"
  } now`;
  // Sunrise / sunset element
  const sunriseAndSunsetElement = document.createElement("p");
  sunriseAndSunsetElement.textContent = `Sunrise starts: ${sunrise}, sunset starts: ${sunset}`;
  // Weather description element
  const weatherDescriptionElement = document.createElement("p");
  weatherDescriptionElement.textContent = `Weather description: ${description}`;
  dataDiv.appendChild(currentTimeElement);
  dataDiv.appendChild(currentTemperatureElement);
  dataDiv.appendChild(isDayOrNightElement);
  dataDiv.appendChild(sunriseAndSunsetElement);
  dataDiv.appendChild(weatherDescriptionElement);
  newDiv.appendChild(dataDiv);
  return newDiv;
};
