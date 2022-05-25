import {
	BellOutlined,
	ContainerOutlined,
	DashboardOutlined,
	GoldOutlined,
	HddOutlined,
	LineChartOutlined,
	MenuOutlined,
	PlusOutlined,
	QuestionCircleOutlined,
	SearchOutlined,
	ShopOutlined,
	TagOutlined,
	TeamOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Drawer, Dropdown, Image, Menu, PageHeader } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useProvider from "../../../hooks/useProvider";

const { SubMenu } = Menu;

const AdminTop = ({ pageTitle, child }) => {
	const {
		state: { user },
	} = useProvider();
	const { isLogin, logout } = useAuth();

	const [open, setOpen] = useState(false);
	const router = useRouter();
	const pageName = router.pathname.split("/");
	const [menu, setMenu] = useState(
		<Menu>
			<Menu.Item key="3" danger>
				<Link href="/auth/login" passHref>
					SignIn
				</Link>
			</Menu.Item>
		</Menu>
	);

	useEffect(() => {
		setMenu(
			<Menu>
				<Menu.Item key={1}>
					<Link href="" passHref>
						Profile
					</Link>
				</Menu.Item>
				{isLogin ? (
					<Menu.Item key={2}>
						<button className="bg-transparent" onClick={logout}>
							Sign Out
						</button>
					</Menu.Item>
				) : (
					<Menu.Item key="3" danger>
						<Link href="/auth/login" passHref>
							SignIn
						</Link>
					</Menu.Item>
				)}
			</Menu>
		);
	}, [isLogin, logout]);

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
							<SubMenu key="PRODUCTS" icon={<GoldOutlined />} title="Products">
								<Menu.Item key="products">
									<Link href="/dashboard/admin/products" passHref>
										Products
									</Link>
								</Menu.Item>
								<Menu.Item key="add">
									<Link href="/dashboard/admin/products/add" passHref>
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
							<SubMenu key="PRODUCTS" icon={<GoldOutlined />} title="Products">
								<Menu.Item key="products">
									<Link href="/dashboard/admin/products" passHref>
										Products
									</Link>
								</Menu.Item>
								<Menu.Item key="add">
									<Link href="/dashboard/admin/products/add" passHref>
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
							<SubMenu key="BLOGS" icon={<ContainerOutlined />} title="Blogs">
								<Menu.Item key="blogs">
									<Link href="/dashboard/admin/blogs" passHref>
										Blogs
									</Link>
								</Menu.Item>
								<Menu.Item key="addBlog">
									<Link href="/dashboard/admin/blogs/addBlog" passHref>
										Add Blog
									</Link>
								</Menu.Item>
							</SubMenu>
						</>
					)}
					{maximumRole === "vendor" && (
						<>
							<Menu.Item key="vendor" icon={<LineChartOutlined />}>
								<Link href="/dashboard/vendor">Dashboard</Link>
							</Menu.Item>
							<Menu.Item key="products" icon={<HddOutlined />}>
								<Link href="/dashboard/vendor/products">My Products</Link>
							</Menu.Item>
							<Menu.Item key="add" icon={<PlusOutlined />}>
								<Link href="/dashboard/vendor/products/add">Add Product</Link>
							</Menu.Item>
							<Menu.Item key="orders" icon={<ShopOutlined />}>
								<Link href="/dashboard/vendor/orders">Orders</Link>
							</Menu.Item>
							<Menu.Item key="profile" icon={<UserOutlined />}>
								<Link href="/dashboard/vendor/profile">My Profile</Link>
							</Menu.Item>
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
						</>
					)}
				</Menu>
			</Drawer>
		</>
	);
};

export default AdminTop;
