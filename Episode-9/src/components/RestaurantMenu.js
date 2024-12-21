import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  // const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;
  // const { name, cuisines, costForTwoMessage } = restaurantInfo || {};
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  //   const {itemCards}  =
  //     resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
  //       ?.card?.itemCards|| [];

  //   const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card.categories[0].itemCards;
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
      .itemCards;
  console.log("Hello", resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  // console.log(itemCards?.[0]?.card?.info?.name);
  // console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.length > 0 ? cuisines.join(", ") : "No cuisines available"}
      </h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu:</h2>
      <ul>
        {itemCards.length > 0 ? (
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} : {"Rs. "}
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </li>
          ))
        ) : (
          <p>No Items Available</p>
        )}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
