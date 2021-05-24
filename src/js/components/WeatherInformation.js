export function WeatherInformation(el) {
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
            <div
              class="
                city-weather-daily-item
                d-flex
                flex-column
                justify-content-center
                align-items-center
              "
            >
              <h4>Apr, 29</h4>
              <svg
                width="172"
                height="166"
                viewBox="0 0 172 166"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <path
                    d="M86 90C81.2261 90 76.6477 88.1036 73.2721 84.7279C69.8964 81.3523 68 76.7739 68 72C68 67.2261 69.8964 62.6477 73.2721 59.2721C76.6477 55.8964 81.2261 54 86 54C90.7739 54 95.3523 55.8964 98.7279 59.2721C102.104 62.6477 104 67.2261 104 72C104 76.7739 102.104 81.3523 98.7279 84.7279C95.3523 88.1036 90.7739 90 86 90ZM83 39H89V48H83V39ZM83 96H89V105H83V96ZM60.545 50.787L64.787 46.545L71.15 52.908L66.908 57.15L60.545 50.79V50.787ZM100.85 91.092L105.092 86.85L111.455 93.213L107.213 97.455L100.85 91.092ZM107.213 46.542L111.455 50.787L105.092 57.15L100.85 52.908L107.213 46.545V46.542ZM66.908 86.85L71.15 91.092L64.787 97.455L60.545 93.213L66.908 86.85ZM119 69V75H110V69H119ZM62 69V75H53V69H62Z"
                    fill="url(#paint0_linear)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="-3"
                    y="-3"
                    width="178"
                    height="178"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="14" />
                    <feGaussianBlur stdDeviation="26.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.65055 0 0 0 0 0.3975 0 0 0 0.47 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear"
                    x1="86"
                    y1="39"
                    x2="86"
                    y2="105"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFC93F" />
                    <stop offset="1" stop-color="#FF7715" />
                  </linearGradient>
                </defs>
              </svg>
              <div class="item-title">Mostly Sunny</div>
              <div class="item-temp-value">37 <sup>o</sup>C</div>
            </div>
            <div
              class="
                city-weather-daily-item
                d-flex
                flex-column
                justify-content-center
                align-items-center
              "
            >
              <h4>Apr, 29</h4>
              <svg
                width="172"
                height="166"
                viewBox="0 0 172 166"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <path
                    d="M86 90C81.2261 90 76.6477 88.1036 73.2721 84.7279C69.8964 81.3523 68 76.7739 68 72C68 67.2261 69.8964 62.6477 73.2721 59.2721C76.6477 55.8964 81.2261 54 86 54C90.7739 54 95.3523 55.8964 98.7279 59.2721C102.104 62.6477 104 67.2261 104 72C104 76.7739 102.104 81.3523 98.7279 84.7279C95.3523 88.1036 90.7739 90 86 90ZM83 39H89V48H83V39ZM83 96H89V105H83V96ZM60.545 50.787L64.787 46.545L71.15 52.908L66.908 57.15L60.545 50.79V50.787ZM100.85 91.092L105.092 86.85L111.455 93.213L107.213 97.455L100.85 91.092ZM107.213 46.542L111.455 50.787L105.092 57.15L100.85 52.908L107.213 46.545V46.542ZM66.908 86.85L71.15 91.092L64.787 97.455L60.545 93.213L66.908 86.85ZM119 69V75H110V69H119ZM62 69V75H53V69H62Z"
                    fill="url(#paint0_linear)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="-3"
                    y="-3"
                    width="178"
                    height="178"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="14" />
                    <feGaussianBlur stdDeviation="26.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.65055 0 0 0 0 0.3975 0 0 0 0.47 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear"
                    x1="86"
                    y1="39"
                    x2="86"
                    y2="105"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFC93F" />
                    <stop offset="1" stop-color="#FF7715" />
                  </linearGradient>
                </defs>
              </svg>
              <div class="item-title">Mostly Sunny</div>
              <div class="item-temp-value">37 <sup>o</sup>C</div>
            </div>
            <div
              class="
                city-weather-daily-item
                d-flex
                flex-column
                justify-content-center
                align-items-center
              "
            >
              <h4>Apr, 29</h4>
              <svg
                width="172"
                height="166"
                viewBox="0 0 172 166"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <path
                    d="M86 90C81.2261 90 76.6477 88.1036 73.2721 84.7279C69.8964 81.3523 68 76.7739 68 72C68 67.2261 69.8964 62.6477 73.2721 59.2721C76.6477 55.8964 81.2261 54 86 54C90.7739 54 95.3523 55.8964 98.7279 59.2721C102.104 62.6477 104 67.2261 104 72C104 76.7739 102.104 81.3523 98.7279 84.7279C95.3523 88.1036 90.7739 90 86 90ZM83 39H89V48H83V39ZM83 96H89V105H83V96ZM60.545 50.787L64.787 46.545L71.15 52.908L66.908 57.15L60.545 50.79V50.787ZM100.85 91.092L105.092 86.85L111.455 93.213L107.213 97.455L100.85 91.092ZM107.213 46.542L111.455 50.787L105.092 57.15L100.85 52.908L107.213 46.545V46.542ZM66.908 86.85L71.15 91.092L64.787 97.455L60.545 93.213L66.908 86.85ZM119 69V75H110V69H119ZM62 69V75H53V69H62Z"
                    fill="url(#paint0_linear)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="-3"
                    y="-3"
                    width="178"
                    height="178"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="14" />
                    <feGaussianBlur stdDeviation="26.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.65055 0 0 0 0 0.3975 0 0 0 0.47 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear"
                    x1="86"
                    y1="39"
                    x2="86"
                    y2="105"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFC93F" />
                    <stop offset="1" stop-color="#FF7715" />
                  </linearGradient>
                </defs>
              </svg>
              <div class="item-title">Mostly Sunny</div>
              <div class="item-temp-value">37 <sup>o</sup>C</div>
            </div>
            <div
              class="
                city-weather-daily-item
                d-flex
                flex-column
                justify-content-center
                align-items-center
              "
            >
              <h4>Apr, 29</h4>
              <svg
                width="172"
                height="166"
                viewBox="0 0 172 166"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <path
                    d="M86 90C81.2261 90 76.6477 88.1036 73.2721 84.7279C69.8964 81.3523 68 76.7739 68 72C68 67.2261 69.8964 62.6477 73.2721 59.2721C76.6477 55.8964 81.2261 54 86 54C90.7739 54 95.3523 55.8964 98.7279 59.2721C102.104 62.6477 104 67.2261 104 72C104 76.7739 102.104 81.3523 98.7279 84.7279C95.3523 88.1036 90.7739 90 86 90ZM83 39H89V48H83V39ZM83 96H89V105H83V96ZM60.545 50.787L64.787 46.545L71.15 52.908L66.908 57.15L60.545 50.79V50.787ZM100.85 91.092L105.092 86.85L111.455 93.213L107.213 97.455L100.85 91.092ZM107.213 46.542L111.455 50.787L105.092 57.15L100.85 52.908L107.213 46.545V46.542ZM66.908 86.85L71.15 91.092L64.787 97.455L60.545 93.213L66.908 86.85ZM119 69V75H110V69H119ZM62 69V75H53V69H62Z"
                    fill="url(#paint0_linear)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="-3"
                    y="-3"
                    width="178"
                    height="178"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="14" />
                    <feGaussianBlur stdDeviation="26.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.65055 0 0 0 0 0.3975 0 0 0 0.47 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear"
                    x1="86"
                    y1="39"
                    x2="86"
                    y2="105"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFC93F" />
                    <stop offset="1" stop-color="#FF7715" />
                  </linearGradient>
                </defs>
              </svg>
              <div class="item-title">Mostly Sunny</div>
              <div class="item-temp-value">37 <sup>o</sup>C</div>
            </div>
            <div
              class="
                city-weather-daily-item
                d-flex
                flex-column
                justify-content-center
                align-items-center
              "
            >
              <h4>Apr, 29</h4>
              <svg
                width="172"
                height="166"
                viewBox="0 0 172 166"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <path
                    d="M86 90C81.2261 90 76.6477 88.1036 73.2721 84.7279C69.8964 81.3523 68 76.7739 68 72C68 67.2261 69.8964 62.6477 73.2721 59.2721C76.6477 55.8964 81.2261 54 86 54C90.7739 54 95.3523 55.8964 98.7279 59.2721C102.104 62.6477 104 67.2261 104 72C104 76.7739 102.104 81.3523 98.7279 84.7279C95.3523 88.1036 90.7739 90 86 90ZM83 39H89V48H83V39ZM83 96H89V105H83V96ZM60.545 50.787L64.787 46.545L71.15 52.908L66.908 57.15L60.545 50.79V50.787ZM100.85 91.092L105.092 86.85L111.455 93.213L107.213 97.455L100.85 91.092ZM107.213 46.542L111.455 50.787L105.092 57.15L100.85 52.908L107.213 46.545V46.542ZM66.908 86.85L71.15 91.092L64.787 97.455L60.545 93.213L66.908 86.85ZM119 69V75H110V69H119ZM62 69V75H53V69H62Z"
                    fill="url(#paint0_linear)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="-3"
                    y="-3"
                    width="178"
                    height="178"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="14" />
                    <feGaussianBlur stdDeviation="26.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.65055 0 0 0 0 0.3975 0 0 0 0.47 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear"
                    x1="86"
                    y1="39"
                    x2="86"
                    y2="105"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFC93F" />
                    <stop offset="1" stop-color="#FF7715" />
                  </linearGradient>
                </defs>
              </svg>
              <div class="item-title">Mostly Sunny</div>
              <div class="item-temp-value">37 <sup>o</sup>C</div>
            </div>
            <div
              class="
                city-weather-daily-item
                d-flex
                flex-column
                justify-content-center
                align-items-center
              "
            >
              <h4>Apr, 29</h4>
              <svg
                width="172"
                height="166"
                viewBox="0 0 172 166"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <path
                    d="M86 90C81.2261 90 76.6477 88.1036 73.2721 84.7279C69.8964 81.3523 68 76.7739 68 72C68 67.2261 69.8964 62.6477 73.2721 59.2721C76.6477 55.8964 81.2261 54 86 54C90.7739 54 95.3523 55.8964 98.7279 59.2721C102.104 62.6477 104 67.2261 104 72C104 76.7739 102.104 81.3523 98.7279 84.7279C95.3523 88.1036 90.7739 90 86 90ZM83 39H89V48H83V39ZM83 96H89V105H83V96ZM60.545 50.787L64.787 46.545L71.15 52.908L66.908 57.15L60.545 50.79V50.787ZM100.85 91.092L105.092 86.85L111.455 93.213L107.213 97.455L100.85 91.092ZM107.213 46.542L111.455 50.787L105.092 57.15L100.85 52.908L107.213 46.545V46.542ZM66.908 86.85L71.15 91.092L64.787 97.455L60.545 93.213L66.908 86.85ZM119 69V75H110V69H119ZM62 69V75H53V69H62Z"
                    fill="url(#paint0_linear)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="-3"
                    y="-3"
                    width="178"
                    height="178"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="14" />
                    <feGaussianBlur stdDeviation="26.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.65055 0 0 0 0 0.3975 0 0 0 0.47 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear"
                    x1="86"
                    y1="39"
                    x2="86"
                    y2="105"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFC93F" />
                    <stop offset="1" stop-color="#FF7715" />
                  </linearGradient>
                </defs>
              </svg>
              <div class="item-title">Mostly Sunny</div>
              <div class="item-temp-value">37 <sup>o</sup>C</div>
            </div>
            <div
              class="
                city-weather-daily-item
                d-flex
                flex-column
                justify-content-center
                align-items-center
              "
            >
              <h4>Apr, 29</h4>
              <svg
                width="172"
                height="166"
                viewBox="0 0 172 166"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <path
                    d="M86 90C81.2261 90 76.6477 88.1036 73.2721 84.7279C69.8964 81.3523 68 76.7739 68 72C68 67.2261 69.8964 62.6477 73.2721 59.2721C76.6477 55.8964 81.2261 54 86 54C90.7739 54 95.3523 55.8964 98.7279 59.2721C102.104 62.6477 104 67.2261 104 72C104 76.7739 102.104 81.3523 98.7279 84.7279C95.3523 88.1036 90.7739 90 86 90ZM83 39H89V48H83V39ZM83 96H89V105H83V96ZM60.545 50.787L64.787 46.545L71.15 52.908L66.908 57.15L60.545 50.79V50.787ZM100.85 91.092L105.092 86.85L111.455 93.213L107.213 97.455L100.85 91.092ZM107.213 46.542L111.455 50.787L105.092 57.15L100.85 52.908L107.213 46.545V46.542ZM66.908 86.85L71.15 91.092L64.787 97.455L60.545 93.213L66.908 86.85ZM119 69V75H110V69H119ZM62 69V75H53V69H62Z"
                    fill="url(#paint0_linear)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="-3"
                    y="-3"
                    width="178"
                    height="178"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="14" />
                    <feGaussianBlur stdDeviation="26.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.65055 0 0 0 0 0.3975 0 0 0 0.47 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear"
                    x1="86"
                    y1="39"
                    x2="86"
                    y2="105"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFC93F" />
                    <stop offset="1" stop-color="#FF7715" />
                  </linearGradient>
                </defs>
              </svg>
              <div class="item-title">Mostly Sunny</div>
              <div class="item-temp-value">37 <sup>o</sup>C</div>
            </div>
          </div>
        </section>
`
  );
}
