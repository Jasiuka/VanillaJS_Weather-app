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

  const dataElementHTML = `<div>
    <div class="background-video">
      <video class="video-content" autoplay muted loop>
        <source src=${weatherObj.background} type="video/mp4" />
      </video>
    </div>
      <h2>${location}</h2>
      <p>Current temperature: <span>${currentTemperature[hours]}</span>°C</p>
      <p>Current time: <span>${currentTime}</span></p>
      <p>It is <span>${isDay[hours] === 1 ? "day" : "night"}</span> now</p>
      <p>Sun sets at: ${sunset}</p>
      <p>Sun rises at: ${sunrise}</p>
      <p>Weather description: <span>${weatherObj.description}</span></p>
    </div>`;

  containerInDocument.innerHTML = dataElementHTML;
};
