import {
    AppstoreOutlined,
    GiftOutlined,
    MailOutlined,
    MenuOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Col, Drawer, Menu, Row } from "antd";
import React, { useState } from "react";
import Link from "next/link";

const { SubMenu } = Menu;

const HomeMenu = () => {
    const [visible, setVisible] = useState(false);

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
                        <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
                            <Menu.Item key="1">Home</Menu.Item>
                            <Menu.Item key="2">Vendor</Menu.Item>
                            <Menu.Item key="3">Categories</Menu.Item>
                            <Menu.Item key="4">Products</Menu.Item>
                            <Menu.Item key="5">Blogs</Menu.Item>
                            <Menu.Item key="6">Features</Menu.Item>
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
                    <Menu mode="horizontal" defaultSelectedKeys={["0"]}>
                        <Menu.Item key="1">
                            <Link href="/login">
                                <a>
                                    <span className="text-blue font-semibold cursor-pointer">
                                        Log In
                                    </span>
                                </a>
                            </Link>
                        </Menu.Item>
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
                    style={{ width: 256 }}
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
