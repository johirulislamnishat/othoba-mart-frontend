import DealsOfTheWeekSidebar from "../DealsOfTheWeekSidebar/DealsOfTheWeekSidebar";
import SuperDiscountSidebar from "../SuperDiscountSidebar/SuperDiscountSidebar";
import TrendingProductsSidebar from "../TrendingProductsSidebar/TrendingProductsSidebar";

const Sidebar = () => {
  return (
    <aside>
      <SuperDiscountSidebar></SuperDiscountSidebar>
      <DealsOfTheWeekSidebar></DealsOfTheWeekSidebar>
      <TrendingProductsSidebar></TrendingProductsSidebar>
      <SuperDiscountSidebar></SuperDiscountSidebar>
    </aside>
  );
};

export default Sidebar;
