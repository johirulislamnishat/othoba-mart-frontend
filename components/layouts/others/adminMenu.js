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

const AdminMenu = ({ collapsed }) => {
	const router = useRouter();
	const pageName = router.pathname.split("/");

	return (
		<div>
			<div className="text-center">
				<Image
					preview={false}
					src="/othoba-mart-logo.png"
					alt="Othoba Mart"
					className={`${collapsed ? "px-1 py-5" : "px-12 py-5"} mb-3`}
				/>
			</div>
			<Menu
				theme="dark"
				mode="inline"
				defaultSelectedKeys={pageName[pageName.length - 1]}
			>
				<Menu.Item key="admin" icon={<DashboardOutlined />}>
					<Link href="/admin" passHref>
						Dashboard
					</Link>
				</Menu.Item>
				<Menu.Item key="products" icon={<GoldOutlined />}>
					<Link href="/admin/products" passHref>
						Products
					</Link>
				</Menu.Item>
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
