export function CityInformation(el, city) {
  const month = [
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

  el.insertAdjacentHTML(
    'beforeend',
    `
          <section
          class="
            city-information
            d-flex
            flex-row
            justify-content-around
            align-items-center
          "
        >
          <div class="city-information-precipValue">
            <img src="http://openweathermap.org/img/wn/${
              city?.weather[0].icon
            }@2x.png" alt="${city?.weather.description}">
            <div>${city?.weather[0].description}</div>
            <div>${month[new Date(city?.dt * 1000).getMonth()]}, ${new Date(
      city?.dt * 1000
    ).getDate()}</div>
          </div>
          <div class="city-information-tempValue">
            <div class="temp-value">${Math.floor(city?.main.temp)}</div>
            <div class="temp-value-degree"><sup>0</sup>C</div>
          </div>
        </section>
`
  );
}
