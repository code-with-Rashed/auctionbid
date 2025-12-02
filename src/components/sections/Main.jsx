import { Suspense, useEffect, useState } from "react";
import Tables from "./Tables";
import Loading from "./Loading";
import { ToastContainer, toast } from "react-toastify";
import FavoriteItems from "./favoriteItems";
function Main() {
  const [auctions, setAuctions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favoriteAuctionItems, setFavoriteAuctionItems] = useState([]);

  useEffect(() => {
    const auctionsData = async () => {
      try {
        const getAuctionsData = await fetch("auctions.json");
        const result = await getAuctionsData.json();
        setAuctions(result);
      } catch (error) {
        toast.error("OOPS Sorry ! " + error.message);
      } finally {
        setIsLoading(false);
      }
    };
    auctionsData();
  }, []);

  const handleAuctionData = (auction) => {
    const newAuctionData = [...auctions];
    newAuctionData.find((item) => {
      if (item.id == auction.id) {
        item.bidStatus = !item.bidStatus;
      }
    });
    setAuctions(newAuctionData);
  };

  const bidAuctionItem = (auctionItem) => {
    handleAuctionData(auctionItem);
    addFavoriteAuctionItems(auctionItem);
    toast("Item added to your favorite list.");
  };

  const addFavoriteAuctionItems = (item) => {
    setFavoriteAuctionItems((prev) => [...prev, item]);
  };

  const removeFavoriteAuctionItems = (auctionItem) => {
    const newFavoriteAuctionItems = [...favoriteAuctionItems].filter(
      (item) => item.id !== auctionItem.id
    );
    setFavoriteAuctionItems(newFavoriteAuctionItems);
    handleAuctionData(auctionItem);
    toast("Item removed from your favorite list.");
  };
  const totalBidAmount = favoriteAuctionItems.reduce(
    (sum, item) => sum + item.currentBidPrice,
    0
  );

  if (isLoading) {
    return (
      <div className="my-8 w-[80%] mx-auto">
        <Loading></Loading>
      </div>
    );
  }
  return (
    <div className="my-8 w-[80%] mx-auto flex justify-between">
      <Tables auctions={auctions} bidAuctionItem={bidAuctionItem}></Tables>
      <FavoriteItems
        totalBidAmount={totalBidAmount}
        favoriteAuctionItems={favoriteAuctionItems}
        removeFavoriteAuctionItems={removeFavoriteAuctionItems}
      ></FavoriteItems>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default Main;
