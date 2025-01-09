// import {CDN_URL} from "../utils/constants";
const ItemList = ({ items }) => {
//   console.log(items);
  const CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/";
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-grey-200 border-b-2 text-left flex"
        >
          <div className="9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.defaultPrice
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.finalPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 rounded-lg mx-16 bg-white shadow-lg ">
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
