import { CityInformation } from '@/js/components/CityInformation';

describe('Testing component CityInformation rendering', () => {
  let obj;
  let app;
  let month;

  beforeEach(() => {
    app = document.createElement('div');
    month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    obj = {
      coord: { lon: -82.6695, lat: 27.7704 },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      base: 'stations',
      main: {
        temp: 23.5,
        feels_like: 23.92,
        temp_min: 20.53,
        temp_max: 25,
        pressure: 1017,
        humidity: 77,
      },
      visibility: 10000,
      wind: { speed: 0.45, deg: 320, gust: 1.34 },
      clouds: { all: 40 },
      dt: 1622182787,
      sys: {
        type: 2,
        id: 2036225,
        country: 'US',
        sunrise: 1622198165,
        sunset: 1622247616,
      },
      timezone: -14400,
      id: 4168618,
      name: 'Saint Petersburg',
      cod: 200,
    };
  });

  it('should render the component with correct data', () => {
    CityInformation(app, obj);
    const info = app.querySelector('.city-information-precipValue');
    const img = info.querySelector('img');
    const divInfo = info.querySelectorAll('div');
    const infoTemp = app.querySelector('.city-information-tempValue');
    const divTemp = infoTemp.querySelectorAll('div');
    expect(img.src).toBe('http://openweathermap.org/img/wn/03n@2x.png');
    expect(divInfo.item(0).textContent.toLowerCase()).toBe('scattered clouds');
    expect(divInfo.item(1).textContent.toLowerCase()).toBe(
      `${month[new Date(obj?.dt * 1000).getMonth()].toLowerCase()}, ${new Date(
        obj?.dt * 1000
      ).getDate()}`
    );
    expect(divTemp.item(0).textContent).toBe(String(Math.floor(obj.main.temp)));
  });
});
