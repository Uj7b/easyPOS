import { useEffect, useState } from "react";
import Menu from "./menu.json";

function CategoryFilter() {
  const [categories, setCategories] = useState([]);
  const activeCategory = "Food"
  const [activeSubCategory, setActiveSubCategory] = useState("All");
  // const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    setCategories(Menu.menu);
  }, []); // only once on mount — no need to re-run on activeCategory change

  const active = categories.find((c) => c.category === activeCategory);

  // Build subTabs = ["all", ...list of subcategory names]
  const subTabs = active
    ? ["All", ...active.subcategories.map((sub) => sub.name)]
    : ["All"];

  console.log(subTabs); // ✅ move outside return

  return (
    <div className="flex gap-2.5 bg-white p-2 rounded-lg">
      {subTabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveSubCategory(tab)}
          className={`cursor-pointer px-5 py-1.5 text-[#19191C] w-fit rounded-full border-[1.5px] border-[#E4E4E4] transition ${activeSubCategory === tab && "bg-[#FFDDD6] text-[#FF5733] border-[#FFC2B5]"}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
