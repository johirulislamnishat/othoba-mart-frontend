import { MenuOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";

const HomeMenu = () => {
	return (
		<div className="grid grid-cols-6">
			<div className="bg-black text-white col-start-1 col-end-2 flex justify-center items-center">
				<MenuOutlined />
				<div className="ml-3">Sort by Category</div>
			</div>
			<div className="col-start-2 col-span-4">
				<Menu mode="horizontal" defaultSelectedKeys={["1"]}>
					<Menu.Item key="1">Home</Menu.Item>
					<Menu.Item key="2">Vendor</Menu.Item>
					<Menu.Item key="3">Categories</Menu.Item>
					<Menu.Item key="4">Products</Menu.Item>
					<Menu.Item key="5">Blog</Menu.Item>
					<Menu.Item key="6">Features</Menu.Item>
				</Menu>
			</div>
			<div className="col-end-8 col-span-2">
				<Menu mode="horizontal" defaultSelectedKeys={["0"]}>
					<Menu.Item key="1">Become a Seller</Menu.Item>
					<Menu.Item key="2">USD</Menu.Item>
				</Menu>
			</div>
		</div>
	);
};

export default HomeMenu;
