import DealsOfTheWeekSidebar from "../DealsOfTheWeekSidebar/DealsOfTheWeekSidebar";
import DiscountedProductsSidebar from "../DiscountedProductsSidebar/DiscountedProductsSidebar";
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
      <DiscountedProductsSidebar></DiscountedProductsSidebar>
    </aside>
  );
};

export default Sidebar;
