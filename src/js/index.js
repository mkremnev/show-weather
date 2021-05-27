import { getWeatherCurrent } from '@/js/api/apiGetWeatherCurrent';
import { getWeatherDaily } from '@/js/api/apiGetWeatherDaily';
import { apiGetGeoLocation } from '@/js/api/apiGetGeoLocation';
import { render } from '@/js/render';
import { apiGetHistory, apiSetHistory } from '@/js/api/apiLocalStorage';

const cityData = {
  name: '',
  current: {},
  daily: {},
  history: [],

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
};

export async function init() {
  const container = document.querySelector('#app').querySelector('.container');

  await cityData.setName();
  await cityData.setCurrent();
  await cityData.setDaily();
  cityData.getHistory();

  render(container, cityData);
  subscribers();
}

export function subscribers() {
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
    await subscribers();
  });

  buttons.forEach((button) => {
    button.addEventListener('click', async (ev) => {
      const nameCity = ev.target.innerText;
      await cityData.setName(nameCity);
      await cityData.setCurrent();
      await cityData.setDaily();
      render(container, cityData);
      await subscribers();
    });
  });
}

init();
