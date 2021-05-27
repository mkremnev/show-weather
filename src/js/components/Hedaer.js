export function Header(el, city, cities) {
  el.insertAdjacentHTML(
    'afterbegin',
    `
          <header
          class="
            city-navigation
            d-flex
            flex-wrap
            justify-content-between
            align-items-center
          "
        >
          <div class="icon-city">
            <svg
              width="69"
              height="69"
              viewBox="0 0 69 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.7">
                <path
                  d="M8.625 54.625V16.3875C8.62482 15.7973 8.80627 15.2214 9.14471 14.7379C9.48314 14.2544 9.96217 13.8868 10.5167 13.685L38.3209 3.57649C38.5381 3.49744 38.7711 3.47193 39.0003 3.50212C39.2294 3.53231 39.4479 3.61731 39.6372 3.74991C39.8265 3.88251 39.981 4.0588 40.0877 4.26384C40.1944 4.46887 40.2501 4.69661 40.25 4.92774V19.1676L58.4085 25.2195C58.9812 25.4102 59.4794 25.7764 59.8323 26.2661C60.1853 26.7558 60.3751 27.3442 60.375 27.9479V54.625H66.125V60.375H2.875V54.625H8.625ZM14.375 54.625H34.5V11.0831L14.375 18.4029V54.625ZM54.625 54.625V30.0207L40.25 25.2281V54.625H54.625Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </g>
            </svg>
          </div>
          <div class="title-wrapper">
            <h1 class="city-title text-center">${city}</h1>
            <div class="cities-submenu"></div>
          </div>
          <button type="button" class="btn-city">
            <svg
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.7">
                <path
                  d="M35 8.75C31.7916 8.75 29.1666 11.375 29.1666 14.5833C29.1666 17.7917 31.7916 20.4167 35 20.4167C38.2083 20.4167 40.8333 17.7917 40.8333 14.5833C40.8333 11.375 38.2083 8.75 35 8.75ZM35 49.5833C31.7916 49.5833 29.1666 52.2083 29.1666 55.4167C29.1666 58.625 31.7916 61.25 35 61.25C38.2083 61.25 40.8333 58.625 40.8333 55.4167C40.8333 52.2083 38.2083 49.5833 35 49.5833ZM35 29.1667C31.7916 29.1667 29.1666 31.7917 29.1666 35C29.1666 38.2083 31.7916 40.8333 35 40.8333C38.2083 40.8333 40.8333 38.2083 40.8333 35C40.8333 31.7917 38.2083 29.1667 35 29.1667Z"
                  fill="white"
                />
              </g>
            </svg>
          </button>
        </header>
`
  );

  el.insertAdjacentHTML(
    'beforeend',
    `
  <div class="modal-city-container">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
          <h5 class="modal-title">Show Weather</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form class="d-flex flex-column justify-content-center p-4 ">
          <div class="mb-3">    
            <label for="city" class="form-label">Введите название города</label>
            <input class="city-input form-control" name="city" type="text" />
          </div>
          <button type="submit" class="btn btn-primary">Найти</button>
        </form>
      </div>
    </div>
  </div>
  </div>
  `
  );

  // blocks
  const submenu = el.querySelector('.cities-submenu');
  const button = el.querySelector('.btn-city');
  const modal = el.querySelector('.modal-city-container');
  const btnClose = modal.querySelector('.btn-close');

  //logic
  const changeShowModal = () => {
    modal.classList.toggle('show');
  };

  cities.length
    ? cities.map((city) => {
        submenu.insertAdjacentHTML(
          'afterbegin',
          `
    <button class="btn btn-danger btn-cities">${city}</button>
  `
        );
      })
    : (submenu.innerText = 'Список пуст');

  // subscribe
  button.addEventListener('click', changeShowModal);
  btnClose.addEventListener('click', () => {
    modal.classList.remove('show');
  });
}
