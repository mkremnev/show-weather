import { Header } from '@/js/components/Hedaer';

describe('Testing render header', () => {
  let obj;
  let app;

  beforeEach(() => {
    app = document.createElement('div');
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
    Header(app, obj.name, []);
    const title = app.querySelector('.city-title.text-center');
    const submenu = app.querySelector('.cities-submenu');
    expect(title.textContent).toBe('Saint Petersburg');
    expect(submenu.textContent).toBe('');
  });

  it('should render the component with correct data with input cities', () => {
    Header(app, obj.name, ['Moscow']);
    const title = app.querySelector('.city-title.text-center');
    const submenu = app.querySelector('.cities-submenu');
    expect(title.textContent).toBe('Saint Petersburg');
    expect(submenu.textContent.trim()).toBe('Moscow');
  });

  it('the correct class should be added when the button is clicked ', () => {
    Header(app, obj.name, ['Moscow']);
    const button = app.querySelector('.btn-city');
    const modal = app.querySelector('.modal-city-container');
    button.addEventListener('click', (ev) => {
      ev.preventDefault();
      if (modal.classList.length === 2) {
        modal.classList.add('show');
      } else {
        modal.classList.remove('show');
      }
    });
    button.dispatchEvent(new Event('click'));
    expect(modal.className).toEqual('modal-city-container show');
  });

  it('the correct class should be added when the button is double clicked ', () => {
    Header(app, obj.name, ['Moscow']);
    const button = app.querySelector('.btn-city');
    const modal = app.querySelector('.modal-city-container');
    button.addEventListener('click', (ev) => {
      ev.preventDefault();
      if (modal.classList.length === 2) {
        modal.classList.add('show');
      } else {
        modal.classList.remove('show');
      }
    });
    button.dispatchEvent(new Event('click'));
    button.dispatchEvent(new Event('click'));
    expect(modal.className).toEqual('modal-city-container');
  });

  it('the correct class should be remove when the button close is clicked ', () => {
    Header(app, obj.name, ['Moscow']);
    const button = app.querySelector('.btn-city');
    const modal = app.querySelector('.modal-city-container');
    const btnClose = modal.querySelector('.btn-close');
    button.addEventListener('click', (ev) => {
      ev.preventDefault();
      if (modal.classList.length === 2) {
        modal.classList.add('show');
      } else {
        modal.classList.remove('show');
      }
    });
    btnClose.addEventListener('click', () => {
      modal.classList.remove('show');
    });
    button.dispatchEvent(new Event('click'));
    btnClose.dispatchEvent(new Event('click'));
    expect(modal.className).toEqual('modal-city-container');
  });
});
