import * as helperFunction from "../scripts/helper-functions.script";

describe("Helper functions tests", () => {
  describe("makeWeatherDescriptionAndBackground function tests", () => {
    test("Should return 'Sky is mainly clear' desc and 'clear-img.jpg' - bg", () => {
      const mockWeatherCode = 1;
      const mockScreenWidth = 790;
      const data = helperFunction.makeWeatherDescriptionAndBackground(
        mockWeatherCode,
        mockScreenWidth
      );
      expect(data.description).toBe("Sky is mainly clear");
      expect(data.background).toBe("assets/clear-img.jpg");
    });
    test("Should return desc - 'Something went Wrong. Try again' and bg - 'clear-img.jpg' if not null/undefined", () => {
      const mockWeatherCode = 157;
      const mockScreenWidth = 560;
      const data = helperFunction.makeWeatherDescriptionAndBackground(
        mockWeatherCode,
        mockScreenWidth
      );
      expect(data.description).toBe("Something went wrong. Try again");
      expect(data.background).toBe("assets/clear-img-low.jpg");
    });
    test("Should return desc - 'Something went Wrong. Try again' and bg - 'clear-img.jpg' if null/undefined", () => {
      const mockWeatherCode = null;
      const mockScreenWidth = undefined;
      const data = helperFunction.makeWeatherDescriptionAndBackground(
        mockWeatherCode,
        mockScreenWidth
      );
      expect(data.description).toBe("Something went wrong. Try again");
      expect(data.background).toBe("assets/clear-img.jpg");
    });
  });
  describe("makeWeatherIcon function tests", () => {
    test("Should return storm, snow icons", () => {
      const mockedWeatherCodeForStorm = 99;
      const mockedWeatherCodeForSnowing = 86;
      const firstIcon = helperFunction.makeWeatherIcon(
        mockedWeatherCodeForStorm
      );
      const secondIcon = helperFunction.makeWeatherIcon(
        mockedWeatherCodeForSnowing
      );
      expect(firstIcon).toMatch(/Storm/);
      expect(secondIcon).toMatch(/Snowing/);
    });
    test("Should return Sun icon if undefined/null/any number which is not in any case", () => {
      const mockedWeatherCodeNull = null;
      const mockedWeatherCodeUndefined = undefined;
      const mockedWeatherCodeRandom = 158;
      const firstIcon = helperFunction.makeWeatherIcon(mockedWeatherCodeNull);
      const secondIcon = helperFunction.makeWeatherIcon(
        mockedWeatherCodeUndefined
      );
      const thirdIcon = helperFunction.makeWeatherIcon(mockedWeatherCodeRandom);
      expect(firstIcon).toMatch(/Sun/);
      expect(secondIcon).toMatch(/Sun/);
      expect(thirdIcon).toMatch(/Sun/);
    });
  });
  describe("getHoursFromTimeArray function tests", () => {
    test("Should return 06:00, 11:00, 15:00, 23:00 hour strings in array", () => {
      const mockedDateTimeArray = [
        "2023/09/03T06:00",
        "2023/09/03T11:00",
        "2023/09/03T15:00",
        "2023/09/03T23:00",
      ];
      const shouldReturn = ["06:00", "11:00", "15:00", "23:00"];
      const hoursArray =
        helperFunction.getHoursFromTimeArray(mockedDateTimeArray);
      for (let i = 0; i < shouldReturn.length; i++) {
        expect(hoursArray[i]).toBe(shouldReturn[i]);
      }
    });
    test("Should return nothing if array is empty/null/undefined", () => {
      const emptyArray = [];
      const undefinedValue = undefined;
      const nullValue = null;

      const firstOutput = helperFunction.getHoursFromTimeArray(emptyArray);
      const secondOutput = helperFunction.getHoursFromTimeArray(undefinedValue);
      const thirdOutput = helperFunction.getHoursFromTimeArray(nullValue);

      expect(firstOutput).toBe(undefined);
      expect(secondOutput).toBe(undefined);
      expect(thirdOutput).toBe(undefined);
    });
  });
  describe("convertToAmPm function tests", () => {
    test("Should return 11:45 AM, 12:00 PM, 06:00 PM", () => {
      const mockTimeFirst = "11:45";
      const mockTimeSecond = "12:00";
      const mockTimeThird = "18:00";
      const firstOutput = helperFunction.convertToAmPm(mockTimeFirst);
      const secondOutput = helperFunction.convertToAmPm(mockTimeSecond);
      const thirdOutput = helperFunction.convertToAmPm(mockTimeThird);
      expect(firstOutput).toBe("11:45 AM");
      expect(secondOutput).toBe("12:00 PM");
      expect(thirdOutput).toBe("6:00 PM");
    });
    test("Should return nothing when empty/undefined/null/not string", () => {
      const mockEmpty = "";
      const mockNull = null;
      const mockUndefined = undefined;
      const mockNotString = 111;
      const firstOutput = helperFunction.convertToAmPm(mockEmpty);
      const secondOutput = helperFunction.convertToAmPm(mockNull);
      const thirdOutput = helperFunction.convertToAmPm(mockUndefined);
      const fourthOutput = helperFunction.convertToAmPm(mockNotString);

      expect(firstOutput).toBe(undefined);
      expect(secondOutput).toBe(undefined);
      expect(thirdOutput).toBe(undefined);
      expect(fourthOutput).toBe(undefined);
    });
  });
  describe("convertTo24HourFormat function tests", () => {
    test("Should return 11:45, 12:00, 18:00", () => {
      const mockTimeFirst = "11:45 AM";
      const mockTimeSecond = "12:00 PM";
      const mockTimeThird = "6:00 PM";
      const firstOutput = helperFunction.convertTo24HourFormat(mockTimeFirst);
      const secondOutput = helperFunction.convertTo24HourFormat(mockTimeSecond);
      const thirdOutput = helperFunction.convertTo24HourFormat(mockTimeThird);
      expect(firstOutput).toBe("11:45");
      expect(secondOutput).toBe("12:00");
      expect(thirdOutput).toBe("18:00");
    });
    test("Should return nothing when empty/undefined/null/not string", () => {
      const mockEmpty = "";
      const mockNull = null;
      const mockUndefined = undefined;
      const mockNotString = 111;
      const firstOutput = helperFunction.convertTo24HourFormat(mockEmpty);
      const secondOutput = helperFunction.convertTo24HourFormat(mockNull);
      const thirdOutput = helperFunction.convertTo24HourFormat(mockUndefined);
      const fourthOutput = helperFunction.convertTo24HourFormat(mockNotString);

      expect(firstOutput).toBe(undefined);
      expect(secondOutput).toBe(undefined);
      expect(thirdOutput).toBe(undefined);
      expect(fourthOutput).toBe(undefined);
    });
  });
  describe("convertToFahrenheit and convertToCelsius functions tests", () => {
    test("convertToFahrenheit should return 73.4, 51.8, 32.0", () => {
      const mockCelsiusTempFirst = "23";
      const mockCelsiusTempSecond = "11";
      const mockCelsiusTempThird = "0";
      const firstOutput =
        helperFunction.convertToFahrenheit(mockCelsiusTempFirst);
      const secondOutput = helperFunction.convertToFahrenheit(
        mockCelsiusTempSecond
      );
      const thirdOutput =
        helperFunction.convertToFahrenheit(mockCelsiusTempThird);
      expect(firstOutput).toBe("73.4");
      expect(secondOutput).toBe("51.8");
      expect(thirdOutput).toBe("32");
    });
    test("convertToFahrenheit should return undefined if empty/null/undefined/not a string given", () => {
      const mockCelsiusTempFirst = undefined;
      const mockCelsiusTempSecond = null;
      const mockCelsiusTempThird = "    ";
      const mockCelsiusTempFourth = 154;
      const firstOutput =
        helperFunction.convertToFahrenheit(mockCelsiusTempFirst);
      const secondOutput = helperFunction.convertToFahrenheit(
        mockCelsiusTempSecond
      );
      const thirdOutput =
        helperFunction.convertToFahrenheit(mockCelsiusTempThird);
      const fourthOutput = helperFunction.convertToFahrenheit(
        mockCelsiusTempFourth
      );
      expect(firstOutput).toBe(undefined);
      expect(secondOutput).toBe(undefined);
      expect(thirdOutput).toBe(undefined);
      expect(fourthOutput).toBe(undefined);
    });
    test("convertToCelsius should return 23, 11, 0", () => {
      const mockCelsiusTempFirst = "73.4";
      const mockCelsiusTempSecond = "51.8";
      const mockCelsiusTempThird = "32.0";
      const firstOutput = helperFunction.convertToCelsius(mockCelsiusTempFirst);
      const secondOutput = helperFunction.convertToCelsius(
        mockCelsiusTempSecond
      );
      const thirdOutput = helperFunction.convertToCelsius(mockCelsiusTempThird);
      expect(firstOutput).toBe("23");
      expect(secondOutput).toBe("11");
      expect(thirdOutput).toBe("0");
    });
    test("convertToCelsius should return undefined if empty/null/undefined/not a string given", () => {
      const mockCelsiusTempFirst = undefined;
      const mockCelsiusTempSecond = null;
      const mockCelsiusTempThird = "    ";
      const mockCelsiusTempFourth = 154;
      const firstOutput = helperFunction.convertToCelsius(mockCelsiusTempFirst);
      const secondOutput = helperFunction.convertToCelsius(
        mockCelsiusTempSecond
      );
      const thirdOutput = helperFunction.convertToCelsius(mockCelsiusTempThird);
      const fourthOutput = helperFunction.convertToCelsius(
        mockCelsiusTempFourth
      );
      expect(firstOutput).toBe(undefined);
      expect(secondOutput).toBe(undefined);
      expect(thirdOutput).toBe(undefined);
      expect(fourthOutput).toBe(undefined);
    });
  });
  describe("changeBoxStyles function tests", () => {
    test("Should elements display property changed to none,flex,flex ", () => {
      const firstDiv = document.createElement("div");
      const secondDiv = document.createElement("div");
      const thirdDiv = document.createElement("div");

      helperFunction.changeBoxStyles(firstDiv, secondDiv, thirdDiv);

      expect(firstDiv.style.display).toBe("none");
      expect(secondDiv.style.display).toBe("flex");
      expect(thirdDiv.style.display).toBe("flex");
    });
    test("Should return undefined if at least 1 element is not given", () => {
      const firstDiv = undefined;
      const secondDiv = document.createElement("div");
      const thirdDiv = 10;

      helperFunction.changeBoxStyles(firstDiv, secondDiv, thirdDiv);
      expect(secondDiv.style.display).not.toBe("flex");
    });
  });
  describe("createSaveObject function tests", () => {
    test("Should return correct object by given args", () => {
      const mockHourFormat = "h24";
      const mockTempUnit = "fahrenheit";
      const mockLocation = "Vilnius";

      const saveObject = helperFunction.createSaveObject(
        mockHourFormat,
        mockTempUnit,
        mockLocation
      );

      expect(saveObject.hourFormat).toBe("h24");
      expect(saveObject.temperatureUnit).toBe("fahrenheit");
      expect(saveObject.location).toBe("Vilnius");
    });
    test("Should return undefined if at least one arg empty/null/undefined", () => {
      const mockHourFormat = "h24";
      let mockTempUnit;
      const mockLocation = "Vilnius";

      const saveObject = helperFunction.createSaveObject(
        mockHourFormat,
        mockTempUnit,
        mockLocation
      );
      expect(saveObject).toBe(undefined);
    });
  });
  describe("saveDataObject function tests", () => {
    test("Should save object correctly", () => {
      const mockedSaveObject = {
        hourFormat: "h24",
        temperatureUnit: "fahrenheit",
        location: "Kaunas",
      };
      helperFunction.saveDataObject(mockedSaveObject);
      const savedData = JSON.parse(localStorage.getItem("settings"));
      expect(savedData.location).toBe("Kaunas");
      expect(savedData.hourFormat).toBe("h24");
      expect(savedData.temperatureUnit).toBe("fahrenheit");
    });
    test("Should return undefined if no data was given", () => {
      const mockedSaveObject = null;
      const mockedSaveObjectSecond = 10;

      const firstOutput = helperFunction.saveDataObject(mockedSaveObject);
      const secondOutput = helperFunction.saveDataObject(
        mockedSaveObjectSecond
      );

      expect(firstOutput).toBe(undefined);
      expect(secondOutput).toBe(undefined);
    });
  });
});
