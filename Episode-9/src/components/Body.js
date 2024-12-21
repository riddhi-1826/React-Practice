import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText,setSearchText] = useState("")
  console.log(listofRestaurants)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1685786&lng=79.9338798&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    // console.log(
    //   jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );
    setListofRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus ===false) 
    return <h1>Looks like you are Offline! Please check your internet connection.</h1>

  if (listofRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input 
            type="text" 
            className="border border-solid border-black"
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)
            }
          ></input>
          <button className="px-4 py-2 bg-green-100 m-4  rounded-lg"
           onClick={() =>{
            console.log(searchText);
            const filterRestaurant = listofRestaurants.filter((res)=>{
              console.log(res.info.name)
              console.log(res.info.name.includes(searchText))
              return res.info.name.toLowerCase().includes(searchText.toLowerCase())

            });
            // console.log(filterRestaurant)
            // setListofRestaurants(filterRestaurant)
            setFilteredRestaurants(filterRestaurant)
          }}
          > Search</button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            // console.log(filteredList);
            setListofRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
          </button>
        </div>
        
          
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard key={restaurant.info.id} resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
