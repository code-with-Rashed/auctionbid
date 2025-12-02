import TableItem from "./TableItem";

function Tables({ auctions, bidAuctionItem }) {
  return (
    <div className="overflow-x-auto bg-base-100 rounded-xl shadow-md basis-[66%]">
      <table className="table">
        <thead>
          <tr>
            <th>Items</th>
            <th>Current Bid</th>
            <th>Time Left</th>
            <th>Bid Now</th>
          </tr>
        </thead>
        <tbody>
          {auctions.map((auctionData) => (
            <TableItem
              key={auctionData.id}
              auctionData={auctionData}
              bidAuctionItem={bidAuctionItem}
            ></TableItem>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tables;
