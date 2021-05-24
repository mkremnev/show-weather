import { Header } from '@/js/components/Hedaer';
import { CityInformation } from '@/js/components/CityInformation';
import { WeatherInformation } from '@/js/components/WeatherInformation';

let dataCurrent = await fetch(
  'http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=27630985fa06ce7c1174dbe167b6eedd'
).then((res) => res.json());

console.log(dataCurrent);
export function init() {
  const el = document.querySelector('#app').querySelector('.container');
  Header(el);
  CityInformation(el);
  WeatherInformation(el);
}

init();
