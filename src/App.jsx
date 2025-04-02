import React from "react";
import "./index.css";
import FoodCard from "./component/cards/FoodCard";
import Resturant from "./component/cards/Resturant";
import Catagories from "./component/cards/Catagories"

function App() {
  return (
    <>
    <div className="flex justify-center">
    <div className="grid grid-cols-3 gap-5">
    <FoodCard
    image="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    title="Title"
    subtitle="Sorry, there are no tours or activities available to book online for the date(s) you selected. Please choose a different date.Hello wordl my name is Ratanak"
    price="1.25"
    rate="4"
    />
    <FoodCard
    image="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    title="Somlor proher"
    subtitle="Sorry, there are no tours or activities available to book online for the date(s) you selected. Please choose a different date."
    price="1.25"
    rate="4"
    />
    <FoodCard
    image="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    title="Somlor proher"
    subtitle="Sorry, there are no tours or activities available to book online for the date(s) you selected. Please choose a different date."
    price="1.25"
    rate="4"
    />
    </div>
    </div>
    <div className="justify-center flex">
      <div className="grid grid-cols-2 gap-[20px]">

    <Resturant
    image="https://imgs.search.brave.com/jBoy51LdCTh5S3h88Crc9raiE3EIsm5nGl5wR_QjsIA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmFzYS5nb3Yvd3At/Y29udGVudC91cGxv/YWRzLzIwMjUvMDMv/bmFzYXMtc3BhY2V4/LWNyZXctMTAtc3Vp/dC11cC5qcGc_dz0x/MDI0"
    title="Food"
    subtitle="Tahaad Pettiford of the Auburn Tigers takes flight after drawing a foul against the Michigan Wolverines in the NCAA men's basketball tournament in Atlanta, Georgia"/>
    <Resturant
    image="https://imgs.search.brave.com/jBoy51LdCTh5S3h88Crc9raiE3EIsm5nGl5wR_QjsIA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmFzYS5nb3Yvd3At/Y29udGVudC91cGxv/YWRzLzIwMjUvMDMv/bmFzYXMtc3BhY2V4/LWNyZXctMTAtc3Vp/dC11cC5qcGc_dz0x/MDI0"
    title="Food"
    subtitle="Tahaad Pettiford of the Auburn Tigers takes flight after drawing a foul against the Michigan Wolverines in the NCAA men's basketball tournament in Atlanta, Georgia"/>
    </div>
    </div>
    <div className="flex justify-center">
    <div className="grid grid-cols-4 gap-15">

    <Catagories 
    image="https://imgs.search.brave.com/jBoy51LdCTh5S3h88Crc9raiE3EIsm5nGl5wR_QjsIA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmFzYS5nb3Yvd3At/Y29udGVudC91cGxv/YWRzLzIwMjUvMDMv/bmFzYXMtc3BhY2V4/LWNyZXctMTAtc3Vp/dC11cC5qcGc_dz0x/MDI0"
    title="Khmer Food"/>
    </div>
    </div>
    </>
  );
}

export default App;
