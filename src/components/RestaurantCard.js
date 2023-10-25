import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../hooks/UserContext";

const RestaurantCard = (props) => {
  const { loggedInUser } = useContext(UserContext);

  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
    areaName,
  } = resData;

  return (
    <div className="m-3 p-2 w-72  rounded-lg  bg-slate-50 hover:bg-slate-100">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold py-4 text-lg">{name.substring(0, 15)}</h2>
      <h3 className="font-bold  text-green-500">⭐{avgRating} </h3>
      <h3>{cuisines.join(", ").substring(0, 35)}</h3>
      <h3>Locality : {areaName}</h3>
      <h3> Cost : {costForTwo}</h3>
      {/* <h4> Delivery Time : {deliveryTime} Minutes</h4> */}
      <h4> Default User: {loggedInUser} </h4>
    </div>
  );
};

// Higher order component
// input RestaurantCard => RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
