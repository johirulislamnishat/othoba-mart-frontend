import {
  DeleteOutlined,
  EditOutlined,
  HddOutlined,
  LineChartOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Image, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import useProvider from "../../../hooks/useProvider";

const VendorMenu = ({ collapsed }) => {
  const {
    state: { user },
  } = useProvider();
  //      console.log(user.message)
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
        {user.message ? (
          <>
            <Menu.Item key="vendor" disabled icon={<LineChartOutlined />}>
              <Link href="/vendor" passHref>
                Dashboard
              </Link>
            </Menu.Item>
            <Menu.Item key="products" disabled icon={<HddOutlined />}>
              <Link href="/vendor/products" passHref>
                My Products
              </Link>
            </Menu.Item>
            <Menu.Item key="add" disabled icon={<PlusOutlined />}>
              <Link href="/vendor/add" passHref>
                Add Product
              </Link>
            </Menu.Item>
            <Menu.Item key="update" disabled icon={<EditOutlined />}>
              <Link href="/vendor/update" passHref>
                Update Product
              </Link>
            </Menu.Item>
            <Menu.Item key="delete" disabled icon={<DeleteOutlined />}>
              <Link href="/vendor/delete" passHref>
                Remove Product
              </Link>
            </Menu.Item>
            <Menu.Item key="profile" icon={<UserOutlined />}>
              <Link href="/vendor/profile" passHref>
                My Profile
              </Link>
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item key="vendor" icon={<LineChartOutlined />}>
              <Link href="/vendor" passHref>
                Dashboard
              </Link>
            </Menu.Item>
            <Menu.Item key="products" icon={<HddOutlined />}>
              <Link href="/vendor/products" passHref>
                My Products
              </Link>
            </Menu.Item>
            <Menu.Item key="add" icon={<PlusOutlined />}>
              <Link href="/vendor/add" passHref>
                Add Product
              </Link>
            </Menu.Item>
            <Menu.Item key="update" icon={<EditOutlined />}>
              <Link href="/vendor/update" passHref>
                Update Product
              </Link>
            </Menu.Item>
            <Menu.Item key="delete" icon={<DeleteOutlined />}>
              <Link href="/vendor/delete" passHref>
                Remove Product
              </Link>
            </Menu.Item>
            <Menu.Item key="profile" icon={<UserOutlined />}>
              <Link href="/vendor/profile" passHref>
                My Profile
              </Link>
            </Menu.Item>
          </>
        )}
      </Menu>
    </div>
  );
};

export default VendorMenu;
