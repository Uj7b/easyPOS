import Bell from "./assets/images/bell.svg";
import Dropdown from "./assets/images/dropdown.svg";
export default function NavBar() {
  function handleOrder() {
    window.alert("feature coming soon");
  }
  function handleClick(e) {
    window.alert("feature is coming soon");
  }
  return (
    <div className="flex items-center">
      <ul className="text-gray-500 flex justify-around gap-6">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Orders</a>
        </li>
        <li>
          <a href="">Customers</a>
        </li>
        <li>
          <a href="">Cashier</a>
        </li>
      </ul>
      <button
        className="order-button w-fit px-6 py-1.5 text-white rounded-full cursor-pointer ml-6"
        onClick={handleOrder}
      >
        New Order
      </button>
      <div
        className="notification relative w-11 h-11 border border-gray-400 rounded-full flex justify-center items-center mx-6 cursor-pointer"
        onClick={() => handleClick()}
      >
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          2
        </span>
        <img src={Bell} alt="" className="w-6" />
      </div>
      <div className="user flex items-center">
        <div className="profile  bg-black w-11 h-11 flex items-center justify-center rounded-full mr-2">
          <span className="text-white text-xl block">M</span>
        </div>
        <div className="dropdown w-4 h-11 flex items-center cursor-pointer">
          <img src={Dropdown} alt="" className="w-5" />
        </div>
      </div>
    </div>
  );
}
