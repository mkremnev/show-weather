export function WeatherInformation(el, city) {
  el.insertAdjacentHTML(
    'beforeend',
    `
          <section class="city-weather-daily">
          <h3>7-Day weather report</h3>
          <div
            class="
              city-weather-daily-wrapper
              d-flex
              flex-row
              justify-content-start
            "
          >          
          </div>
        </section>
`
  );

  const wrapper = el.querySelector('.city-weather-daily-wrapper');
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  city.daily.map((item, i) => {
    if (i > 0) {
      wrapper.insertAdjacentHTML(
        'beforeend',
        `
  <div class="city-weather-daily-item d-flex flex-column justify-content-between align-items-center">
    <h4>${month[new Date(item.dt * 1000).getMonth()]}, ${new Date(
          item.dt * 1000
        ).getDate()}</h4>
    <img src="http://openweathermap.org/img/wn/${
      item?.weather[0].icon
    }@2x.png" alt="${item?.weather[0].description}">
    <div class="item-title">${item?.weather[0].description}</div>
    <div class="item-temp-value">${Math.floor(
      item?.temp.day
    )} <sup>o</sup>C</div>
  </div>
`
      );
    }
  });
}
