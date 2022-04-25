import {
	LineChartOutlined,
	ProfileOutlined,
	UserOutlined,
	HddOutlined,
	PlusOutlined,
	EditOutlined,
	DeleteOutlined,
	GoldOutlined,
	ShopOutlined,
	TeamOutlined
} from "@ant-design/icons";
import { Image, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import useProvider from '../../../hooks/useProvider'

const { SubMenu } = Menu;

const VendorMenu = ({ collapsed }) => {
	const { state:{ user }} = useProvider()
     console.log(user.message)
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
				 
				 <Menu.Item key="coupon" icon={<ShopOutlined />}>
					 <Link href="/vendor/coupon" passHref>
						 Coupon
					 </Link>
				 </Menu.Item>
				 <Menu.Item key="profile" icon={<ProfileOutlined />}>
					 <Link href="/vendor/profile" passHref>
						 Profile
					 </Link>
				 </Menu.Item>
			 </Menu>
		 </div>
	 );
};

export default VendorMenu;
