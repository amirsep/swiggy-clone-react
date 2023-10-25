import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import axios from "axios";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  // console.log(setResInfo);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get(MENU_API + resId);
    setResInfo(data?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
