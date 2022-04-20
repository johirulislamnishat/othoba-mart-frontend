import {
	AppstoreOutlined,
	GiftOutlined,
	MailOutlined,
	MenuOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import { Col, Drawer, Menu, Row } from "antd";
import Link from "next/link";
import React from "react";
import useProvider from '../../../hooks/useProvider'

const { SubMenu } = Menu;

const HomeMenu = ({ visible, setVisible }) => {
	const { state:{user} } = useProvider()

	return (
		<>
			<Row>
				<Col xs={0} lg={4}>
					<div className="bg-black text-white h-full flex justify-center items-center">
						<MenuOutlined />
						<div className="ml-3">Sort by Category</div>
					</div>
				</Col>
				<Col xs={7} md={16} lg={14}>
					<div className="hidden lg:block">
						<Menu
							onClick={(e) => console.log(e)}
							selectedKeys={["1"]}
							mode="horizontal"
						>
							<Menu.Item key="1">
								<Link href="/" passHref>
									Home
								</Link>
							</Menu.Item>

							<Menu.Item key="2">
								<Link href="/categories" passHref>
									Categories
								</Link>
							</Menu.Item>

							<Menu.Item key="3">
								<Link href="/" passHref>
									About Us
								</Link>
							</Menu.Item>

							<SubMenu key="SubMenu3" title="Suport">
								<Menu.Item key="products:1">
									Contact US
								</Menu.Item>
								<Menu.Item key="products:2">Support</Menu.Item>
								<Menu.Item key="products:3">
									Track Order
								</Menu.Item>
								<Menu.Item key="products:4">
									Privacy Policy
								</Menu.Item>
								<Menu.Item key="products:5">
									Terms & Conditions
								</Menu.Item>
							</SubMenu>
							<Menu.Item key="4">
								<Link href="/" passHref>
									FAQs
								</Link>
							</Menu.Item>

							{user.isVendor && (
								<Menu.Item key="5">
									<Link href="/admin" passHref>
										Admin
									</Link>
								</Menu.Item>
							)}
						</Menu>
					</div>

					<div className="block lg:hidden flex items-center h-full">
						<MenuOutlined
							className="text-xl pl-3"
							onClick={() => setVisible(!visible)}
						/>
					</div>
				</Col>
				<Col
					xs={17}
					md={8}
					lg={6}
					className="pl-5 sm:pl-32 md:pl-0 lg:pl-8 xl:pl-16"
				>
					<Menu mode="horizontal" defaultSelectedKeys={["1"]}>
						{user.isCustomer && (
							<Menu.Item key="1">
								<Link href="/auth/register" passHref>
									Become a Seller
								</Link>
							</Menu.Item>
						)}
						<Menu.Item key="2">USD</Menu.Item>
					</Menu>
				</Col>
			</Row>

			<Drawer
				title="Othoba Mart"
				placement="right"
				onClose={() => setVisible(!visible)}
				visible={visible}
				width={280}
			>
				<Menu
					mode="inline"
					defaultSelectedKeys={["1"]}
					defaultOpenKeys={["sub1"]}
				>
					<SubMenu key="sub1" icon={<MailOutlined />} title="Home">
						<Menu.Item key="1">Option 1</Menu.Item>
						<Menu.Item key="2">Option 2</Menu.Item>
						<Menu.Item key="3">Option 3</Menu.Item>
						<Menu.Item key="4">Option 4</Menu.Item>
					</SubMenu>

					<SubMenu
						key="sub2"
						icon={<AppstoreOutlined />}
						title="Vendor"
					>
						<Menu.Item key="5">Option 5</Menu.Item>
						<Menu.Item key="6">Option 6</Menu.Item>
					</SubMenu>

					<SubMenu key="sub3" icon={<GiftOutlined />} title="Gifts">
						<Menu.Item key="7">Option 7</Menu.Item>
						<Menu.Item key="8">Option 8</Menu.Item>
					</SubMenu>

					<SubMenu
						key="sub4"
						icon={<SettingOutlined />}
						title="Categories"
					>
						<Menu.Item key="9">Option 9</Menu.Item>
						<Menu.Item key="10">Option 10</Menu.Item>
						<Menu.Item key="11">Option 11</Menu.Item>
						<Menu.Item key="12">Option 12</Menu.Item>
					</SubMenu>

					<SubMenu
						key="sub5"
						icon={<AppstoreOutlined />}
						title="Products"
					>
						<Menu.Item key="13">Option 13</Menu.Item>
						<Menu.Item key="14">Option 14</Menu.Item>
						<Menu.Item key="15">Option 15</Menu.Item>
						<Menu.Item key="16">Option 16</Menu.Item>
					</SubMenu>
				</Menu>
			</Drawer>
		</>
	);
};

export default HomeMenu;
