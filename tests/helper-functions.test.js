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
  describe("convertToAmPm function tests", () => {});
});
