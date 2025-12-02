import FavoriteItem from "./FavoriteItem";

function FavoriteItems({
  favoriteAuctionItems,
  removeFavoriteAuctionItems,
  totalBidAmount,
}) {
  return (
    <div className="basis-[30%]">
      <ul className="list bg-base-100 rounded-xl shadow-md">
        <li className="p-4 pb-2 tracking-wide text-center font-bold border-b-1 border-red-300">
          Favorite Items
        </li>
        <div className="flex flex-col-reverse">
          {favoriteAuctionItems.length > 0 ? (
            favoriteAuctionItems.map((auction) => (
              <FavoriteItem
                key={auction.id}
                auction={auction}
                removeFavoriteAuctionItems={removeFavoriteAuctionItems}
              ></FavoriteItem>
            ))
          ) : (
            <li className="p-4 pb-2 tracking-wide text-center">
              <strong className="mb-4">No Favorite Yet</strong>
              <p>Click the heart icon on any item to add it to your favorite</p>
            </li>
          )}
        </div>
        <li className="p-4 pb-2 tracking-wide  border-t-1 border-red-300">
          <strong className="mb-4">
            Total Bids Amount : ${totalBidAmount}
          </strong>
        </li>
      </ul>
    </div>
  );
}

export default FavoriteItems;
