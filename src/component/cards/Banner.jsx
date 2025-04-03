export default function Banner({ image }) {
  return (
    <>
      <div className="mx-50 my-10 p-10 bg-primary text-white flex items-center justify-between rounded-lg shadow-lg">
        <div>
          <h1 className="text-xl font-bold uppercase">
            Savor the True Taste of{" "}
            <span className="text-yellow-300">Cambodia Fresh, Flavorful</span>
          </h1>
          <p className="text-sm mt-2">Taste the Tradition, Savor the Culture</p>
        </div>
        <div className="w-24 mr-20">
          <img src={image} alt="image" className="w-full h-auto" />
        </div>
      </div>
    </>
  );
}
