import { getWeatherCurrent } from '@/js/api/apiGetWeatherCurrent';
import { getWeatherDaily } from '@/js/api/apiGetWeatherDaily';
import { apiGetGeoLocation } from '@/js/api/apiGetGeoLocation';
import { render } from '@/js/render';
import { apiGetHistory, apiSetHistory } from '@/js/api/apiLocalStorage';
import { apiYandexMap, createMap } from '@/js/api/apiYandexMap';

const cityData = {
  name: '',
  current: {},
  daily: {},
  history: [],
  map: {},

  async setCurrent() {
    this.current = await getWeatherCurrent(this.name);
  },

  async setDaily() {
    this.daily = await getWeatherDaily(this.current);
  },

  async setName(name) {
    if (name !== undefined) {
      this.name = name;
    } else {
      this.name =
        (await apiGetGeoLocation().then((res) => res.city)) || 'Moscow';
    }
  },

  setHistory(city) {
    this.history = apiSetHistory(city);
  },

  getHistory() {
    this.history = apiGetHistory();
  },

  renderMap(state) {
    this.map = createMap(state);
  },

  setCenterMap(coords) {
    this.map.setCenter(coords);
  },
};

export async function init() {
  const container = document.querySelector('#app').querySelector('.container');

  await cityData.setName();
  await cityData.setCurrent();
  await cityData.setDaily();
  await apiYandexMap();
  cityData.getHistory();

  await render(container, cityData);

  cityData.renderMap({
    center: [cityData.current.coord.lat, cityData.current.coord.lon],
    zoom: 10,
  });

  await subscribers();
}

export async function subscribers() {
  const container = document.querySelector('#app').querySelector('.container');
  const form = container.querySelector('form');
  const input = container.querySelector('input');
  const buttons = container.querySelectorAll('.cities-submenu button');

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const nameCity = input.value;
    await cityData.setName(nameCity);
    await cityData.setCurrent();
    await cityData.setDaily();
    cityData.setHistory(nameCity);
    render(container, cityData);
    cityData.setCenterMap([
      cityData.current.coord.lat,
      cityData.current.coord.lon,
    ]);
    await subscribers();
  });

  buttons.forEach((button) => {
    button.addEventListener('click', async (ev) => {
      const nameCity = ev.target.innerText;
      await cityData.setName(nameCity);
      await cityData.setCurrent();
      await cityData.setDaily();
      render(container, cityData);
      cityData.setCenterMap([
        cityData.current.coord.lat,
        cityData.current.coord.lon,
      ]);
      await subscribers();
    });
  });
}

init().then(() => console.log('App running'));
