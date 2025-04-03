import React from "react";
import "./index.css";
import FoodCard from "./component/cards/FoodCard";
import Resturant from "./component/cards/Resturant";
import Catagories from "./component/cards/Catagories"

function App() {
  return (
    <>
  
    <div className="flex justify-center">
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    <FoodCard
    image="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    title="Title"
    description="Sorry, there are no tours or activities available to book online for the date(s) you selected. Please choose a different date.Hello wordl my name is Ratanak"
    price="1.25"
    rate="4"
    />
    <FoodCard
    image="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    title="Somlor proher"
    description="Sorry, there are no tours or activities available to book online for the date(s) you selected. Please choose a different date."
    price="1.25"
    rate="4"
    />
    <FoodCard
    image="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    title="Somlor proher"
    description="Sorry, there are no tours or activities available to book online for the date(s) you selected. Please choose a different date."
    price="1.25"
    rate="4"
    />
    <FoodCard
    image="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    title="Somlor proher"
    description="Sorry, there are no tours or activities available to book online for the date(s) you selected. Please choose a different date."
    price="1.25"
    rate="4"
    />
    </div>
    </div>
    </>
  );
}

export default App;
