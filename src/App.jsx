import React from "react";
import "./index.css";
import Card2 from "./component/cards/Card2";


function App() {
  return (
    <>
    <div className="flex justify-center">
    <div className="grid grid-cols-3 gap-5">
    <Card2
    image="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    title="Title"
    subtitle="Sorry, there are no tours or activities available to book online for the date(s) you selected. Please choose a different date.Hello wordl my name is Ratanak"
    price="1.25"
    rate="4"
    />
    <Card2
    image="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    title="Somlor proher"
    subtitle="Sorry, there are no tours or activities available to book online for the date(s) you selected. Please choose a different date."
    price="1.25"
    rate="4"
    />
    <Card2
    image="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    title="Somlor proher"
    subtitle="Sorry, there are no tours or activities available to book online for the date(s) you selected. Please choose a different date."
    price="1.25"
    rate="4"
    />
    </div>
    </div>
    </>
  );
}

export default App;
