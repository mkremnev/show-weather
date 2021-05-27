import { getWeatherCurrent } from '@/js/api/apiGetWeatherCurrent';
import { getWeatherDaily } from '@/js/api/apiGetWeatherDaily';
import { apiGetGeoLocation } from '@/js/api/apiGetGeoLocation';
import { render } from '@/js/render';
import { apiSetHistory } from '@/js/api/apiLocalStorage';

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
    console.log(name);
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
};

export async function app() {
  const app = document.querySelector('#app');
  const container = document.createElement('div');
  container.classList.add('container');

  await cityData.setName();
  await cityData.setCurrent();
  await cityData.setDaily();

  render(container, cityData);
  app.append(container);

  const form = app.querySelector('form');
  const input = app.querySelector('input');
  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const nameCity = input.value;
    await cityData.setName(nameCity);
    await cityData.setCurrent();
    await cityData.setDaily();
    render(container, cityData);
  });
}

app();
