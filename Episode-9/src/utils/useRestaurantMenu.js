import { SWIGGY_API } from "./constants";
import { useState, useEffect } from "react";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    // const data = await fetch(SWIGGY_API + resId);
    // const json = await data.json();
    // setResInfo(json.data);
    try {
      const response = await fetch(SWIGGY_API + resId);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log(response);
      const json = await response.json();

      setResInfo(json?.data || {}); // Fallback to an empty object
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };
  return resInfo;
};

export default useRestaurantMenu;
