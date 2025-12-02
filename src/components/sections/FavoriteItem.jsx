function FavoriteItem({ auction, removeFavoriteAuctionItems }) {
  const { title, image } = auction;
  return (
    <>
      <li className="list-row border-1 border-red-400 m-2">
        <div>
          <img className="size-10 rounded-box" src={image} alt={image} />
        </div>
        <div className="list-col-grow">
          <div className="font-semibold">{title}</div>
        </div>
        <button
          className="btn btn-square btn-ghost font-extrabold"
          onClick={() => removeFavoriteAuctionItems(auction)}
        >
          &times;
        </button>
      </li>
    </>
  );
}

export default FavoriteItem;
