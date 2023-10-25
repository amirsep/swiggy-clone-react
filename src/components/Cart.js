import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  //Subscribing to the Store using a  Selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-xl text-green-500 font-bold ">
        Cart Items : {cartItems.length}
      </h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-red-500 text-white  rounded-lg"
          onClick={handleClearCart}
        >
          CLEAR CART
        </button>
        {cartItems.length === 0 && (
          <h1 className="text-pink-500 font-bold">
            Cart is empty. Add Items to the Cart!
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
