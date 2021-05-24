export function CityInformation(el) {
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
            <div>Mostly sunny</div>
            <div>Friday, 30 April</div>
          </div>
          <div class="city-information-tempValue">
            <div class="temp-value">40</div>
            <div class="temp-value-degree"><sup>0</sup>C</div>
          </div>
        </section>
`
  );
}
