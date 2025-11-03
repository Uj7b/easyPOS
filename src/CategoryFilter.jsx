import { useEffect, useState } from "react";
import Menu from "./menu.json";
function CategoryFilter() {
  const [categories, setCategries] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Food");
  const [activeTab, setActiveTab] = useState("All");
  useEffect(() => {
    setCategries(Menu.menu);
  }, [activeCategory]);
  const active = categories.find((c) => c.category === activeCategory);
  return (
    <div className="flex gap-2.5 bg-white">
      <button className="cursor-pointer px-5 py-1.5 text-orange-500 bg-orange-200 w-fit rounded-full border border-orange-500">
        All
      </button>
      {active?.subcategories?.map((sub) => (
        <button className="cursor-pointer px-5 py-1.5 text-orange-500 bg-orange-200 w-fit rounded-full border border-orange-500">
          {sub.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
