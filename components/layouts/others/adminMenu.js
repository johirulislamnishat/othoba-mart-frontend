import {
  DashboardOutlined,
  GoldOutlined,
  ShopOutlined,
  TeamOutlined,
  TagOutlined,
  LineChartOutlined,
  ProfileOutlined,
  UserOutlined,
  HddOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Image, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useProvider from "../../../hooks/useProvider";

const { SubMenu } = Menu;

const AdminMenu = ({ collapsed }) => {
  const router = useRouter();
  const pageName = router.pathname.split("/");
  const {
    state: { user },
  } = useProvider();

  const [maximumRole, setMaximumRole] = useState("customer");

  useEffect(() => {
    if (user) {
      if (user.isSuperAdmin) {
        setMaximumRole("superAdmin");
      } else if (user.isAdmin) {
        setMaximumRole("admin");
      } else if (user.isVendor) {
        setMaximumRole("vendor");
      } else {
        setMaximumRole("customer");
      }
    }
  }, [user]);

  return (
    <div>
      <Link href="/" passHref>
        <div className="text-center cursor-pointer">
          <Image
            preview={false}
            src="/othoba-mart-logo-dark.png"
            alt="Othoba Mart"
            className={`${collapsed ? "px-1 py-5" : "px-8 py-5"} mb-3`}
          />
        </div>
      </Link>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={pageName[pageName.length - 1]}
        defaultOpenKeys={
          pageName.length > 3
            ? [pageName[pageName.length - 2].toUpperCase()]
            : [pageName[pageName.length - 1].toUpperCase()]
        }
      >
        {maximumRole === "superAdmin" && (
          <>
            <Menu.Item key="admin" icon={<DashboardOutlined />}>
              <Link href="/admin" passHref>
                Dashboard
              </Link>
            </Menu.Item>
            <SubMenu key="PRODUCTS" icon={<GoldOutlined />} title="Products">
              <Menu.Item key="products">
                <Link href="/admin/products" passHref>
                  Products
                </Link>
              </Menu.Item>
              <Menu.Item key="add">
                <Link href="/admin/products/add" passHref>
                  Add Product
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="orders" icon={<ShopOutlined />}>
              <Link href="/admin/orders" passHref>
                Orders
              </Link>
            </Menu.Item>
            <Menu.Item key="users" icon={<TeamOutlined />}>
              <Link href="/admin/users" passHref>
                Users
              </Link>
            </Menu.Item>
            <Menu.Item key="shops" icon={<TeamOutlined />}>
              <Link href="/admin/shops" passHref>
                Shops
              </Link>
            </Menu.Item>
            <Menu.Item key="tickets" icon={<TagOutlined />}>
              <Link href="/admin/tickets" passHref>
                Manage Ticket
              </Link>
            </Menu.Item>
          </>
        )}
        {maximumRole === "admin" && (
          <>
            <Menu.Item key="admin" icon={<DashboardOutlined />}>
              <Link href="/admin" passHref>
                Dashboard
              </Link>
            </Menu.Item>
            <SubMenu key="PRODUCTS" icon={<GoldOutlined />} title="Products">
              <Menu.Item key="products">
                <Link href="/admin/products" passHref>
                  Products
                </Link>
              </Menu.Item>
              <Menu.Item key="add">
                <Link href="/admin/products/add" passHref>
                  Add Product
                </Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="orders" icon={<ShopOutlined />}>
              <Link href="/admin/orders" passHref>
                Orders
              </Link>
            </Menu.Item>
            <Menu.Item key="users" icon={<TeamOutlined />}>
              <Link href="/admin/users" passHref>
                Users
              </Link>
            </Menu.Item>
            <Menu.Item key="shops" icon={<TeamOutlined />}>
              <Link href="/admin/shops" passHref>
                Shops
              </Link>
            </Menu.Item>
            <Menu.Item key="tickets" icon={<TagOutlined />}>
              <Link href="/admin/tickets" passHref>
                Manage Ticket
              </Link>
            </Menu.Item>
          </>
        )}
        {maximumRole === "vendor" && (
          <>
            <Menu.Item key="vendor" disabled icon={<LineChartOutlined />}>
              <Link href="/vendor" passHref>
                Dashboard
              </Link>
            </Menu.Item>
            <Menu.Item key="products" disabled icon={<HddOutlined />}>
              <Link href="/vendor/products" passHref>
                My Products
              </Link>
            </Menu.Item>
            <Menu.Item key="add" disabled icon={<PlusOutlined />}>
              <Link href="/vendor/add" passHref>
                Add Product
              </Link>
            </Menu.Item>
            <Menu.Item key="update" disabled icon={<EditOutlined />}>
              <Link href="/vendor/update" passHref>
                Update Product
              </Link>
            </Menu.Item>
            <Menu.Item key="delete" disabled icon={<DeleteOutlined />}>
              <Link href="/vendor/delete" passHref>
                Remove Product
              </Link>
            </Menu.Item>
            <Menu.Item key="profile" icon={<UserOutlined />}>
              <Link href="/vendor/profile" passHref>
                My Profile
              </Link>
            </Menu.Item>
          </>
        )}

        {maximumRole === "customer" && (
          <>
            <Menu.Item key="customer" icon={<DashboardOutlined />}>
              <Link href="/customer" passHref>
                Dashboard
              </Link>
            </Menu.Item>

            <Menu.Item key="orders" icon={<ShopOutlined />}>
              <Link href="/customer/orders" passHref>
                My Orders
              </Link>
            </Menu.Item>

            <Menu.Item key="tickets" icon={<TagOutlined />}>
              <Link href="/customer/tickets" passHref>
                Tickets
              </Link>
            </Menu.Item>
          </>
        )}
      </Menu>
    </div>
  );
};

export default AdminMenu;
