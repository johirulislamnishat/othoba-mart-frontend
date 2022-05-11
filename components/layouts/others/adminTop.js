import {
  BellOutlined,
  DashboardOutlined,
  GoldOutlined,
  MenuOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  ShopOutlined,
  TeamOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { Drawer, Dropdown, Menu, PageHeader, Image } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import useProvider from "../../../hooks/useProvider";
import { DrawerTitle } from "../../shared/footer/drawerTitle";

const { SubMenu } = Menu;

const AdminTop = ({ pageTitle, child }) => {
  const {
    state: { user },
  } = useProvider();
  // console.log(user);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pageName = router.pathname.split("/");

  const menu = (
    <Menu>
      <Menu.Item key={1}>
        <Link href="" passHref>
          Profile
        </Link>
      </Menu.Item>
      <Menu.Item key={2}>
        <Link href="/auth/login" passHref>
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );
  const customTitle = (
    <div className="flex items-center w-full">
      <div className="block lg:hidden flex items-center h-full">
        <MenuOutlined
          className="text-xl pr-3 text-black"
          onClick={() => setOpen(!open)}
        />
      </div>

      <span>{pageTitle || "Dashboard"}</span>
    </div>
  );

  const drawerTitle = (
    <Link href="/" passHref>
      <div className="text-center">
        <Image
          preview={false}
          src="/othoba-mart-logo-light.png"
          alt="Othoba Mart"
        />
      </div>
    </Link>
  );

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
    <>
      <PageHeader
        className="site-page-header"
        title={customTitle}
        ghost={false}
        onBack={child ? () => window.history.back() : false}
        extra={[
          <SearchOutlined
            key={1}
            className="text-xl"
            style={{ color: "#f66a05" }}
          />,
          <BellOutlined
            key={2}
            className="text-xl mx-3"
            style={{ color: "#f66a05" }}
          />,
          <Dropdown overlay={menu} key={3}>
            <QuestionCircleOutlined
              className="text-xl"
              style={{ color: "#f66a05" }}
            />
          </Dropdown>,
        ]}
      />
      <Drawer
        title={drawerTitle}
        placement="left"
        onClose={() => setOpen(!open)}
        visible={open}
        width={280}
      >
        <Menu
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
                <Link href="/dashboard/admin" passHref>
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
                <Link href="/dashboard/admin" passHref>
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
              <Menu.Item key="admin" icon={<DashboardOutlined />}>
                <Link href="/dashboard/vendor" passHref>
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
          {maximumRole === "customer" && (
            <>
              <Menu.Item key="admin" icon={<DashboardOutlined />}>
                <Link href="/dashboard/customer" passHref>
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
      </Drawer>
    </>
  );
};

export default AdminTop;
