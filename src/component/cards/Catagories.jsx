import React from "react";

export default function Catagories({ image, title}) {
  return (
    <button 
      className="w-[231px] h-[254px] bg-white rounded-2xl overflow-hidden border border-gray-200"
    >
      {/* Image Section */}
      <div className="w-[231px] h-[203px]">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={title}
        />
      </div>

      {/* Title Section */}
      <div className="p-3 bg-white h-[51px]">
        <h3 className="text-left font-semibold text-[16px] font-kh text-gray-700">{title}</h3>
      </div>
    </button>
  );
}
