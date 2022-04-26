import { MenuOutlined } from "@ant-design/icons";
import { Col, Drawer, Menu, Row } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useProvider from "../../../hooks/useProvider";
import { DrawerTitle } from "../../shared/footer/drawerTitle";

const { SubMenu } = Menu;

const HomeMenu = ({ visible, setVisible }) => {
	const [isHome, setIsHome] = useState(true);
	const [showMenu, setShowMenu] = useState(false);
	const {
		state: { user },
	} = useProvider();
	const router = useRouter();

	useEffect(() => {
		const routes = router.asPath.split("/");
		if (routes[1] === "") {
			setIsHome(true);
		} else {
			setIsHome(false);
		}
	}, [router]);

	return (
		<>
			<Row>
				<Col xs={0} lg={4}>
					<div
						className={`bg-black text-white h-full flex justify-center items-center relative ${
							isHome ? "cursor-default" : "cursor-pointer"
						}`}
						onClick={() =>
							isHome ? setShowMenu(false) : setShowMenu(!showMenu)
						}
					>
						<MenuOutlined />
						<div className="ml-3">Sort by Category</div>
					</div>
					{showMenu && (
						<div className="absolute z-10 top-14 w-full shadow">
							<Menu
								mode="inline"
								onClick={(e) => setShowMenu(!showMenu)}
							>
								<Menu.Item key="2">Fashion</Menu.Item>
								<Menu.Item key="3">Electronics</Menu.Item>
								<Menu.Item key="4">Gifts</Menu.Item>
								<Menu.Item key="5">Garden</Menu.Item>
								<Menu.Item key="6">Music</Menu.Item>
								<Menu.Item key="7">Motors</Menu.Item>
								<Menu.Item key="8">Furniture</Menu.Item>
								<Menu.Item key="9">VIEW ALL &gt;</Menu.Item>
							</Menu>
						</div>
					)}
				</Col>
				<Col xs={7} md={16} lg={14}>
					<div className="hidden lg:block">
						<Menu selectedKeys={["1"]} mode="horizontal">
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
								<Link href="/about" passHref>
									About Us
								</Link>
							</Menu.Item>

							<SubMenu key="SubMenu3" title="Suport">
								<Menu.Item key="contact">
									<Link href="/contact" passHref>
										Contact Us
									</Link>{" "}
								</Menu.Item>
								<Menu.Item key="support">
									<Link href="/support" passHref>
										Support
									</Link>
								</Menu.Item>
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
								<Link href="/faq" passHref>
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
				title={DrawerTitle}
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
						<Link href="/about" passHref>
							About Us
						</Link>
					</Menu.Item>

					<SubMenu key="SubMenu3" title="Suport">
						<Menu.Item key="contact">
							<Link href="/contact" passHref>
								Contact Us
							</Link>{" "}
						</Menu.Item>
						<Menu.Item key="support">
							<Link href="/support" passHref>
								Support
							</Link>
						</Menu.Item>
						<Menu.Item key="products:3">Track Order</Menu.Item>
						<Menu.Item key="products:4">Privacy Policy</Menu.Item>
						<Menu.Item key="products:5">
							Terms & Conditions
						</Menu.Item>
					</SubMenu>
					<Menu.Item key="4">
						<Link href="/faq" passHref>
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
			</Drawer>
		</>
	);
};

export default HomeMenu;
