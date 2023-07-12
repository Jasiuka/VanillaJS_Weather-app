export const makeWeatherDescriptionAndCreateBackground = (weatherCode) => {
  const weather = {
    background: "",
    description: "",
  };

  switch (weatherCode) {
    case 0:
      weather.background = `assets/clear-img.jpg`;
      weather.description = "Sky is clear";
      break;
    case 1:
      weather.background = `assets/clear-img.jpg`;
      weather.description = "Sky is mainly clear";
      break;
    case 2:
    case 3:
      weather.background = `assets/cloudy-img.jpg`;
      weather.description = "Sky is cloudy";
      break;
    case 51:
    case 56:
      weather.background = `assets/rain-img.jpg`;
      weather.description = `Light drizzle`;
      break;
    case 53:
      weather.background = `assets/rain-img.jpg`;
      weather.description = `Moderate drizzle`;
      break;
    case 55:
    case 57:
      weather.background = `assets/rain-img.jpg`;
      weather.description = `Dense drizzle`;
      break;
    case 61:
    case 66:
    case 80:
      weather.background = `assets/rain-img.jpg`;
      weather.description = `Light rain`;
      break;
    case 63:
    case 81:
      weather.background = `assets/rain-img.jpg`;
      weather.description = `Moderate rain`;
      break;
    case 65:
    case 67:
    case 82:
      weather.background = `assets/rain-img.jpg`;
      weather.description = `Heavy rain`;
      break;
    case 71:
    case 77:
    case 85:
      weather.background = `assets/snow-img.jpg`;
      weather.description = `Light snow`;
      break;
    case 73:
      weather.background = `assets/snow-img.jpg`;
      weather.description = `Moderate snow`;
      break;
    case 75:
    case 86:
      weather.background = `assets/snow-img.jpg`;
      weather.description = `Heavy snow`;
      break;
    case 95:
    case 96:
    case 99:
      weather.background = `assets/storm-img.jpg`;
      weather.description = `Storm`;
      break;
    default:
      weather.background = `assets/clear-img.jpg`;
  }
  return weather;
};
