function Banner() {
  return (
    <div className="hero min-h-[500px] bg-[url(https://i.ibb.co.com/0yQg57mp/Banner-min.jpg)]">
      <div className="hero-overlay"></div>
      <div className="w-[80%] hero-content text-neutral-content">
        <div className="w-[50%] mr-auto">
          <h1 className="mb-5 text-5xl font-bold">
            Bid on unique items from Around the World
          </h1>
          <p className="mb-5">
            Discover rare collectibles, luxury goods, and vintage treasures in
            our courated auctions
          </p>
          <button className="btn rounded-full">Explore Auctions</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
