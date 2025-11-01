//* Sidebar component
import { useState } from "react";
import { PiCoffee, PiHamburger, PiBread, PiClipboard} from "react-icons/pi";
import { GiWineBottle } from "react-icons/gi";
import { CiFries } from "react-icons/ci";
function Sidebar() {
  const [active, setActive] = useState("Coffee");
  const MenuItems = [
    {
      name: "Coffee",
      icon: <PiCoffee />,
    },
    {
      name: "Beverages",
      icon: <GiWineBottle />,
    },
    {
      name: "Food",
      icon: <PiHamburger />,
    },
    {
      name: "Appetizer",
      icon: <CiFries />,
    },
    {
      name: "Bakeries",
      icon: <PiBread />,
    },
    {
      name: "Table",
      icon: <PiClipboard />,
    },
  ];
  return (
    <aside className="w-fit h-full flex-col items-center justify-center bg-white my-3 ml-3 p-5 rounded-xl shadow-md">
      <ul>
        {MenuItems.map((item) => (
          <li>
            <button
              onClick={() => {
                setActive(item.name);
              }}
              className={`cursor-pointer px-2 py-4 w-full rounded-[7px] flex flex-col items-center justify-center gap-3 ${
                active === item.name
                  ? "text-white bg-green-400"
                  : "text-gray-500"
              }`}
            >
              <span className="" style={{"font-size":"25px"}}>{item.icon}</span>
              <span className="text-center text-[13px]">{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
