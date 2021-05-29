import { Header } from '@/js/components/Hedaer';
import { CityInformation } from '@/js/components/CityInformation';
import { WeatherInformation } from '@/js/components/WeatherInformation';

export function render(el, data) {
  el.innerHTML = '';
  const { name, current, daily, history } = data;
  Header(el, name, history);
  CityInformation(el, current);
  WeatherInformation(el, daily);
}