import { WeatherInformation } from '@/js/components/WeatherInformation';

describe('Testing component WeatherInformation rendering', () => {
  let obj;
  let app;

  beforeEach(() => {
    app = document.createElement('div');
    obj = {
      lat: 27.7704,
      lon: -82.6695,
      timezone: 'America/New_York',
      timezone_offset: -14400,
      current: {
        dt: 1622289794,
        sunrise: 1622284549,
        sunset: 1622334047,
        temp: 24.18,
        feels_like: 24.79,
        pressure: 1014,
        humidity: 82,
        dew_point: 20.91,
        uvi: 0.58,
        clouds: 1,
        visibility: 10000,
        wind_speed: 0.89,
        wind_deg: 165,
        wind_gust: 2.24,
        weather: [
          { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
        ],
      },
      daily: [
        {
          dt: 1622307600,
          sunrise: 1622284549,
          sunset: 1622334047,
          moonrise: 0,
          moonset: 1622295540,
          moon_phase: 0.62,
          temp: {
            day: 26.51,
            min: 24.18,
            max: 26.59,
            night: 25.69,
            eve: 26.47,
            morn: 24.22,
          },
          feels_like: { day: 26.51, night: 26.27, eve: 26.47, morn: 24.79 },
          pressure: 1014,
          humidity: 65,
          dew_point: 19.26,
          wind_speed: 6.6,
          wind_deg: 236,
          wind_gust: 6.3,
          weather: [
            { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
          ],
          clouds: 0,
          pop: 0.06,
          uvi: 11.01,
        },
        {
          dt: 1622394000,
          sunrise: 1622370935,
          sunset: 1622420478,
          moonrise: 1622347620,
          moonset: 1622385840,
          moon_phase: 0.66,
          temp: {
            day: 26.77,
            min: 24.75,
            max: 27.17,
            night: 25.53,
            eve: 27.02,
            morn: 25.14,
          },
          feels_like: { day: 28.19, night: 25.81, eve: 28.56, morn: 25.64 },
          pressure: 1016,
          humidity: 66,
          dew_point: 19.75,
          wind_speed: 5.56,
          wind_deg: 260,
          wind_gust: 6,
          weather: [
            { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
          ],
          clouds: 100,
          pop: 0.98,
          rain: 2.12,
          uvi: 9.06,
        },
        {
          dt: 1622480400,
          sunrise: 1622457321,
          sunset: 1622506909,
          moonrise: 1622436900,
          moonset: 1622476080,
          moon_phase: 0.69,
          temp: {
            day: 29.1,
            min: 23.46,
            max: 30.19,
            night: 25,
            eve: 26.1,
            morn: 23.57,
          },
          feels_like: { day: 30.6, night: 25.51, eve: 26.1, morn: 23.89 },
          pressure: 1020,
          humidity: 56,
          dew_point: 19.29,
          wind_speed: 5.25,
          wind_deg: 222,
          wind_gust: 6.62,
          weather: [
            {
              id: 501,
              main: 'Rain',
              description: 'moderate rain',
              icon: '10d',
            },
          ],
          clouds: 45,
          pop: 0.94,
          rain: 5.22,
          uvi: 9.76,
        },
        {
          dt: 1622566800,
          sunrise: 1622543710,
          sunset: 1622593338,
          moonrise: 1622525820,
          moonset: 1622566080,
          moon_phase: 0.73,
          temp: {
            day: 30.56,
            min: 23.78,
            max: 30.56,
            night: 26.08,
            eve: 27.18,
            morn: 24.2,
          },
          feels_like: { day: 31.91, night: 26.08, eve: 28.55, morn: 24.82 },
          pressure: 1019,
          humidity: 50,
          dew_point: 18.74,
          wind_speed: 8.8,
          wind_deg: 94,
          wind_gust: 11.12,
          weather: [
            { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
          ],
          clouds: 1,
          pop: 0.88,
          rain: 1.43,
          uvi: 11.31,
        },
        {
          dt: 1622653200,
          sunrise: 1622630099,
          sunset: 1622679768,
          moonrise: 1622614380,
          moonset: 1622655960,
          moon_phase: 0.75,
          temp: {
            day: 30.08,
            min: 23.79,
            max: 30.08,
            night: 25.69,
            eve: 24.49,
            morn: 24,
          },
          feels_like: { day: 31.84, night: 26.27, eve: 25.16, morn: 24.65 },
          pressure: 1017,
          humidity: 54,
          dew_point: 19.41,
          wind_speed: 6.09,
          wind_deg: 91,
          wind_gust: 8.2,
          weather: [
            {
              id: 501,
              main: 'Rain',
              description: 'moderate rain',
              icon: '10d',
            },
          ],
          clouds: 37,
          pop: 1,
          rain: 10.06,
          uvi: 0.57,
        },
        {
          dt: 1622739600,
          sunrise: 1622716490,
          sunset: 1622766196,
          moonrise: 1622702700,
          moonset: 1622745600,
          moon_phase: 0.79,
          temp: {
            day: 28.63,
            min: 24.4,
            max: 28.63,
            night: 25.05,
            eve: 27.08,
            morn: 24.52,
          },
          feels_like: { day: 31.14, night: 25.75, eve: 28.99, morn: 25.19 },
          pressure: 1016,
          humidity: 65,
          dew_point: 21.14,
          wind_speed: 7.22,
          wind_deg: 114,
          wind_gust: 10.53,
          weather: [
            { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
          ],
          clouds: 14,
          pop: 1,
          rain: 5.72,
          uvi: 1,
        },
        {
          dt: 1622826000,
          sunrise: 1622802882,
          sunset: 1622852624,
          moonrise: 1622790960,
          moonset: 1622835180,
          moon_phase: 0.82,
          temp: {
            day: 28.05,
            min: 25.05,
            max: 28.05,
            night: 26.46,
            eve: 27.28,
            morn: 25.07,
          },
          feels_like: { day: 30.63, night: 26.46, eve: 29.43, morn: 25.75 },
          pressure: 1017,
          humidity: 69,
          dew_point: 21.73,
          wind_speed: 5.49,
          wind_deg: 235,
          wind_gust: 6.79,
          weather: [
            { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
          ],
          clouds: 60,
          pop: 1,
          rain: 2.98,
          uvi: 1,
        },
        {
          dt: 1622912400,
          sunrise: 1622889275,
          sunset: 1622939051,
          moonrise: 1622879100,
          moonset: 1622924700,
          moon_phase: 0.85,
          temp: {
            day: 28.34,
            min: 25.88,
            max: 28.68,
            night: 27.64,
            eve: 28.09,
            morn: 25.88,
          },
          feels_like: { day: 30.76, night: 30.1, eve: 30.71, morn: 26.53 },
          pressure: 1017,
          humidity: 66,
          dew_point: 21.32,
          wind_speed: 5.32,
          wind_deg: 268,
          wind_gust: 4.55,
          weather: [
            { id: 500, main: 'Rain', description: 'light rain', icon: '10d' },
          ],
          clouds: 23,
          pop: 0.73,
          rain: 2.34,
          uvi: 1,
        },
      ],
    };
  });

  it('should render the component with correct data', () => {
    WeatherInformation(app, obj);
    const wrapper = app.querySelector('.city-weather-daily-wrapper');
    const divCities = wrapper.querySelectorAll('.city-weather-daily-item');
    expect(divCities.length).toBe(7);
    divCities.forEach((el, i) => {
      expect(el.querySelector('img').src.trim()).toBe(
        `http://openweathermap.org/img/wn/${
          obj.daily[i + 1].weather[0].icon
        }@2x.png`
      );
      expect(el.querySelector('.item-title').textContent).toBe(
        obj.daily[i + 1].weather[0].description
      );
      expect(el.querySelector('.item-temp-value').textContent).toBe(
        `${Math.floor(obj.daily[i + 1].temp.day)} oC`
      );
    });
  });
});
