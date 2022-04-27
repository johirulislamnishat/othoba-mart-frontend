import { Drawer, Dropdown, Image, Menu, PageHeader } from "antd";
import { MenuOutlined, SearchOutlined, BellOutlined, QuestionCircleOutlined, LineChartOutlined, GoldOutlined, HddOutlined, PlusOutlined, EditOutlined, DeleteOutlined, ShopOutlined, ProfileOutlined } from '@ant-design/icons'
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const { SubMenu } = Menu;

const VendorTop = ({pageTitle, child}) => {
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
				//  theme="dark"
				 mode="inline"
				 defaultSelectedKeys={pageName[pageName.length - 1]}
				 defaultOpenKeys={
					 pageName.length > 3
						 ? [pageName[pageName.length - 2].toUpperCase()]
						 : [pageName[pageName.length - 1].toUpperCase()]
				 }
			 >
				 <Menu.Item key="vendor" icon={<LineChartOutlined />}>
					 <Link href="/vendor" passHref>
						 Dashboard
					 </Link>
				 </Menu.Item>
				 <SubMenu
					 key="PRODUCTS"
					 icon={<GoldOutlined />}
					 title="Products"
				 >
					 <Menu.Item key="products" icon={<HddOutlined />} >
						 <Link href="/vendor/products" passHref>
							 Products
						 </Link>
					 </Menu.Item>
					 <Menu.Item key="add" icon={<PlusOutlined />} >
						 <Link href="/vendor/products/add" passHref>
							 Add Product
						 </Link>
					 </Menu.Item>
					 <Menu.Item key="update" icon={<EditOutlined />}>
					 <Link href="/vendor/products/update" passHref>
						 Update Product
					 </Link>
				 </Menu.Item>
				 <Menu.Item key="remove" icon={<DeleteOutlined />}>
					 <Link href="/vendor/products/remove" passHref>
						 Remove Product
					 </Link>
				 </Menu.Item>
				 </SubMenu>
				 <Menu.Item key="profile" icon={<ProfileOutlined />}>
					 <Link href="/vendor/profile" passHref>
						 Profile
					 </Link>
				 </Menu.Item>
			 </Menu>
			</Drawer>
		</>
	);
}

export default VendorTop