import NewNavbar from "../layouts/Navbar";
import RestaurantCard from "../components/cards/RestaurantCard";

function RestaurantList() {
  return (
    <div>
      <header>
        <NewNavbar />
      </header>

      <main className="my-10">
        <div>
          <h1 className=" text-[28px] font-semibold text-center my-[px] text-primary">
            Restaurant <span className=" text-zinc-700">Listing</span>
          </h1>
          <div className="flex justify-center items-center mt-1">
            <div className="w-[60px] border-t-[2px] border-zinc-700"></div>
            <div className="w-[60px] border-t-[2px] border-primary"></div>
          </div>
        </div>

        <section className="flex flex-wrap gap-5 justify-center mt-10">
          <RestaurantCard
            image="src/images/restaurant/soiftel.png"
            title="Sofitel Hotel & Restaurant"
            description="Sofitel Phnom Penh Phokeethra is a luxury hotel offering elegant rooms, fine dining, and premium amenities in a prime location."
          />

          <RestaurantCard
            image="src/images/restaurant/hel_corner.png"
            title="Hel Corner"
            description="we bring you the boldest and most intense spicy food experience! We use only the freshest, spiciest ingredients to satisfy your craving for heat."
          />

          <RestaurantCard
            image="src/images/restaurant/la_croisette.png"
            title="La Croisette Bistro & Restauarant"
            description="Legendary breakfasts, Mediterranean cuisine, fresh juices, coffees and great craft beer all day long from 8am - 12am."
          />

          <RestaurantCard
            image="src/images/restaurant/rosewood.png"
            title="Rosewood Phnom Penh"
            description="Discover Elite Stays With Rosewood Phnom Penh, Designed For Unparalleled Luxury. Experience Unparalleled Luxury Where..."
          />

          <RestaurantCard
            image="/src/images/restaurant/kyo.png"
            title="KYŌ Omakase"
            description="KYŌ Omakase offers an intimate Edomae-style sushi experience in Phnom Penh with a seasonal chef-curated menu and premium seafood."
          />

          <RestaurantCard
            image="/src/images/restaurant/pizza_company.png"
            title="The Pizza Company"
            description="Offering a variety of freshly made pizzas, pastas, and sides, known for its cheesy, loaded toppings and signature pan crust."
          />

          <RestaurantCard
            image="/src/images/restaurant/de_brazil.png"
            title="De Brazil Steakhouse"
            description="De Brazil Steakhouse offers a Brazilian churrascaria experience with grilled meats served tableside and a fresh salad bar."
          />

          <RestaurantCard
            image="/src/images/restaurant/romyol.png"
            title="Romyol Garden"
            description="Romyol Garden offers traditional Khmer cuisine, serving a variety of authentic dishes made with fresh, local ingredients in a cozy, welcoming setting."
          />

          <RestaurantCard
            image="/src/images/restaurant/burger_king.png"
            title="Burger King"
            description="Burger King is a global fast-food chain known for its flame-grilled burgers, including the Whopper, and its 'Have It Your Way' customization."
          />

          <RestaurantCard
            image="/src/images/restaurant/domino.png"
            title="Domino's Pizza"
            description="Domino's Pizza offers a wide range of pizzas, sides, and desserts, known for quick delivery, customizable options, and signature crusts."
          />
        </section>
      </main>
    </div>
  );
}
export default RestaurantList;
