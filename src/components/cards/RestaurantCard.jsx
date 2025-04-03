import React from "react";

export default function RestaurantCard({ image, title, description }) {
  return (
    <>
      <a href="restaurantpage">
        <div className="w-[611px] h-[225px] flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:ring-hover-primary hover:ring-2 hover:scale-101 transform transition duration-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="w-auto h-[225px] object-cover rounded-t-lg md:rounded-none md:rounded-s-lg "
            src={image}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="font-kh font-bold tracking-tight text-gray-900 dark:text-white mb-[8px]">
              {title}
            </h5>
            <small className="mb-3 font-kh text-[16px] font-normal text-gray-400 dark:text-gray-400">
              {description}
            </small>
            <hr className="text-gray-400 mt-[28px]" />
          </div>
        </div>
      </a>
    </> 
  );
}
