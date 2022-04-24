import DealsOfTheWeekSidebar from "../DealsOfTheWeekSidebar/DealsOfTheWeekSidebar";
import RecentlyViewedProductSidebar from "../RecentlyViewedProductSidebar/RecentlyViewedProductSidebar";
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
      <RecentlyViewedProductSidebar></RecentlyViewedProductSidebar>
    </aside>
  );
};

export default Sidebar;
