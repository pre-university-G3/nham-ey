import React from "react";
import MentorCard from "../../component/cards/MentorCard";

export default function About() {
  return (
    <>
      <section>

        <div className="bg-gray-100">
        <div className="flex flex-wrap justify-center gap-[30px] md:gap-[50px] items-center mx-[20px] md:mx-[100px]">
  <div className="text-center md:text-left">
    <h2 className="font-bold text-2xl font-kh text-[36px] bg-gradient-to-r from-[#FF9C63] via-[#F6BA58] to-[#EED84C] bg-clip-text text-transparent">
      ISTAD PRE-UNIVERSITY G3
    </h2>
    <h1 className="text-xl font-bold my-[20px] md:my-[30px] font-kh text-[28px] md:text-[32px] text-[#494949]">
      We serve up the{" "}
      <span className="bg-gradient-to-r from-[#FF9C63] via-[#F6BA58] to-[#EED84C] bg-clip-text text-transparent">
        best food recommendations
      </span>{" "}
      for you
    </h1>
    <p className="text-[#9796A1] mt-4 leading-relaxed text-[18px] md:text-[22px] w-full md:w-[694px]">
      Our team explores, tastes, and reviews to bring you the best restaurant recommendations. Trust our recommendations for a
      delicious dining experience every time!
    </p>
    <a
      href="#our-purpose"
      className="bg-[#77b254] text-white text-[16px] font-kh p-[10px] my-[20px] md:my-[30px] w-[120px] md:w-[123px] h-[39px] rounded-[10px] flex items-center justify-center hover:bg-[#89cc63]"
    >
      Learn more ↓
    </a>
  </div>
  <div className="relative mt-6 md:mt-[100px] justify-center lg:block hidden">
  <div className="relative w-[300px] md:w-[499px] h-[300px] md:h-[499px]">
    {/* Hidden on sm and md devices */}
    <img
      src="/src/images/aboutbg.png"
      alt="Food Background"
      className="absolute inset-0 w-full h-full rounded-lg object-cover top-[10px]"
    />
    <img
      src="/src/images/1.png"
      alt="Food Bowl"
      className="absolute inset-0 w-full h-full rounded-lg object-contain"
    />
    <div className="absolute left-[50%] transform -translate-x-1/2 text-[#5B913B] font-bold font-kh text-[35px] md:text-[50px]">
      NHAM <span className="text-[#FBBF24]">EY</span>
    </div>
    <div className="absolute bottom-[100px] md:bottom-[200px] right-[10%] md:right-[480px] text-[#FBBF24] font-kh font-bold text-[24px] md:text-[32px]">
      TEAM
    </div>
  </div>
</div>

</div>


          {/* OUR PURPOSE Section */}
          <div
            id="our-purpose"
            className="flex flex-col items-center justify-center py-15 bg-gray-100 pb-full"
          >
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

      {/* Section 2 */}
      <section>
        {/* Section 1 */}
<div className="bg-green-500 w-full flex justify-center pt-[60px] md:pt-[130px] px-4">
  <div className="flex flex-col md:flex-row items-center gap-6 max-w-5xl w-full">
    <img
      src="/public/Assets/AboutUsimg.png"
      alt="About Us"
      className="w-full md:w-[491px] h-auto md:h-[331px] object-cover"
    />
    <div className="bg-[#F8CF68] p-4 md:p-6 rounded-2xl w-full md:w-[714px]">
      <h2 className="text-white text-[24px] md:text-[32px] font-kh font-bold">
        Our Mission
      </h2>
      <p className="text-[#9796A1] mt-2 text-[16px] md:text-[22px] font-kh">
        Our mission is to help you discover the best food recommendations and explore a wide variety of delicious dishes. We provide curated food suggestions to suit your taste and lifestyle, from healthy meals to indulgent treats and quick weeknight dinners.
      </p>
    </div>
  </div>
</div>

{/* Section 2 */}
<div className="bg-green-500 w-full flex justify-center pb-[60px] md:pb-[130px] px-4">
  <div className="flex flex-col md:flex-row-reverse items-center gap-6 max-w-5xl w-full">
    <img
      src="/public/Assets/about2img.webp"
      alt="About Us"
      className="w-full md:w-[491px] h-auto md:h-[331px] object-cover"
    />
    <div className="bg-white p-4 md:p-6 rounded-2xl w-full md:w-[714px]">
      <h2 className="text-[#FBBF24] text-[24px] md:text-[32px] font-kh font-bold">
        Our Vision
      </h2>
      <p className="text-[#9796A1] font-kh mt-2 text-[16px] md:text-[22px]">
      Our vision is to transform how people discover and enjoy food by creating a personalized platform that connects them with diverse, high-quality options. We aim to promote healthy, sustainable choices while celebrating culture and supporting local businesses.
      </p>
    </div>
  </div>
</div>


        <div className="bg-[#e4e0e0] pb-20">
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
            <div className="grid sm:grid-cols-2 gap-30 place-items-center">
              <MentorCard
                image="/src/images/IMG_8823.jpg"
                role="Mentor"
                name="Sin Sreyphea"
              />
              <MentorCard
                image="/src/images/IMG_0905 copy.JPG"
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-20 place-items-center">
              <MentorCard
                image="/src/images/IMG_0215.JPG"
                role="Team Leader"
                name="Min Phanith"
              />
              <MentorCard
                image="/src/images/Kea.JPG"
                role="Sub Team Leader"
                name="Lim Mouykea"
              />
              <MentorCard
                image="/src/images/mingyeck.JPG"
                role="Member"
                name="Houng Mingyeak"
              />
              <MentorCard
                image="/src/images/nak.JPG"
                role="Member"
                name="Thai Ratanak"
              />
              <MentorCard
                image="/src/images/nuth.JPG"
                role="Member"
                name="SovannRanuth"
              />
              <MentorCard
                image="/src/images/bol.JPG"
                role="Member"
                name="Houn Vibol"
              />
              <MentorCard
                image="/src/images/tri.JPG"
                role="Member"
                name="Ri Tri"
              />
              <MentorCard
                image="/src/images/Na.JPG"
                role="Member"
                name="Ben Thona"
              />
              <MentorCard
                image="/src/images/nich.JPG"
                role="Member"
                name="Phorn Sunnich"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
