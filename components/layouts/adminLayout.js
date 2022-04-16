import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import Head from "next/head";
import React, { useState } from "react";
import Foter from "../shared/footer";
import AdminTop from "./others/adminTop";

const AdminLayout = ({ title, children, pageTitle, child = false }) => {
	const [collapsed, setCollapsed] = useState(false);

	const toggle = () => {
		setCollapsed(!collapsed);
	};
	const onSearch = (e) => {
		console.log(e);
	};

	return (
		<Layout hasSider>
			<Head>
				<title>{title || "Othoba Mart"}</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={toggle}
				style={{ position: "fixed", height: "100vh" }}
			>
				<div>
					<div className="text-white py-3 text-center">
						Othoba Mart
					</div>
					<Menu
						theme="dark"
						mode="inline"
						defaultSelectedKeys={["1"]}
					>
						<Menu.Item key="1" icon={<UserOutlined />}>
							Home
						</Menu.Item>
						<Menu.Item key="2" icon={<VideoCameraOutlined />}>
							Home
						</Menu.Item>
						<Menu.Item key="3" icon={<UploadOutlined />}>
							Home
						</Menu.Item>
					</Menu>
				</div>
			</Sider>

			<Layout className={`${collapsed ? "ml-20" : "ml-52"} pl-4 pr-5`}>
				<AdminTop pageTitle={pageTitle} child={child} />
				<Content
					style={{
						minHeight: "90vh",
						marginTop: "2.5rem",
					}}
				>
					<div>{children}</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>
					<Foter />
				</Footer>
			</Layout>
		</Layout>
	);
};

export default AdminLayout;
