import WishlistButton from "../buttons/WishlistButton";

function FoodDetailscCard({ image, title, price, description }) {
  return (
    <div className="flex flex-row gap-[67px]">
      {/* Food image */}
      <div>
        <img
          src={image }
          alt={title}
          className="w-[420px] h-[400px] object-cover rounded-lg"
        />
      </div>

      {/* Food details */}
      <div className="w-[714px]">
        <h1 className="mb-4 text-3xl font-bold text-zinc-800">{title}</h1>
        <h3 className="mb-4 text-2xl text-primary font-bold">{price}</h3>
        <p className="text-base mb-4 text-zinc-800">{description}</p>

        <WishlistButton />
      </div>
    </div>
  );
}
export default FoodDetailscCard;
