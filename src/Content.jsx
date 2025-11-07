import Header from "./Header";
import SideMenu from "./SideMenu";
import NotificationsTab from "./NotificationsTab";
import ProductGrid from "./ProductGrid";
import CategoryFilter from "./CategoryFilter";
import Invoice from "./Invoice";
function Content() {
  return (
    <div
      className="grid h-screen 
      grid-cols-[auto_auto_auto] 
      grid-rows-[80px_auto_1fr] 
      grid-areas-[ 
        'header header header' 
        'sidebar filter invoice' 
        'sidebar product-grid invoice' 
      ]"
      style={{
        display: "grid",
        gridTemplateAreas: `
          "header header header"
          "sidebar filter invoice"
          "sidebar product-grid invoice"
        `,
      }}
    >
      <div style={{ gridArea: "header" }}>
        <Header />
      </div>
      <div style={{ gridArea: "sidebar" }}>
        <SideMenu />
      </div>
      <div style={{ gridArea: "filter" }}>
        <CategoryFilter />
      </div>
      <div style={{ gridArea: "product-grid" }}>
        <ProductGrid />
      </div>
      <div style={{ gridArea: "invoice" }}>
        <Invoice></Invoice>
      </div>
    </div>
  );
}

export default Content;
