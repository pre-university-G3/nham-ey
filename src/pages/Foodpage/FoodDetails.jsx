export default function FoodDetails({image,title,price,description}) {
  return (
    <>
    <body className="bg-bg-2">

      <main className="mx-[100px] my-[40px]">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.125 15C28.125 14.7514 28.0263 14.5129 27.8504 14.3371C27.6746 14.1613 27.4362 14.0625 27.1875 14.0625H5.07565L10.9763 8.16374C11.0634 8.07658 11.1326 7.9731 11.1798 7.85921C11.2269 7.74533 11.2512 7.62326 11.2512 7.49999C11.2512 7.37672 11.2269 7.25466 11.1798 7.14078C11.1326 7.02689 11.0634 6.92341 10.9763 6.83624C10.8891 6.74908 10.7856 6.67994 10.6717 6.63276C10.5579 6.58559 10.4358 6.56131 10.3125 6.56131C10.1893 6.56131 10.0672 6.58559 9.95331 6.63276C9.83942 6.67994 9.73594 6.74908 9.64878 6.83624L2.14878 14.3362C2.06147 14.4233 1.9922 14.5268 1.94494 14.6407C1.89768 14.7546 1.87335 14.8767 1.87335 15C1.87335 15.1233 1.89768 15.2454 1.94494 15.3593C1.9922 15.4732 2.06147 15.5767 2.14878 15.6637L9.64878 23.1637C9.73594 23.2509 9.83942 23.3201 9.95331 23.3672C10.0672 23.4144 10.1893 23.4387 10.3125 23.4387C10.4358 23.4387 10.5579 23.4144 10.6717 23.3672C10.7856 23.3201 10.8891 23.2509 10.9763 23.1637C11.0634 23.0766 11.1326 22.9731 11.1798 22.8592C11.2269 22.7453 11.2512 22.6233 11.2512 22.5C11.2512 22.3767 11.2269 22.2547 11.1798 22.1408C11.1326 22.0269 11.0634 21.9234 10.9763 21.8362L5.07565 15.9375H27.1875C27.4362 15.9375 27.6746 15.8387 27.8504 15.6629C28.0263 15.4871 28.125 15.2486 28.125 15Z"
            fill="#75A511"
          />
        </svg>
        <div className="my-[50px]">
        <div className="flex flex-row gap-[67px]">
      {/* Food image */}
      <div>
        <img
          src={image}
          alt={title}
          className="w-[420px] h-[400px] object-cover rounded-lg"
        />
      </div>

      {/* Food details */}
      <div className="w-[714px]">
        <h1 className="mb-4 text-[32px] font-bold text-[#27272A] font-kh">{title}</h1>
        <h3 className="mb-4 text-[24px] text-[#5B913B] font-bold font-kh">{price} $</h3>
        <p className="text-[16px] mb-4 text-[#3F3F46] font-regular font-kh line-clamp-9">{description}</p>
        <button className=" w-[190px] h-[40px] bg-hover-primary rounded-xl text-white text-xl font-medium hover:bg-primary">
          Add to wishlist
        </button>
      </div>
    </div>
        </div>
      </main>
    </body>
    </>
  );
}