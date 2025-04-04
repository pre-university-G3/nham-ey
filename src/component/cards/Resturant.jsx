import React from "react";

export default function Resturant({ image, title, description }) {
  return (
    <div className="w-[611px]">
      <a href="resturantpage">
        <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-sm w-[611px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-hidden">
          <img
            className="w-[240px] h-[223px] object-cover rounded-t-lg md:rounded-none md:rounded-s-lg"
            src={image}
            alt="Card Image"
          />
          <div className="flex flex-col justify-between p-4 w-[371px]">
            <h5 className="font-kh text-[20px] font-bold tracking-tight text-[#333333] dark:text-white mb-[6px]">
              {title}
            </h5>
            <small className="mb-3 font-kh text-[16px] text-[#333333] dark:text-gray-400​ line-clamp-3">
              {description}
            </small>
            <hr className="text-gray-400 mt-[28px]" />
          </div>
        </div>
      </a>
    </div>
  );
}
