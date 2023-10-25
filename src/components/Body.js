import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import useRestaurantList from "../hooks/useRestaurantList";
import UserContext from "../hooks/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const listOfRestaurants = useRestaurantList();
  const filteredRestaurant = useRestaurantList();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h2 className="mx-40 my-12 text-lg font-bold text-red-500 text-center">
        Look like you're offline! Please check your internet connection.{" "}
      </h2>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4 m-4 ">
          <input
            type="text"
            className="border border-solid  border-black rounded-sm "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 m-2 font-bold bg-green-400 rounded-lg hover:bg-green-500"
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // searchText

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search p-4 m-4 flex items-center ">
          <button
            className="px-4 py-1 m-2 font-bold bg-yellow-400 rounded-lg hover:bg-yellow-500"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="search p-4 m-4  flex items-center">
          <label className="px-4 py-1 m-2 rounded-lg font-bold bg-red-400 hover:bg-red-500">
            {" "}
            User Name:{" "}
          </label>
          <input
            className="border border-black rounded-sm"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* if the restaurant is promoted then add a promoted label to it */}
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
