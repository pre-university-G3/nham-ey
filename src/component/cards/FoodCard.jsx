"use client";

export default function FoodCard({ id, image_url, name, description, price, average_rating }) {
  return (
    <a href="#">
      <div className="w-[400px] h-[419px] bg-white dark:bg-gray-600 rounded-xl shadow-sm box-border hover:ring-2 hover:ring-primary hover:scale-101 transform transition duration-200">
        
        {/* Image Section */}
        <div className="relative px-[20px] py-[20px] bg-[#fafaf9] dark:bg-gray-700 rounded-t-xl">
          <img
            className="w-[362px] h-[203px] object-cover rounded-t-lg"
            src={image_url}
            alt={name}
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-[24px] font-bold text-[#494949] dark:text-gray-100 font-kh line-clamp-1">
            {name}
          </h3>
          <small className="text-sm text-gray-600 dark:text-gray-300 mt-1 text-[16px] line-clamp-3 leading-[18px]">
            {description}
          </small>

          {/* Price + Rating */}
          <div className="flex items-center justify-between mt-3">
            <span className="text-[#5B913B] dark:text-green-400 font-bold font-kh text-[24px]">
              ${price}
            </span>

            <div className="flex items-center">
              <svg
                className="w-[26px] h-[26px] text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ms-2 text-[20px] font-kh font-bold text-gray-900 dark:text-white">
                {average_rating ? average_rating.toFixed(1) : "No rating"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
