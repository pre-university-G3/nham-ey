import React from "react";

export default function About (){
  return (
    <>
    <section>

    <div className="bg-gray-100">

    <div className="flex flex-wrap justify-between items-center  mx-[100px]">

      <div className=" text-center md:text-left">
        <h2 className="text-orange-500 font-bold text-2xl font-kh text-[36px]">
          ISTAD PRE-UNIVERSITY G3
        </h2>
        <h1 className="text-xl font-bold my-[30px] font-kh text-[32px] w-[609px]">
          We serve up the <span className="text-yellow-500">best food recommendations</span> for you
        </h1>
        <p className="text-[#9796A1] mt-4 leading-relaxed text-[22px] w-[694px]">
          Our team explores, tastes, and reviews to bring you the best restaurant recommendations. 
          Trust our recommendations for a delicious dining experience every time!
        </p>
        <button className="bg-[#77b254] text-white px-4 py-2 my-[30px] rounded-md flex items-center">
          Learn more ↓
        </button>
      </div>
      <div className="relative mt-6 md:mt-[100px]">
        <img src="/src/images/aboutlogo.png" alt="Food Bowl" className="rounded-lg object-contain w-[499px] h-[499px]" />
        <div className="absolute top-2 right-45 text-green-700 font-bold text-3xl">NHAM <span className="text-yellow-500">EY</span></div>
        <div className="absolute bottom-55 right-115 text-[#fbbf24] font-bold text-[32px]">TEAM</div>
      </div>
    </div>
      {/* OUR PURPOSE Section */}
      <div className="flex flex-col items-center justify-center py-12 bg-gray-100 pb-[130px]">
          <h2 className="text-green-700 font-bold text-xl md:text-2xl">OUR PURPOSE</h2>
          <div className="w-36 mt-2 flex items-center">
            <div className="w-16 h-1 bg-black"></div>
            <div className="w-20 h-1 bg-green-600"></div>
          </div>
        </div>
    </div>
    </section>
    {/* section2 */}
    <section>
      
    <div className="bg-green-500 w-full flex justify-center pt-[105px]">
      <div className="flex items-center max-w-5xl">
        {/* Left: Image Section */}
        <img
          src="/src/images/register.png"
          alt="About Us"
          className="w-[491px] h-[331px] "
        />
        {/* Right: Mission Card */}
        <div className="bg-[#F8CF68] p-6 rounded-2xl w-[714px] ">
          <h2 className="text-white text-[32px] font-kh font-bold">Our Mission</h2>
          <p className="text-[#9796A1] mt-2 text-[22px] font-kh">
            Our mission is to help you discover the best food recommendations
            and explore a wide variety of delicious dishes. We provide curated
            food suggestions to suit your taste and lifestyle, from healthy
            meals to indulgent treats and quick weeknight dinners.
          </p>
        </div>
      </div>
    </div>
    {/* 2 */}
    <div className="bg-green-500 w-full flex justify-center pb-[105px]">
      <div className="flex items-center flex-row-reverse max-w-5xl">
        {/* Right: Image Section */}
        <img
          src="/src/images/register.png"
          alt="About Us"
          className="w-[491px] h-[331px]"
        />

        {/* Left: Mission Card */}
        <div className="bg-[#ffffff] p-6 rounded-2xl w-[714px]">
          <h2 className="text-[#FBBF24] text-[32px] font-kh font-bold">Our Mission</h2>
          <p className="text-[#9796A1] font-kh mt-2 text-[22px]">
            Our mission is to help you discover the best food recommendations
            and explore a wide variety of delicious dishes. We provide curated
            food suggestions to suit your taste and lifestyle, from healthy
            meals to indulgent treats and quick weeknight dinners.
          </p>
        </div>
      </div>
    </div>
    </section>
    
    </>
  );
};