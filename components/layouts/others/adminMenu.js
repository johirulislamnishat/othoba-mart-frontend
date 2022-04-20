import {
	DashboardOutlined,
	GoldOutlined,
	ShopOutlined,
	TeamOutlined,
} from "@ant-design/icons";
import { Image, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const { SubMenu } = Menu;

const AdminMenu = ({ collapsed }) => {
	const router = useRouter();
	const pageName = router.pathname.split("/");

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
					pageName.length > 3
						? [pageName[pageName.length - 2].toUpperCase()]
						: [pageName[pageName.length - 1].toUpperCase()]
				}
			>
				<Menu.Item key="admin" icon={<DashboardOutlined />}>
					<Link href="/admin" passHref>
						Dashboard
					</Link>
				</Menu.Item>
				<SubMenu
					key="PRODUCTS"
					icon={<GoldOutlined />}
					title="Products"
				>
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
			</Menu>
		</div>
	);
};

export default AdminMenu;
