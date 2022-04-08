import SuperDiscountSidebar from "../SuperDiscountSidebar/SuperDiscountSidebar";
import TrendingProductsSidebar from "../TrendingProductsSidebar/TrendingProductsSidebar";

const Sidebar = () => {
    return (
        <aside>
            <SuperDiscountSidebar></SuperDiscountSidebar>
            <TrendingProductsSidebar></TrendingProductsSidebar>
            <SuperDiscountSidebar></SuperDiscountSidebar>
        </aside>
    );
};

export default Sidebar;
