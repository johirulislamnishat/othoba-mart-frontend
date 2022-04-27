import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import Head from "next/head";
import React, { useState } from "react";
import Foter from "../shared/footer";
import VendorMenu from "./others/VendorMenu";
import AdminTop from "./others/adminTop";

const VendorLayout = ({ title, children, pageTitle, child = false }) => {
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
				<VendorMenu collapsed={collapsed} />
			</Sider>

			<Layout className={`${collapsed ? "ml-20" : "ml-52"}`}>
				<AdminTop pageTitle={pageTitle} child={child} />
				<Content
					style={{
						minHeight: "90vh",
						marginTop: "2.5rem",
					}}
				>
					<div className="pl-4 pr-5">{children}</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>
					<Foter />
				</Footer>
			</Layout>
		</Layout>
	);
};

export default VendorLayout;
