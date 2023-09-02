import * as helperFunction from "../scripts/helper-functions.script";

describe("Helper functions tests", () => {
  describe("makeWeatherDescriptionAndBackground function tests", () => {
    test("Should return correct object", () => {
      const mockWeatherCode = 1;
      const mockScreenWidth = 790;
      const data = helperFunction.makeWeatherDescriptionAndBackground(
        mockWeatherCode,
        mockScreenWidth
      );
      expect(data.description).toBe("Sky is mainly clear");
      expect(data.background).toBe("assets/clear-img.jpg");
    });
  });
});
