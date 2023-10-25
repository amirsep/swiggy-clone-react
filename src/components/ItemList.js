import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../redux/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item?.card?.info?.name}</span>
                <span>
                  - ₹
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>

            <div className="w-3/12 p-2">
              <div className="absolute">
                <button
                  className="p-1 bg-white rounded-sm shadow-lg text-green-500 font-semibold"
                  onClick={() => handleAddItem(item)}
                >
                  ADD +{" "}
                </button>
              </div>
              <img
                className="w-full rounded-lg"
                src={CDN_URL + item?.card?.info?.imageId}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
