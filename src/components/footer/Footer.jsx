function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside className="w-[30%]">
        <p className="text-lg">
          <a href="#" className="font-semibold">
            <span className="text-blue-500">Auction</span>
            <span className="text-yellow-500">Gallery</span>
          </a>
        </p>
        <ul className="flex justify-around w-3xs font-bold mb-4">
          <li>
            <a href="#">Bid.</a>
          </li>
          <li>
            <a href="#">Win.</a>
          </li>
          <li>
            <a href="#">Own.</a>
          </li>
        </ul>
        <ul className="flex justify-around w-full font-medium mb-4">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Auctions</a>
          </li>
          <li>
            <a href="">Categories</a>
          </li>
          <li>
            <a href="">How to works</a>
          </li>
        </ul>
        <p className="font-bold">
          Copyright © {new Date().getFullYear()} - AuctionHub. All right
          reserved
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
