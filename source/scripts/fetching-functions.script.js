export const getCoordinatesAndLocationName = async (cityName) => {
  const responseFromAPI = await fetch(
    `https://geocode.maps.co/search?q={${cityName}}`
  );
  const jsonData = await responseFromAPI.json();
  if (!jsonData) {
    return "City was not found";
  }
  const { lat, lon } = jsonData[0];
  const fullLocationName = jsonData[0].display_name.split(",");

  const locationName = `${fullLocationName[0]}, ${
    fullLocationName[fullLocationName.length - 1]
  }`;
  const locationDataObject = {
    lat: lat,
    lon: lon,
    location: locationName,
  };
  return locationDataObject;
};

export const getTimeOfLocation = async ({ lat, lon }) => {
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
  const locationDate = timeArray[0];

  return {
    time: locationTime,
    date: locationDate,
    sunset: locationSunset,
    sunrise: locationSunrise,
  };
};

export const getWeatherData = async ({ lat, lon }) => {
  const lattitude = +lat;
  const longtitude = +lon;
  const latitudeValue = lattitude.toFixed(2);
  const longitudeValue = longtitude.toFixed(2);
  const responseFromAPI = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitudeValue}&longitude=${longitudeValue}&hourly=temperature_2m,weathercode,is_day&daily=sunrise,sunset&timezone=auto`
  );
  const jsonData = await responseFromAPI.json();
  console.log(jsonData);
  return jsonData;
};
