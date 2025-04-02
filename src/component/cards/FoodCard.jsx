export default function Card2({ image, title, subtitle, price, rate }) {
    return (
      <>
        <a href="">
          <div className="w-[400px] h-[419px] bg-white rounded-2xl shadow-sm box-border">
            <div className="relative px-[20px] py-[20px] bg-[#fafaf9]">
              <img
                className="w-[362px] h-[203px] object-cover rounded-t-lg"
                src={image}
                alt="Somlor proher"
              />
              <button className="absolute top-8 right-8 p-2 rounded-full shadow-md bg-white/20 backdrop-blur-[px]">
                {/* <Heart className="text-gray-500" size={20} /> */}
                <svg
                  width="24"
                  height="21"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.9947 2.52803L22.995 2.52828C26.1613 5.23076 26.3258 10.0741 23.4889 13.0017C23.4889 13.0018 23.4889 13.0018 23.4888 13.0018L14.4186 22.3674L14.4185 22.3675C13.6361 23.1749 12.3593 23.1749 11.5769 22.3675L11.5769 22.3674L2.50654 13.0017L2.50633 13.0015C-0.325578 10.0739 -0.161147 5.23074 3.00518 2.52828L3.00547 2.52803C5.79804 0.148225 9.92099 0.598474 12.4358 3.19824C12.4359 3.19831 12.436 3.19839 12.436 3.19847L13.0001 3.77969L13.5645 3.19811L22.9947 2.52803ZM22.9947 2.52803C20.2019 0.148059 16.0839 0.598764 13.5647 3.19788L22.9947 2.52803Z"
                    fill="#FAFAF9"
                    stroke="#5B913B"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-[24px] font-bold text-[#494949] font-kh line-clamp-1">{title}</h3>
              <small className="text-sm text-gray-600 mt-1 text-[16px] line-clamp-3 leading-[18px]">
                {subtitle}
              </small>
              
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[#5B913B] font-bold font-kh text-[24px]">
                    ${price}
                  </span>
                  <div class="flex items-center​ ">
                  {/* Star*/}
                    <svg
                      class="w-[26px] h-[26px] text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p class="ms-2 text-[20px] font-kh font-bold text-gray-900 dark:text-white">
                      {rate}
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </a>
      </>
    );
  }
  