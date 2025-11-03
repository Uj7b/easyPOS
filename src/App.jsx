// import { useState } from "react";
import Header from "./Header";
import SideMenu from "./SideMenu";
import NotificationsTab from "./NotificationsTab";
import ProductGrid from "./ProductGrid";
import CategoryFilter from "./CategoryFilter";

function App() {
  // const [order, setOrder] = useState([]);
  return (
    <>
      <Header />
      <SideMenu />
      <CategoryFilter />
      <ProductGrid/>
    </>
  );
}

export default App;
