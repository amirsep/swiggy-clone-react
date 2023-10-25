import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../hooks/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the Store using a  Selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between bg-yellow-400 shadow-lg">
      <div className="logo-container ">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 font-bold">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 font-bold">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/about">About </Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            {<Link to="/cart"> Cart - ({cartItems.length} Items) </Link>}
          </li>
          <button
            className="px-4  font-bold bg-green-400 rounded-md hover:bg-green-500"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
