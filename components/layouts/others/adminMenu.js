import {
    ContainerOutlined,
    DashboardOutlined,
    GoldOutlined,
    HddOutlined,
    LineChartOutlined,
    PlusOutlined,
    ShopOutlined,
    TagOutlined,
    TeamOutlined,
    UserOutlined,
    InboxOutlined,
} from "@ant-design/icons";
import { Image, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
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
                        className={`${
                            collapsed ? "px-1 py-5" : "px-8 py-5"
                        } mb-3`}
                    />
                </div>
            </Link>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={pageName[pageName.length - 1]}
                defaultOpenKeys={
                    pageName.length > 4
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
                        <SubMenu
                            key="PRODUCTS"
                            icon={<GoldOutlined />}
                            title="Products"
                        >
                            <Menu.Item key="products">
                                <Link href="/dashboard/admin/products" passHref>
                                    Products
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="add">
                                <Link
                                    href="/dashboard/admin/products/add"
                                    passHref
                                >
                                    Add Product
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="orders" icon={<ShopOutlined />}>
                            <Link href="/dashboard/admin/orders" passHref>
                                Orders
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="users" icon={<TeamOutlined />}>
                            <Link href="/dashboard/admin/users" passHref>
                                Users
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="shops" icon={<TeamOutlined />}>
                            <Link href="/dashboard/admin/shops" passHref>
                                Shops
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="tickets" icon={<TagOutlined />}>
                            <Link href="/dashboard/admin/tickets" passHref>
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
                        <SubMenu
                            key="PRODUCTS"
                            icon={<GoldOutlined />}
                            title="Products"
                        >
                            <Menu.Item key="products">
                                <Link href="/dashboard/admin/products" passHref>
                                    Products
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="add">
                                <Link
                                    href="/dashboard/admin/products/add"
                                    passHref
                                >
                                    Add Product
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="orders" icon={<ShopOutlined />}>
                            <Link href="/dashboard/admin/orders" passHref>
                                Orders
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="users" icon={<TeamOutlined />}>
                            <Link href="/dashboard/admin/users" passHref>
                                Users
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="shops" icon={<TeamOutlined />}>
                            <Link href="/dashboard/admin/shops" passHref>
                                Shops
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="tickets" icon={<TagOutlined />}>
                            <Link href="/dashboard/admin/tickets" passHref>
                                Manage Ticket
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="BLOGS"
                            icon={<ContainerOutlined />}
                            title="Blogs"
                        >
                            <Menu.Item key="blogs">
                                <Link href="/dashboard/admin/blogs" passHref>
                                    Blogs
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="addBlog">
                                <Link
                                    href="/dashboard/admin/blogs/addBlog"
                                    passHref
                                >
                                    Add Blog
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="chatbox" icon={<InboxOutlined />}>
                            <Link href="/chat" passHref>
                                Chat
                            </Link>
                        </Menu.Item>
                    </>
                )}
                {maximumRole === "vendor" && (
                    <>
                        <Menu.Item key="vendor" icon={<LineChartOutlined />}>
                            <Link href="/dashboard/vendor">Dashboard</Link>
                        </Menu.Item>
                        <Menu.Item key="products" icon={<HddOutlined />}>
                            <Link href="/dashboard/vendor/products">
                                My Products
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="add" icon={<PlusOutlined />}>
                            <Link href="/dashboard/vendor/products/add">
                                Add Product
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="orders" icon={<ShopOutlined />}>
                            <Link href="/dashboard/vendor/orders">Orders</Link>
                        </Menu.Item>
                        <Menu.Item key="chatbox" icon={<InboxOutlined />}>
                            <Link href="/chat" passHref>
                                Chat
                            </Link>
                        </Menu.Item>
                        {/* <Menu.Item key="profile" icon={<UserOutlined />}>
              <Link href="/dashboard/vendor/profile">My Profile</Link>
            </Menu.Item> */}
                    </>
                )}

                {maximumRole === "customer" && (
                    <>
                        <Menu.Item key="customer" icon={<DashboardOutlined />}>
                            <Link href="/dashboard/customer" passHref>
                                Dashboard
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="orders" icon={<ShopOutlined />}>
                            <Link href="/dashboard/customer/orders" passHref>
                                My Orders
                            </Link>
                        </Menu.Item>

                        <Menu.Item key="tickets" icon={<TagOutlined />}>
                            <Link href="/dashboard/customer/tickets" passHref>
                                Tickets
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="chatbox" icon={<InboxOutlined />}>
                            <Link href="/chat" passHref>
                                Chat
                            </Link>
                        </Menu.Item>
                    </>
                )}
            </Menu>
        </div>
    );
};

export default AdminMenu;
