export function apiGetHistory() {
  return (
    localStorage.getItem('cities') ?? JSON.parse(localStorage.getItem('cities'))
  );
}

export function apiSetHistory(city) {
  const cities = JSON.parse(localStorage.getItem('cities')) ?? [];

  if (!cities.includes(city)) {
    cities.push(city);
    localStorage.setItem('cities', JSON.stringify(cities));
  }

  return cities;
}
