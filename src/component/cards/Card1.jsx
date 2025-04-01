import React from "react";

export default function Card1({ image, title, subtitle }) {
  return (
      <>
    <a href="resturantpage">

    <div className="w-[611px] h-[225px] flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-sm md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img 
        className="w-[240px] h-[225px] object-cover rounded-t-lg md:rounded-none md:rounded-s-lg" 
        src={image}
        />
        

      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="font-kh font-bold tracking-tight text-gray-900 dark:text-white mb-[8px]">
          {title}
        </h5>
        <small className="mb-3 font-kh text-[16px] font-normal text-gray-400 dark:text-gray-400">
          {subtitle}
        </small>
        <hr className="text-gray-400 mt-[28px]" />
      </div>
    </div>
    </a>
    </>
  );
}
