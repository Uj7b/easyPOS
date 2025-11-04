import { useState } from "react";
import "./index.css";
function ItemCard(props) {
  const [quantity, setQuantity] = useState(0);
  function handleAdd() {
    setQuantity(1);
  }
  function handleIncrease() {
    setQuantity(quantity + 1);
  }
  function handleDecrease() {
    setQuantity(quantity - 1);
  }
  return (
    <div className="rounded-[7px] w-full text-center py-4 bg-blue-400 gap-3">
      <div className="w-4/6 m-auto aspect-square">
        <img
          src={props.image}
          alt={props.name}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="text-[20px]">
        <h2>{props.name}</h2>
      </div>
      <div className="">
        <div className="text-center">
          <span className="text-gray-400 block text-sm">Price</span>
          <span className="text-orange-500 text-xl">
            $ {props.price.toFixed(2)}
          </span>
        </div>
        <div className="w-[85%] m-auto py-4">
          {quantity === 0 ? (
            <button
              className="bg-orange-500  text-white w-full rounded-md py-2"
              onClick={handleAdd}
            >
              Add
            </button>
          ) : (
            <div className="w-full flex justify-between gap-1">
              <button
                className="py-2 w-[33%] text-orange-500 border border-gray-400 rounded-md"
                onClick={handleDecrease}
              >
                -
              </button>
              <button
                readOnly
                className="py-2 w-[33%] text-white bg-orange-500 rounded-md"
              >
                {quantity}
              </button>
              <button
                className="py-2 w-[33%] text-orange-500 border border-gray-400 rounded-md"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
