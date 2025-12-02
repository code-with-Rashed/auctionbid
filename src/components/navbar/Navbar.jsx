function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="w-[80%] m-auto">
        <div className="flex justify-between">
          <div className="basis-[30%] text-xl">
            <a href="#" className="font-extrabold">
              <span className="text-blue-500">Auction</span>
              <span className="text-yellow-500">Gallery</span>
            </a>
          </div>
          <div className="basis-[70%]">
            <ul className="flex justify-evenly font-medium">
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Auctions</li>
              </a>
              <a href="#">
                <li>Categories</li>
              </a>
              <a href="#">
                <li>How to works</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
