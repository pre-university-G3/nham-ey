import React from "react";

export default function ResturantCard({ image_url, name , description }) {
  return (
      <>
    <a href="resturantpage">

    <div className="w-[611px] h-[225px] flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-sm md:max-w-xl hover:bg-gray-100 ">
      <img 
        className="w-[240px] h-[225px] object-cover border-gray-200 border rounded-t-lg md:rounded-none md:rounded-s-lg" 
        src={image_url}
        />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="font-kh font-bold tracking-tight text-gray-900 mb-[8px]">
          {name}
        </h5>
        <small className="mb-3 font-kh text-[16px] font-normal text-gray-400 ">
          {description}
        </small>
        <hr className="text-gray-400 mt-[28px]" />
      </div>
    </div>
    </a>
    </>
  );
}