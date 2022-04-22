import DealsOfTheWeekSidebar from "../DealsOfTheWeekSidebar/DealsOfTheWeekSidebar";
import NewProductsSidebar from "../NewProductsSidebar/NewProductsSidebar";
import SuperDiscountSidebar from "../SuperDiscountSidebar/SuperDiscountSidebar";
import SuperDiscountThreeSidebar from "../SuperDiscountThreeSidebar/SuperDiscountThreeSidebar";
import TrendingProductsSidebar from "../TrendingProductsSidebar/TrendingProductsSidebar";

const Sidebar = () => {
  return (
    <aside>
      <SuperDiscountSidebar></SuperDiscountSidebar>
      <DealsOfTheWeekSidebar></DealsOfTheWeekSidebar>
      <TrendingProductsSidebar></TrendingProductsSidebar>
      <SuperDiscountThreeSidebar></SuperDiscountThreeSidebar>
      <NewProductsSidebar></NewProductsSidebar>
    </aside>
  );
};

export default Sidebar;
