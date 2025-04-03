import React from 'react'
import RestaurantCard from '../component/cards/RasturantCard'
export default function Rasturant() {
return (
  <main className=" mx-auto px-2 py-3 ">
        <h1 className="text-2xl text-center text-green-500 font-medium mb-8">Restaurant listing</h1>

        <section className="grid grid-cols-2  lg:grid-cols-2 gap-5">
          <RestaurantCard
            logo="/Assets/sofitel-logo.png"
            name="Sofitel Hotel & Restaurant"
            description="Sofitel Phnom Penh Restaurant is a luxury dining destination that offers a variety of premium amenities in a prime location."
          />
          <RestaurantCard
            logo="/Assets/hot-corner.png"
            name="Hot Corner"
            description="We bring you the hottest and most intense flavors from around the world so you can explore special ingredients to satisfy your craving for food."
          />

          <RestaurantCard
            logo="/Assets/la-croisette.png"
            name="La Croisette Bistro & Restaurant"
            description="Experience authentic Mediterranean cuisine. Open Lunch, Coffee, and Dinner. Open 7 days from 10am - 11pm."
          />

          <RestaurantCard
            logo="/Assets/rosewood.png"
            name="Rosewood Phnom Penh"
            description="Discover luxury at Rosewood Phnom Penh. Elegant and sophisticated cuisine. Experience unparalleled luxury here."
          />

          <RestaurantCard
            logo="/Assets/kyo.png"
            name="KYO Omakase"
            description="We strive for the day to ensure that customers enjoy the most authentic Japanese. The cuisine..."
          />

          <RestaurantCard
            logo="/Assets/pizza-company.png"
            name="The Pizza Company Cambodia"
            description="Taste delicious, freshly baked pizzas made with premium ingredients and local flavors. From classic favorites to unique specialties."
          />

          <RestaurantCard
            logo="/Assets/de-brazil.png"
            name="De Brazil Steakhouse"
            description="De Brazil Steakhouse. Buffet. Open Only Dinner seating. Serves Alcohol. Purpose Full Eating. Meat."
          />

          <RestaurantCard
            logo="/Assets/rompot.png"
            name="Rompot Garden"
            description="Most of these suggestions are ideal for when you're dealing with design systems in huge design files, but they're also..."
          />
        </section>
      </main>
)
}
