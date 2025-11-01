import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import Menu from "./menu.json";

function ProductGrid() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(Menu.menu); // access the "menu" array in your JSON
  }, []);

  return (
    <div
      className="w-full grid gap-3
                 grid-cols-1
                 sm:grid-cols-2 
                 md:grid-cols-3
                 lg:grid-cols-4
                 xl:grid-cols-5
                 mx-3 my-3 rounded-xl"
    >
      {items.map((category, i) => (
        <div key={i} className="rounded-lg shadow">
          {category.subcategories.map((sub, j) =>
            sub.items.map((item, k) => (
              <ItemCard
                key={`${i}-${j}-${k}`}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))
          )}
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
