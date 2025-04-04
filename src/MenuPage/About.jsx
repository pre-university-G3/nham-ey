import React from "react";
import MentorCard from "../component/cards/MentorCard";

export default function About() {
  return (
    <>
      <section>
        <div className="bg-gray-100">
          <div className="flex flex-wrap justify-between gap-[50px] items-center mx-[100px]">
            <div className=" text-center md:text-left">
              <h2 className="font-bold text-2xl font-kh text-[36px] bg-gradient-to-r from-[#FF9C63] via-[#F6BA58] to-[#EED84C] bg-clip-text text-transparent">
                ISTAD PRE-UNIVERSITY G3
              </h2>
              <h1 className="text-xl font-bold my-[30px] font-kh text-[32px] w-[609px] text-[#494949]">
                We serve up the{" "}
                <span className="bg-gradient-to-r from-[#FF9C63] via-[#F6BA58] to-[#EED84C] bg-clip-text text-transparent">
                  best food recommendations
                </span>{" "}
                for you
              </h1>
              <p className="text-[#9796A1] mt-4 leading-relaxed text-[22px] w-[694px]">
                Our team explores, tastes, and reviews to bring you the best
                restaurant recommendations. Trust our recommendations for a
                delicious dining experience every time!
              </p>
              <button className="bg-[#77b254] text-white text-[16px] font-kh p-[14px] my-[30px] w-[123px] h-[39px] rounded-[10px] flex items-center hover:bg-[#89cc63]">
                Learn more ↓
              </button>
            </div>
            <div className="relative mt-6 md:mt-[100px] flex justify-center">
      {/* Container for Image */}
      <div className="relative w-[499px] h-[499px]">
        {/* Background Image */}
        <img
          src="/src/images/aboutbg.png"
          alt="Food Background"
          className="absolute inset-0 w-full h-full rounded-lg object-cover top-[10px] "
        />
        {/* Main Image */}
        <img
          src="/src/images/aboutlogo.png"
          alt="Food Bowl"
          className="absolute inset-0 w-full h-full rounded-lg object-contain"
        />
        {/* Title Text */}
        <div className="absolute left-[50%] transform -translate-x-1/2 text-[#5B913B] font-bold font-kh text-[50px]">
          NHAM <span className="text-[#FBBF24]">EY</span>
        </div>
        {/* Team Text */}
        <div className="absolute bottom-[200px] right-[480px] text-[#FBBF24] font-kh font-bold text-[32px]">
          TEAM
        </div>
      </div>
    </div>
          </div>
          {/* OUR PURPOSE Section */}
          <div className="flex flex-col items-center justify-center py-15 bg-gray-100 pb-full">
            <h2 className="text-[#5B913B] font-bold text-[32px] font-kh ">
              OUR PURPOSE
            </h2>
            <div className="mt-2 flex items-center">
              <div className="w-[111px] h-1 bg-black"></div>
              <div className="w-[111px] h-1 bg-[#75A511]"></div>
            </div>
          </div>
        </div>
      </section>
      {/* section2 */}
      <section>
        <div className="bg-green-500 w-full flex justify-center pt-[130px]">
          <div className="flex items-center max-w-5xl">
            {/* Left: Image Section */}
            <img
              src="/src/images/register.png"
              alt="About Us"
              className="w-[491px] h-[331px] "
            />
            {/* Right: Mission Card */}
            <div className="bg-[#F8CF68] p-6 rounded-2xl w-[714px] ">
              <h2 className="text-white text-[32px] font-kh font-bold">
                Our Mission
              </h2>
              <p className="text-[#9796A1] mt-2 text-[22px] font-kh">
                Our mission is to help you discover the best food
                recommendations and explore a wide variety of delicious dishes.
                We provide curated food suggestions to suit your taste and
                lifestyle, from healthy meals to indulgent treats and quick
                weeknight dinners.
              </p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="bg-green-500 w-full flex justify-center pb-[130px]">
          <div className="flex items-center flex-row-reverse max-w-5xl">
            {/* Right: Image Section */}
            <img
              src="/src/images/register.png"
              alt="About Us"
              className="w-[491px] h-[331px]"
            />

            {/* Left: Mission Card */}
            <div className="bg-[#ffffff] p-6 rounded-2xl w-[714px]">
              <h2 className="text-[#FBBF24] text-[32px] font-kh font-bold">
                Our Mission
              </h2>
              <p className="text-[#9796A1] font-kh mt-2 text-[22px]">
                Our mission is to help you discover the best food
                recommendations and explore a wide variety of delicious dishes.
                We provide curated food suggestions to suit your taste and
                lifestyle, from healthy meals to indulgent treats and quick
                weeknight dinners.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#e4e0e0]">
          {/* MentorPage */}
          <div className="flex flex-col items-center justify-center pb-full">
            <h2 className="text-[#77B254] font-bold text-[32px] font-kh mt-[95px] ">
              Our Mentor
            </h2>
            <div className="mt-2 flex items-center">
              <div className="w-[111px] h-1 bg-black"></div>
              <div className="w-[111px] h-1 bg-[#75A511]"></div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-[100px]">
            <div className="grid grid-cols-2 gap-[252px] place-items-center">
              <MentorCard
                image="/src/images/Cher-Phea.jpg"
                role="Mentor"
                name="Sin Sreyphea"
              />
              <MentorCard
                image="/src/images/Cher-Cheat.JPG"
                role="Mentor"
                name="Srorng Sokcheat"
              />
            </div>
          </div>
          {/* Member */}
          <div className="flex flex-col items-center justify-center pb-full">
            <h2 className="text-[#77B254] font-bold text-[32px] font-kh mt-[95px] ">
              Our Member
            </h2>
            <div className="mt-2 flex items-center">
              <div className="w-[111px] h-1 bg-black"></div>
              <div className="w-[111px] h-1 bg-[#75A511]"></div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-[100px]">
            <div className="grid grid-cols-3 gap-x-[100px] gap-y-[80px] place-items-center">
              <MentorCard
                image="/src/images/Cher-Phea.jpg"
                role="Mentor"
                name="Sin Sreyphea"
              />
              <MentorCard
                image="/src/images/Cher-Cheat.JPG"
                role="Mentor"
                name="Srorng Sokcheat"
              />
              <MentorCard
                image="/src/images/Cher-Cheat.JPG"
                role="Mentor"
                name="Srorng Sokcheat"
              />
              <MentorCard
                image="/src/images/Cher-Cheat.JPG"
                role="Mentor"
                name="Srorng Sokcheat"
              />
              <MentorCard
                image="/src/images/Cher-Cheat.JPG"
                role="Mentor"
                name="Srorng Sokcheat"
              />
              <MentorCard
                image="/src/images/Cher-Cheat.JPG"
                role="Mentor"
                name="Srorng Sokcheat"
              />
              <MentorCard
                image="/src/images/Cher-Cheat.JPG"
                role="Mentor"
                name="Srorng Sokcheat"
              />
              <MentorCard
                image="/src/images/Cher-Cheat.JPG"
                role="Mentor"
                name="Srorng Sokcheat"
              />
              <MentorCard
                image="/src/images/Cher-Cheat.JPG"
                role="Mentor"
                name="Srorng Sokcheat"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
