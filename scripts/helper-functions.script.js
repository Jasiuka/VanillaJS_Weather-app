export const makeWeatherDescriptionAndBackground = (
  weatherCode,
  screenWidth
) => {
  const weather = {
    background: "",
    description: "",
  };

  switch (weatherCode) {
    case 0:
      weather.background =
        screenWidth < 780 ? `assets/clear-img-low.jpg` : `assets/clear-img.jpg`;
      weather.description = "Sky is clear";
      break;
    case 1:
      weather.background =
        screenWidth < 780 ? `assets/clear-img-low.jpg` : `assets/clear-img.jpg`;
      weather.description = "Sky is mainly clear";
      break;
    case 2:
    case 3:
      weather.background =
        screenWidth < 780
          ? `assets/cloudy-img-low.jpg`
          : `assets/cloudy-img.jpg`;
      weather.description = "Sky is cloudy";
      break;
    case 51:
    case 56:
      weather.background =
        screenWidth < 780 ? `assets/rain-img-low.jpg` : `assets/rain-img.jpg`;
      weather.description = `Light drizzle`;
      break;
    case 53:
      weather.background =
        screenWidth < 780 ? `assets/rain-img-low.jpg` : `assets/rain-img.jpg`;
      weather.description = `Moderate drizzle`;
      break;
    case 55:
    case 57:
      weather.background =
        screenWidth < 780 ? `assets/rain-img-low.jpg` : `assets/rain-img.jpg`;
      weather.description = `Dense drizzle`;
      break;
    case 61:
    case 66:
    case 80:
      weather.background =
        screenWidth < 780 ? `assets/rain-img-low.jpg` : `assets/rain-img.jpg`;
      weather.description = `Light rain`;
      break;
    case 63:
    case 81:
      weather.background =
        screenWidth < 780 ? `assets/rain-img-low.jpg` : `assets/rain-img.jpg`;
      weather.description = `Moderate rain`;
      break;
    case 65:
    case 67:
    case 82:
      weather.background =
        screenWidth < 780 ? `assets/rain-img-low.jpg` : `assets/rain-img.jpg`;
      weather.description = `Heavy rain`;
      break;
    case 71:
    case 77:
    case 85:
      weather.background =
        screenWidth < 780 ? `assets/snow-img-low.jpg` : `assets/snow-img.jpg`;
      weather.description = `Light snow`;
      break;
    case 73:
      weather.background =
        screenWidth < 780 ? `assets/snow-img-low.jpg` : `assets/snow-img.jpg`;
      weather.description = `Moderate snow`;
      break;
    case 75:
    case 86:
      weather.background =
        screenWidth < 780 ? `assets/snow-img-low.jpg` : `assets/snow-img.jpg`;
      weather.description = `Heavy snow`;
      break;
    case 95:
    case 96:
    case 99:
      weather.background =
        screenWidth < 780 ? `assets/storm-img-low.jpg` : `assets/storm-img.jpg`;
      weather.description = `Storm`;
      break;
    default:
      weather.background =
        screenWidth < 780 ? `assets/clear-img-low.jpg` : `assets/clear-img.jpg`;
      weather.description = "Something went wrong. Try again";
  }
  return weather;
};

export const makeWeatherIcon = (weatherCode) => {
  let iconHTML;

  switch (weatherCode) {
    case 0:
    case 1:
      iconHTML = `<svg version="1.1" title='Sun icon' class="weather-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240 240" style="enable-background:new 0 0 240 240" xml:space="preserve"><g><path d="M58.57,25.81c-2.13-3.67-0.87-8.38,2.8-10.51c3.67-2.13,8.38-0.88,10.51,2.8l9.88,17.1c2.13,3.67,0.87,8.38-2.8,10.51 c-3.67,2.13-8.38,0.88-10.51-2.8L58.57,25.81L58.57,25.81z M120,51.17c19.01,0,36.21,7.7,48.67,20.16 C181.12,83.79,188.83,101,188.83,120c0,19.01-7.7,36.21-20.16,48.67c-12.46,12.46-29.66,20.16-48.67,20.16 c-19.01,0-36.21-7.7-48.67-20.16C58.88,156.21,51.17,139.01,51.17,120c0-19.01,7.7-36.21,20.16-48.67 C83.79,58.88,101,51.17,120,51.17L120,51.17z M158.27,81.73c-9.79-9.79-23.32-15.85-38.27-15.85c-14.95,0-28.48,6.06-38.27,15.85 c-9.79,9.79-15.85,23.32-15.85,38.27c0,14.95,6.06,28.48,15.85,38.27c9.79,9.79,23.32,15.85,38.27,15.85 c14.95,0,28.48-6.06,38.27-15.85c9.79-9.79,15.85-23.32,15.85-38.27C174.12,105.05,168.06,91.52,158.27,81.73L158.27,81.73z M113.88,7.71c0-4.26,3.45-7.71,7.71-7.71c4.26,0,7.71,3.45,7.71,7.71v19.75c0,4.26-3.45,7.71-7.71,7.71 c-4.26,0-7.71-3.45-7.71-7.71V7.71L113.88,7.71z M170.87,19.72c2.11-3.67,6.8-4.94,10.48-2.83c3.67,2.11,4.94,6.8,2.83,10.48 l-9.88,17.1c-2.11,3.67-6.8,4.94-10.48,2.83c-3.67-2.11-4.94-6.8-2.83-10.48L170.87,19.72L170.87,19.72z M214.19,58.57 c3.67-2.13,8.38-0.87,10.51,2.8c2.13,3.67,0.88,8.38-2.8,10.51l-17.1,9.88c-3.67,2.13-8.38,0.87-10.51-2.8 c-2.13-3.67-0.88-8.38,2.8-10.51L214.19,58.57L214.19,58.57z M232.29,113.88c4.26,0,7.71,3.45,7.71,7.71 c0,4.26-3.45,7.71-7.71,7.71h-19.75c-4.26,0-7.71-3.45-7.71-7.71c0-4.26,3.45-7.71,7.71-7.71H232.29L232.29,113.88z M220.28,170.87 c3.67,2.11,4.94,6.8,2.83,10.48c-2.11,3.67-6.8,4.94-10.48,2.83l-17.1-9.88c-3.67-2.11-4.94-6.8-2.83-10.48 c2.11-3.67,6.8-4.94,10.48-2.83L220.28,170.87L220.28,170.87z M181.43,214.19c2.13,3.67,0.87,8.38-2.8,10.51 c-3.67,2.13-8.38,0.88-10.51-2.8l-9.88-17.1c-2.13-3.67-0.87-8.38,2.8-10.51c3.67-2.13,8.38-0.88,10.51,2.8L181.43,214.19 L181.43,214.19z M126.12,232.29c0,4.26-3.45,7.71-7.71,7.71c-4.26,0-7.71-3.45-7.71-7.71v-19.75c0-4.26,3.45-7.71,7.71-7.71 c4.26,0,7.71,3.45,7.71,7.71V232.29L126.12,232.29z M69.13,220.28c-2.11,3.67-6.8,4.94-10.48,2.83c-3.67-2.11-4.94-6.8-2.83-10.48 l9.88-17.1c2.11-3.67,6.8-4.94,10.48-2.83c3.67,2.11,4.94,6.8,2.83,10.48L69.13,220.28L69.13,220.28z M25.81,181.43 c-3.67,2.13-8.38,0.87-10.51-2.8c-2.13-3.67-0.88-8.38,2.8-10.51l17.1-9.88c3.67-2.13,8.38-0.87,10.51,2.8 c2.13,3.67,0.88,8.38-2.8,10.51L25.81,181.43L25.81,181.43z M7.71,126.12c-4.26,0-7.71-3.45-7.71-7.71c0-4.26,3.45-7.71,7.71-7.71 h19.75c4.26,0,7.71,3.45,7.71,7.71c0,4.26-3.45,7.71-7.71,7.71H7.71L7.71,126.12z M19.72,69.13c-3.67-2.11-4.94-6.8-2.83-10.48 c2.11-3.67,6.8-4.94,10.48-2.83l17.1,9.88c3.67,2.11,4.94,6.8,2.83,10.48c-2.11,3.67-6.8,4.94-10.48,2.83L19.72,69.13L19.72,69.13z"/></g></svg>`;
      break;
    case 2:
    case 3:
      iconHTML = `<svg version="1.1" title='Sky is cloudy icon' class="weather-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 83.78" style="enable-background:new 0 0 122.88 83.78" xml:space="preserve"><g><path d="M101.8,57.81c-0.99-0.97-1-2.56-0.03-3.55c0.97-0.99,2.56-1,3.55-0.03l6.91,6.82c0.99,0.97,1,2.56,0.03,3.55 c-0.97,0.99-2.56,1-3.55,0.03L101.8,57.81L101.8,57.81z M66.03,46.16c-0.58,0.28-1.15,0.59-1.73,0.93 c-1.72,1.01-3.42,2.24-5.15,3.66l-3.7-4.24c1.28-1.19,2.66-2.27,4.13-3.22c1.17-0.76,2.39-1.44,3.65-2.02 c0.5-0.25,1.02-0.49,1.53-0.71c-2.44-4.32-5.95-7.42-9.93-9.33c-3.98-1.91-8.43-2.64-12.76-2.22c-4.31,0.42-8.49,1.98-11.95,4.66 c-4,3.1-7.04,7.73-8.2,13.87l-0.36,1.92l-1.91,0.34c-1.87,0.33-3.55,0.78-5.02,1.35c-1.42,0.55-2.69,1.23-3.8,2.03 c-0.89,0.64-1.65,1.36-2.3,2.14c-2.01,2.41-2.95,5.43-2.92,8.49c0.02,3.1,1.03,6.24,2.9,8.82c0.69,0.96,1.5,1.83,2.42,2.6l0,0.01 c0.92,0.77,1.97,1.4,3.16,1.89c1.17,0.48,2.46,0.83,3.9,1.03h55.48c2.7-0.65,5.09-1.53,7.11-2.66c2.01-1.13,3.65-2.5,4.89-4.14 c1.91-2.54,2.85-6.15,2.89-9.84c0.04-3.88-0.9-7.77-2.74-10.6c-0.53-0.81-1.11-1.55-1.72-2.21c-2.76-2.97-6.27-4.27-9.9-4.3 C71.35,44.38,68.62,45.02,66.03,46.16L66.03,46.16z M70.35,39.07c1.22-0.19,2.45-0.29,3.66-0.28c5.14,0.03,10.09,1.87,14,6.08 c0.82,0.88,1.59,1.87,2.31,2.98c0.31,0.48,0.61,0.98,0.88,1.51c0.36-0.66,0.68-1.34,0.94-2.06c0.61-1.64,0.94-3.43,0.94-5.3 c0-4.2-1.7-8.01-4.46-10.76c-2.75-2.75-6.56-4.46-10.76-4.46c-2.66,0-5.15,0.67-7.3,1.85c-1.8,0.99-3.39,2.33-4.66,3.95 C67.61,34.45,69.12,36.62,70.35,39.07L70.35,39.07z M93.44,55.83c0.37,1.87,0.55,3.8,0.53,5.72c-0.05,4.82-1.36,9.63-4.01,13.16 c-1.73,2.31-3.96,4.18-6.63,5.68c-2.57,1.44-5.57,2.53-8.93,3.31l-0.63,0.08H17.88l-0.35-0.03c-2.04-0.26-3.9-0.74-5.57-1.43 c-1.72-0.71-3.26-1.64-4.62-2.78H7.32c-1.28-1.07-2.41-2.29-3.36-3.61C1.41,72.41,0.03,68.11,0,63.83 c-0.03-4.33,1.32-8.64,4.22-12.12c0.94-1.13,2.05-2.17,3.32-3.09c1.48-1.07,3.17-1.98,5.07-2.72c1.32-0.51,2.72-0.94,4.21-1.28 c1.68-6.68,5.27-11.83,9.88-15.41c4.31-3.34,9.51-5.29,14.85-5.81c5.32-0.51,10.8,0.39,15.71,2.75c1.55,0.74,3.04,1.63,4.45,2.66 c1.7-2.07,3.79-3.82,6.17-5.12c2.98-1.63,6.38-2.55,9.99-2.55c5.76,0,10.97,2.33,14.75,6.11c3.77,3.77,6.11,8.99,6.11,14.75 c0,2.54-0.46,4.97-1.29,7.23c-0.87,2.34-2.14,4.49-3.74,6.34C93.61,55.67,93.53,55.75,93.44,55.83L93.44,55.83z M51.38,14.53 c-0.99-0.97-1-2.56-0.03-3.55c0.97-0.99,2.56-1,3.55-0.03l6.91,6.82c0.99,0.97,1,2.56,0.03,3.55c-0.97,0.99-2.56,1-3.55,0.03 L51.38,14.53L51.38,14.53z M78.54,2.52c-0.01-1.38,1.11-2.51,2.5-2.52c1.38-0.01,2.51,1.11,2.52,2.5l0.06,9.71 c0.01,1.38-1.11,2.51-2.5,2.52c-1.38,0.01-2.51-1.11-2.52-2.5L78.54,2.52L78.54,2.52z M106.52,12.04c0.99-0.97,2.58-0.96,3.55,0.03 c0.97,0.99,0.96,2.58-0.03,3.55l-6.91,6.82c-0.99,0.97-2.58,0.96-3.55-0.03c-0.97-0.99-0.96-2.58,0.03-3.55L106.52,12.04 L106.52,12.04z M120.36,38.66c1.38-0.01,2.51,1.11,2.52,2.5c0.01,1.38-1.11,2.51-2.5,2.52l-9.71,0.06 c-1.38,0.01-2.51-1.11-2.52-2.5c-0.01-1.38,1.11-2.51,2.5-2.52L120.36,38.66L120.36,38.66z"/></g></svg>`;
      break;
    case 51:
    case 56:
    case 53:
    case 55:
    case 57:
    case 61:
    case 66:
    case 80:
    case 63:
    case 81:
    case 65:
    case 67:
    case 82:
      iconHTML = `<svg version="1.1" title='Raining icon' class="weather-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 107.61" style="enable-background:new 0 0 122.88 107.61" xml:space="preserve"><g><path d="M18.23,78.18c1.54,0.19,2.63,1.6,2.43,3.14c-0.19,1.54-1.6,2.63-3.14,2.43c-2.04-0.26-3.9-0.74-5.57-1.43 c-1.72-0.71-3.26-1.64-4.62-2.78H7.32c-1.28-1.07-2.41-2.29-3.36-3.61C1.41,72.41,0.03,68.11,0,63.83 c-0.03-4.33,1.32-8.64,4.22-12.12c0.94-1.13,2.05-2.17,3.32-3.09c1.48-1.07,3.17-1.98,5.07-2.72c1.32-0.51,2.72-0.94,4.21-1.28 c1.68-6.68,5.27-11.83,9.88-15.41c4.31-3.34,9.51-5.29,14.85-5.81c5.32-0.51,10.8,0.39,15.71,2.75c1.55,0.74,3.04,1.63,4.45,2.66 c1.7-2.07,3.79-3.82,6.17-5.12c2.98-1.63,6.38-2.55,9.99-2.55c5.76,0,10.97,2.33,14.75,6.11c3.77,3.77,6.11,8.99,6.11,14.75 c0,2.54-0.46,4.97-1.29,7.23c-0.87,2.34-2.14,4.49-3.74,6.34c-0.08,0.09-0.16,0.17-0.25,0.25c0.37,1.87,0.55,3.8,0.53,5.72 c-0.05,4.82-1.36,9.63-4.01,13.16c-1.73,2.31-3.96,4.18-6.63,5.68c-2.57,1.44-5.57,2.53-8.93,3.31c-1.51,0.35-3.02-0.6-3.37-2.11 c-0.35-1.51,0.6-3.02,2.11-3.37c2.84-0.66,5.33-1.56,7.44-2.74c2.01-1.13,3.65-2.5,4.89-4.14c1.91-2.54,2.85-6.15,2.89-9.84 c0.04-3.88-0.9-7.77-2.74-10.6c-0.53-0.81-1.11-1.55-1.72-2.21c-2.76-2.97-6.27-4.27-9.9-4.3c-2.64-0.02-5.37,0.62-7.96,1.76 c-0.58,0.28-1.15,0.59-1.72,0.93c-1.72,1.01-3.42,2.24-5.15,3.66l-3.7-4.24c1.28-1.19,2.66-2.27,4.13-3.22 c1.17-0.76,2.39-1.44,3.65-2.02c0.5-0.25,1.02-0.49,1.53-0.71c-2.44-4.32-5.95-7.42-9.93-9.33c-3.98-1.91-8.43-2.64-12.76-2.22 c-4.31,0.42-8.49,1.98-11.95,4.66c-4,3.1-7.04,7.73-8.2,13.87l-0.36,1.92l-1.91,0.34c-1.87,0.33-3.55,0.78-5.02,1.35 c-1.42,0.55-2.69,1.23-3.8,2.03c-0.89,0.64-1.65,1.36-2.3,2.14c-2.01,2.41-2.95,5.43-2.92,8.49c0.02,3.1,1.03,6.24,2.9,8.82 c0.69,0.96,1.5,1.83,2.42,2.6l0,0.01c0.92,0.77,1.97,1.4,3.16,1.89C15.32,77.63,16.7,77.99,18.23,78.18L18.23,78.18z M42.54,84.28 c1.68,7.78,6.71,11.66,6.71,15.55c0,3.89-1.68,7.78-6.71,7.78c-5.03,0-6.71-3.89-6.71-7.78C35.83,95.94,40.86,92.05,42.54,84.28 L42.54,84.28z M57.43,63.73c1.68,8.44,6.71,12.66,6.71,16.89c0,4.22-1.68,8.44-6.71,8.44c-5.03,0-6.71-4.22-6.71-8.44 C50.72,76.4,55.75,72.18,57.43,63.73L57.43,63.73z M34.97,62.91c1.21,5.59,4.82,8.39,4.82,11.19c0,2.8-1.21,5.59-4.82,5.59 c-3.62,0-4.82-2.8-4.82-5.59C30.15,71.3,33.77,68.51,34.97,62.91L34.97,62.91z M65.9,32.58c1.71,1.88,3.21,4.04,4.45,6.49 c1.22-0.19,2.45-0.29,3.66-0.28c5.14,0.03,10.09,1.87,14,6.08c0.82,0.88,1.59,1.87,2.31,2.98c0.31,0.48,0.61,0.98,0.88,1.5 c0.36-0.66,0.68-1.34,0.94-2.06c0.61-1.64,0.94-3.43,0.94-5.3c0-4.2-1.7-8.01-4.46-10.76c-2.75-2.75-6.56-4.46-10.76-4.46 c-2.66,0-5.15,0.67-7.3,1.85C68.76,29.62,67.18,30.97,65.9,32.58L65.9,32.58z M101.8,57.81c-0.99-0.97-1-2.56-0.03-3.55 c0.97-0.99,2.56-1,3.55-0.03l6.91,6.82c0.99,0.97,1,2.56,0.03,3.55c-0.97,0.99-2.56,1-3.55,0.03L101.8,57.81L101.8,57.81z M120.36,38.66c1.38-0.01,2.51,1.11,2.52,2.5c0.01,1.38-1.11,2.51-2.5,2.52l-9.71,0.06c-1.38,0.01-2.51-1.11-2.52-2.5 c-0.01-1.38,1.11-2.51,2.5-2.52L120.36,38.66L120.36,38.66z M106.52,12.04c0.99-0.97,2.58-0.96,3.55,0.03 c0.97,0.99,0.96,2.58-0.03,3.55l-6.91,6.82c-0.99,0.97-2.58,0.96-3.55-0.03c-0.97-0.99-0.96-2.58,0.03-3.55L106.52,12.04 L106.52,12.04z M78.54,2.51c-0.01-1.38,1.11-2.51,2.5-2.51c1.38-0.01,2.51,1.11,2.52,2.5l0.06,9.71c0.01,1.38-1.11,2.51-2.5,2.51 c-1.38,0.01-2.51-1.11-2.52-2.5L78.54,2.51L78.54,2.51z M51.38,14.53c-0.99-0.97-1-2.56-0.03-3.55c0.97-0.99,2.56-1,3.55-0.03 l6.91,6.82c0.99,0.97,1,2.56,0.03,3.55c-0.97,0.99-2.56,1-3.55,0.03L51.38,14.53L51.38,14.53z"/></g></svg>`;
      break;
    case 71:
    case 77:
    case 85:
    case 73:
    case 75:
    case 86:
      iconHTML = `<svg version="1.1" title='Snowing icon' class="weather-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 122.88" style="enable-background:new 0 0 122.88 122.88" xml:space="preserve"><g><path d="M58.76,44.64l-6.9-6.9l-0.58,8.81l7.48,7.48V44.64L58.76,44.64z M32.17,35.1l-12.8,0.48c-1.49,0.05-2.74-1.11-2.79-2.6 c-0.05-1.49,1.11-2.74,2.6-2.79l7.78-0.29l-8.81-8.81c-1.06-1.06-1.06-2.77,0-3.83c1.06-1.06,2.77-1.06,3.83,0l8.67,8.67l0.12-7.29 c0.02-1.49,1.25-2.68,2.74-2.66c1.49,0.02,2.68,1.25,2.66,2.74l-0.2,12.52l11.23,11.23l0.64-9.78c0.07-1.19,1.1-2.1,2.29-2.02 c0.55,0.03,1.03,0.27,1.39,0.63l0,0l7.22,7.22V20.82l-9-8.72c-1.07-1.04-1.09-2.75-0.05-3.82c1.04-1.07,2.75-1.09,3.82-0.05 l5.23,5.07V2.71c0-1.5,1.21-2.71,2.71-2.71c1.5,0,2.71,1.21,2.71,2.71v10.77l5.71-5.29c1.09-1.02,2.8-0.96,3.82,0.14 c1.02,1.09,0.96,2.8-0.14,3.82l-9.39,8.71v16.89l7.51-6.58c0.9-0.79,2.26-0.69,3.05,0.2c0.36,0.41,0.53,0.92,0.53,1.42h0.01v10.92 l13.07-13.07l-0.2-12.52c-0.02-1.49,1.17-2.72,2.66-2.74c1.49-0.02,2.72,1.17,2.74,2.66l0.12,7.29l7.49-7.49 c1.06-1.06,2.77-1.06,3.83,0c1.06,1.06,1.06,2.77,0,3.83l-7.62,7.62l7.78,0.29c1.49,0.05,2.66,1.3,2.6,2.79 c-0.05,1.49-1.3,2.66-2.79,2.6l-12.8-0.48L80.31,46.34l9.28,0.61c1.19,0.07,2.1,1.1,2.02,2.29c-0.03,0.55-0.27,1.03-0.63,1.39l0,0 l-7.28,7.28h18.34l8.72-9c1.04-1.07,2.75-1.09,3.82-0.05c1.07,1.04,1.09,2.75,0.05,3.82l-5.07,5.23h10.58 c1.5,0,2.71,1.21,2.71,2.71c0,1.5-1.21,2.71-2.71,2.71H109.4l5.29,5.71c1.02,1.09,0.96,2.8-0.14,3.82 c-1.09,1.02-2.8,0.96-3.82-0.14l-8.71-9.39H84.59l6.53,7.45c0.79,0.9,0.69,2.26-0.2,3.05c-0.41,0.36-0.92,0.53-1.42,0.53v0.01 H79.11L92.23,87.5l12.52-0.2c1.49-0.02,2.72,1.17,2.74,2.66c0.02,1.49-1.17,2.72-2.66,2.74l-7.29,0.12l7.49,7.49 c1.06,1.06,1.06,2.77,0,3.83c-1.06,1.06-2.77,1.06-3.83,0l-7.62-7.62l-0.29,7.78c-0.05,1.49-1.3,2.66-2.79,2.6 c-1.49-0.05-2.66-1.3-2.6-2.79l0.48-12.8l-12.4-12.4l-0.64,9.78c-0.07,1.19-1.1,2.1-2.29,2.02c-0.55-0.03-1.03-0.27-1.39-0.63l0,0 l-7.47-7.47v17.72l9.39,8.71c1.09,1.02,1.15,2.73,0.14,3.82c-1.02,1.09-2.73,1.15-3.82,0.14l-5.71-5.29v12.45 c0,1.5-1.21,2.71-2.71,2.71c-1.5,0-2.71-1.21-2.71-2.71v-12.26l-5.23,5.07c-1.07,1.04-2.78,1.02-3.82-0.05 c-1.04-1.07-1.02-2.78,0.05-3.82l9-8.72V83.86l-7.26,6.36c-0.9,0.79-2.26,0.69-3.05-0.2c-0.36-0.41-0.53-0.92-0.53-1.42h-0.01 v-9.85L35.94,90.71l0.48,12.8c0.05,1.49-1.11,2.74-2.6,2.79c-1.49,0.05-2.74-1.11-2.79-2.6l-0.29-7.78l-8.81,8.81 c-1.06,1.06-2.77,1.06-3.83,0c-1.06-1.06-1.06-2.77,0-3.83l8.67-8.67l-7.29-0.12c-1.49-0.02-2.68-1.25-2.66-2.74 c0.02-1.49,1.25-2.68,2.74-2.66l12.52,0.2l11.8-11.8l-10.28-0.68c-1.19-0.07-2.1-1.1-2.02-2.29c0.03-0.55,0.27-1.03,0.63-1.39l0,0 l7.4-7.41H22.54l-8.71,9.39c-1.02,1.09-2.73,1.15-3.82,0.14c-1.09-1.02-1.15-2.73-0.14-3.82l5.29-5.71H2.71 c-1.5,0-2.71-1.21-2.71-2.71c0-1.5,1.21-2.71,2.71-2.71h12.26l-5.07-5.23c-1.04-1.07-1.02-2.78,0.05-3.82 c1.07-1.04,2.78-1.02,3.82,0.05l8.72,9h15.99l-6.41-7.32c-0.79-0.9-0.69-2.26,0.2-3.05c0.41-0.36,0.92-0.53,1.42-0.53v-0.01h10.38 L32.17,35.1L32.17,35.1z M48.41,51.35h-9.95l5.76,6.57h10.76L48.41,51.35L48.41,51.35z M71.91,74.84l-7.73-7.73v9.39l7.15,7.15 L71.91,74.84L71.91,74.84z M68.07,63.34l6.7,6.7h9.95l-5.87-6.7H68.07L68.07,63.34z M45.73,63.34l-7.09,7.09l9.31,0.61l7.71-7.71 H45.73L45.73,63.34z M68.73,57.92h8.85l6.97-6.97l-8.31-0.55L68.73,57.92L68.73,57.92z M52.25,74.4v9.41l6.51-5.71V67.89 L52.25,74.4L52.25,74.4z M64.18,54.81l6.76-6.76V37.57l-6.76,5.93V54.81L64.18,54.81z"/></g></svg>`;
      break;
    case 95:
    case 96:
    case 99:
      iconHTML = `<svg version="1.1" title='Storm icon' class="weather-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 119.31 122.88" style="enable-background:new 0 0 119.31 122.88" xml:space="preserve"><g><path d="M23.15,69.72c1.95,0.25,3.33,2.03,3.09,3.98c-0.25,1.95-2.03,3.33-3.98,3.09c-2.59-0.33-4.95-0.94-7.08-1.82 c-2.18-0.9-4.13-2.08-5.86-3.53H9.3c-1.63-1.36-3.06-2.91-4.27-4.59C1.79,62.38,0.04,56.93,0,51.49C-0.04,46,1.67,40.53,5.36,36.11 c1.2-1.43,2.6-2.75,4.21-3.92c1.88-1.36,4.02-2.51,6.44-3.45c1.67-0.65,3.45-1.19,5.34-1.63c2.13-8.48,6.69-15.02,12.54-19.56 c5.47-4.25,12.07-6.72,18.86-7.37c6.75-0.65,13.71,0.5,19.95,3.49c6.82,3.27,12.76,8.72,16.62,16.38c1.55-0.24,3.11-0.36,4.65-0.35 c6.52,0.04,12.81,2.38,17.77,7.72c1.04,1.12,2.02,2.38,2.94,3.79c3.11,4.78,4.7,11.16,4.63,17.4c-0.07,6.12-1.72,12.23-5.1,16.72 c-1.67,2.22-3.7,4.13-6.06,5.74c-2.29,1.57-4.91,2.88-7.82,3.94c-1.85,0.67-3.9-0.29-4.57-2.14c-0.67-1.85,0.29-3.9,2.14-4.57 c2.34-0.85,4.42-1.89,6.23-3.13c1.74-1.19,3.21-2.56,4.38-4.12c2.43-3.23,3.62-7.8,3.67-12.5c0.05-4.92-1.14-9.86-3.48-13.46 c-0.67-1.03-1.4-1.97-2.18-2.81c-3.5-3.77-7.96-5.42-12.57-5.45c-3.36-0.02-6.82,0.78-10.11,2.24c-0.73,0.36-1.46,0.75-2.19,1.18 c-2.19,1.28-4.35,2.85-6.54,4.64l-4.69-5.38c1.62-1.5,3.38-2.88,5.25-4.09c1.49-0.97,3.04-1.83,4.64-2.57 c0.64-0.32,1.29-0.62,1.94-0.9c-3.1-5.48-7.56-9.42-12.61-11.85c-5.05-2.42-10.7-3.35-16.2-2.82c-5.47,0.53-10.78,2.51-15.17,5.92 c-5.07,3.94-8.94,9.82-10.42,17.61l-0.46,2.44l-2.43,0.43c-2.38,0.42-4.5,0.99-6.37,1.71c-1.81,0.7-3.42,1.56-4.82,2.58 c-1.13,0.82-2.1,1.73-2.92,2.72c-2.56,3.06-3.74,6.9-3.71,10.78c0.03,3.94,1.31,7.92,3.68,11.2c0.88,1.21,1.91,2.33,3.07,3.3 l-0.01,0.01c1.17,0.97,2.5,1.78,4.01,2.4C19.45,69.02,21.2,69.47,23.15,69.72L23.15,69.72z M60.54,96.41L68.79,67h21.1L82.54,82.4 l12.52,0.24l-30.51,40.24l5.87-26.47H60.54L60.54,96.41z M44.03,61.43c1.44,6.68,5.76,10.02,5.76,13.36c0,3.34-1.44,6.68-5.76,6.68 c-4.32,0-5.76-3.34-5.76-6.68C38.27,71.46,42.59,68.12,44.03,61.43L44.03,61.43z M47.77,88.53c1.66,7.68,6.63,11.53,6.63,15.37 c0,3.84-1.66,7.68-6.63,7.68c-4.97,0-6.63-3.84-6.63-7.68C41.14,100.05,46.11,96.21,47.77,88.53L47.77,88.53z M28.26,80.39 c1.66,7.68,6.63,11.53,6.63,15.37c0,3.84-1.66,7.68-6.63,7.68c-4.97,0-6.63-3.84-6.63-7.68C21.63,91.92,26.6,88.08,28.26,80.39 L28.26,80.39z"/></g></svg>`;
      break;
    default:
      iconHTML = `<svg version="1.1" title='Sun icon' class="weather-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240 240" style="enable-background:new 0 0 240 240" xml:space="preserve"><g><path d="M58.57,25.81c-2.13-3.67-0.87-8.38,2.8-10.51c3.67-2.13,8.38-0.88,10.51,2.8l9.88,17.1c2.13,3.67,0.87,8.38-2.8,10.51 c-3.67,2.13-8.38,0.88-10.51-2.8L58.57,25.81L58.57,25.81z M120,51.17c19.01,0,36.21,7.7,48.67,20.16 C181.12,83.79,188.83,101,188.83,120c0,19.01-7.7,36.21-20.16,48.67c-12.46,12.46-29.66,20.16-48.67,20.16 c-19.01,0-36.21-7.7-48.67-20.16C58.88,156.21,51.17,139.01,51.17,120c0-19.01,7.7-36.21,20.16-48.67 C83.79,58.88,101,51.17,120,51.17L120,51.17z M158.27,81.73c-9.79-9.79-23.32-15.85-38.27-15.85c-14.95,0-28.48,6.06-38.27,15.85 c-9.79,9.79-15.85,23.32-15.85,38.27c0,14.95,6.06,28.48,15.85,38.27c9.79,9.79,23.32,15.85,38.27,15.85 c14.95,0,28.48-6.06,38.27-15.85c9.79-9.79,15.85-23.32,15.85-38.27C174.12,105.05,168.06,91.52,158.27,81.73L158.27,81.73z M113.88,7.71c0-4.26,3.45-7.71,7.71-7.71c4.26,0,7.71,3.45,7.71,7.71v19.75c0,4.26-3.45,7.71-7.71,7.71 c-4.26,0-7.71-3.45-7.71-7.71V7.71L113.88,7.71z M170.87,19.72c2.11-3.67,6.8-4.94,10.48-2.83c3.67,2.11,4.94,6.8,2.83,10.48 l-9.88,17.1c-2.11,3.67-6.8,4.94-10.48,2.83c-3.67-2.11-4.94-6.8-2.83-10.48L170.87,19.72L170.87,19.72z M214.19,58.57 c3.67-2.13,8.38-0.87,10.51,2.8c2.13,3.67,0.88,8.38-2.8,10.51l-17.1,9.88c-3.67,2.13-8.38,0.87-10.51-2.8 c-2.13-3.67-0.88-8.38,2.8-10.51L214.19,58.57L214.19,58.57z M232.29,113.88c4.26,0,7.71,3.45,7.71,7.71 c0,4.26-3.45,7.71-7.71,7.71h-19.75c-4.26,0-7.71-3.45-7.71-7.71c0-4.26,3.45-7.71,7.71-7.71H232.29L232.29,113.88z M220.28,170.87 c3.67,2.11,4.94,6.8,2.83,10.48c-2.11,3.67-6.8,4.94-10.48,2.83l-17.1-9.88c-3.67-2.11-4.94-6.8-2.83-10.48 c2.11-3.67,6.8-4.94,10.48-2.83L220.28,170.87L220.28,170.87z M181.43,214.19c2.13,3.67,0.87,8.38-2.8,10.51 c-3.67,2.13-8.38,0.88-10.51-2.8l-9.88-17.1c-2.13-3.67-0.87-8.38,2.8-10.51c3.67-2.13,8.38-0.88,10.51,2.8L181.43,214.19 L181.43,214.19z M126.12,232.29c0,4.26-3.45,7.71-7.71,7.71c-4.26,0-7.71-3.45-7.71-7.71v-19.75c0-4.26,3.45-7.71,7.71-7.71 c4.26,0,7.71,3.45,7.71,7.71V232.29L126.12,232.29z M69.13,220.28c-2.11,3.67-6.8,4.94-10.48,2.83c-3.67-2.11-4.94-6.8-2.83-10.48 l9.88-17.1c2.11-3.67,6.8-4.94,10.48-2.83c3.67,2.11,4.94,6.8,2.83,10.48L69.13,220.28L69.13,220.28z M25.81,181.43 c-3.67,2.13-8.38,0.87-10.51-2.8c-2.13-3.67-0.88-8.38,2.8-10.51l17.1-9.88c3.67-2.13,8.38-0.87,10.51,2.8 c2.13,3.67,0.88,8.38-2.8,10.51L25.81,181.43L25.81,181.43z M7.71,126.12c-4.26,0-7.71-3.45-7.71-7.71c0-4.26,3.45-7.71,7.71-7.71 h19.75c4.26,0,7.71,3.45,7.71,7.71c0,4.26-3.45,7.71-7.71,7.71H7.71L7.71,126.12z M19.72,69.13c-3.67-2.11-4.94-6.8-2.83-10.48 c2.11-3.67,6.8-4.94,10.48-2.83l17.1,9.88c3.67,2.11,4.94,6.8,2.83,10.48c-2.11,3.67-6.8,4.94-10.48,2.83L19.72,69.13L19.72,69.13z"/></g></svg>`;
  }
  return iconHTML;
};

export const getHoursFromTimeArray = (timeArray) => {
  if (!timeArray || timeArray.length === 0) return;
  const dayHours = [];
  timeArray.forEach((timeElement) => {
    const splittedTime = timeElement.split("T");
    dayHours.push(splittedTime[1]);
  });
  return dayHours;
};

export const scrollToTheCurrentHourAndHighlight = (
  currentTime,
  listBox,
  hoursFormat = "h24"
) => {
  const newCurrentTime =
    hoursFormat === "h24" ? currentTime : convertToAmPm(currentTime);
  const currentTimeForecastElement = listBox.querySelector(
    `[data-time="${newCurrentTime}"]`
  );
  listBox.scrollLeft =
    currentTimeForecastElement.offsetLeft - listBox.offsetWidth;

  currentTimeForecastElement.classList.add("highlighted");
};

export const convertToAmPm = (h24FormatTime) => {
  if (typeof h24FormatTime === "string" && h24FormatTime.trim() !== "") {
    const [hours, minutes] = h24FormatTime.split(":");
    const amOrPm = parseInt(hours) >= 12 ? "PM" : "AM";
    if (hours === "00") {
      return `12:${minutes} ${amOrPm}`;
    }
    if (hours === "12" && amOrPm === "AM") {
      return `1:${minutes} ${amOrPm}`;
    }
    if (hours === "12" && amOrPm === "PM") {
      return `12:${minutes} ${amOrPm}`;
    }
    const amPmHours = (parseInt(hours) % 12).toString();
    return `${amPmHours}:${minutes} ${amOrPm}`;
  } else {
    return;
  }
};

export const convertTo24HourFormat = (amPmFormatTime) => {
  if (typeof amPmFormatTime === "string" && amPmFormatTime.trim() !== "") {
    const [time, amOrPm] = amPmFormatTime.split(" ");
    const [hours, minutes] = time.split(":");
    if (amOrPm === "AM") {
      if (hours === "12") {
        return `00:${minutes}`;
      }
      const convertedHours = hours < 10 ? `0${hours}` : hours;
      return `${convertedHours}:${minutes}`;
    }
    if (amOrPm === "PM") {
      if (hours === "12") {
        return `12:${minutes}`;
      }
      return `${(parseInt(hours) + 12).toString()}:${minutes}`;
    }
  } else {
    return;
  }
};

export const convertToFahrenheit = (cesliusTemp) => {
  if (typeof cesliusTemp === "string" && cesliusTemp.trim() !== "") {
    const convertedTemp = (parseFloat(cesliusTemp) * 1.8 + 32)
      .toFixed(1)
      .toString();
    const indexOfDot = convertedTemp.indexOf(".");
    return convertedTemp.endsWith(".0")
      ? convertedTemp.slice(0, indexOfDot)
      : convertedTemp;
  }
};

export const convertToCelsius = (fahrenheitTemp) => {
  if (typeof fahrenheitTemp === "string" && fahrenheitTemp.trim() !== "") {
    const convertedTemp = parseFloat((fahrenheitTemp - 32) / 1.8).toFixed(1);
    const indexOfDot = convertedTemp.indexOf(".");
    return convertedTemp.endsWith(".0")
      ? convertedTemp.slice(0, indexOfDot)
      : convertedTemp;
  }
};

export const make14DaysForecastObject = ({ daily, hourly }) => {
  const weatherDataArray = [];
  let howManyDaysForecast = 0;
  for (let i = 11; i < hourly.temperature_2m.length; i += 24) {
    if (hourly.temperature_2m[i] !== null || hourly.weathercode[i] !== null) {
      const newObject = {
        midDayTemp: hourly.temperature_2m[i],
        midDayWeatherDescription: makeWeatherDescriptionAndBackground(
          hourly.weathercode[i]
        ),
        midDayWeatherIcon: makeWeatherIcon(hourly.weathercode[i]),
      };
      weatherDataArray.push(newObject);
      howManyDaysForecast++;
    }
  }
  const forecastObject = {};
  const timeArray = daily.time;
  // Sometimes not for all 14 days forecasts are available, so had to make variable which counts how many days forecast
  // is possible and use it instead of timeArray length
  for (let i = 0; i < howManyDaysForecast; i++) {
    forecastObject[timeArray[i]] = weatherDataArray[i];
  }
  return forecastObject;
};

export const changeBoxStyles = (firstWindow, displayWindow, refreshButton) => {
  if (
    !(firstWindow instanceof HTMLElement) ||
    !(displayWindow instanceof HTMLElement) ||
    !(refreshButton instanceof HTMLElement)
  )
    return;

  firstWindow.style.display = "none";
  displayWindow.style.display = "flex";
  refreshButton.style.display = "flex";
};

export const createSaveObject = (
  hoursSettings,
  temperatureSettings,
  locationName
) => {
  if (!hoursSettings || !temperatureSettings || !locationName) return;
  const newSaveObject = {
    hourFormat: hoursSettings,
    temperatureUnit: temperatureSettings,
    location: locationName,
  };
  return newSaveObject;
};

export const saveDataObject = (objectToSave) => {
  if (!objectToSave || typeof objectToSave !== "object") return;
  localStorage.setItem("settings", JSON.stringify(objectToSave));
};

export const checkTempButtonsBySettings = (tempUnit) => {
  switch (tempUnit) {
    case "celsius":
      document.getElementById(tempUnit).checked = true;
      document.getElementById(tempUnit).disabled = true;
      break;
    case "fahrenheit":
      document.getElementById(tempUnit).checked = true;
      document.getElementById(tempUnit).disabled = true;
      break;
    default:
      return;
  }
};

export const checkHourButtonsBySettings = (hourFormat) => {
  switch (hourFormat) {
    case "h24":
      document.getElementById("h24").checked = true;
      document.getElementById("h24").disabled = true;
      break;
    case "ampm":
      document.getElementById("ampm").checked = true;
      document.getElementById("ampm").disabled = true;
      break;
    default:
      return;
  }
};

// Message box

export const showMessageBox = (
  messageBoxElement,
  messageText,
  error = false
) => {
  if (!error) {
    messageBoxElement.style.backgroundColor = "rgba(36, 180, 36, 0.16)";
  } else {
    messageBoxElement.style.backgroundColor = "rgba(177, 21, 21, 0.16)";
  }
  const messageBoxSpanElement = messageBoxElement.querySelector("span");
  messageBoxSpanElement.textContent = messageText;
  messageBoxElement.classList.toggle("message-box-hidden");
  setTimeout(() => {
    messageBoxElement.classList.toggle("message-box-hidden");
  }, 1500);
};

export const leftPanelToggleHandler = (
  leftPanelOuter,
  leftPanelInner,
  closed = false
) => {
  const mediaQuery = window.matchMedia(
    "only screen and (max-width: 78.125rem)"
  );
  if (mediaQuery.matches) {
    if (!closed) {
      leftPanelInner.classList.remove("left-panel-inner-collapsed");
      leftPanelOuter.classList.remove("left-panel-outer-collapsed");
    } else {
      leftPanelInner.classList.add("left-panel-inner-collapsed");
      leftPanelOuter.classList.add("left-panel-outer-collapsed");
    }
  } else {
    return;
  }
};
