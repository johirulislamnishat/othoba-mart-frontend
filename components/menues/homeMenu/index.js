import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Menu, Row } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useProvider from "../../../hooks/useProvider";
import { DrawerTitle } from "../../shared/footer/drawerTitle";

const { SubMenu } = Menu;

const HomeMenu = ({ visible, setVisible }) => {
  const [showTrack, setShowTrack] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    setLoading(true);
    setShowTrack(!showTrack);
    router
      .push(`/dashboard/admin/orders/trackOrder/${values.track_number}`)
      .then(() => {
        form.resetFields();
        setLoading(false);
      });
  };

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
                onClick={(e) => {
                  setShowMenu(!showMenu);
                  router.push("/shop");
                }}
              >
                <Menu.Item key="2">
                  <Link href="/shop" passHref>
                    Fashion
                  </Link>{" "}
                </Menu.Item>
                <Menu.Item key="3">Electronics</Menu.Item>
                <Menu.Item key="4">Gifts</Menu.Item>
                <Menu.Item key="5">Garden</Menu.Item>
                <Menu.Item key="6">Music</Menu.Item>
                <Menu.Item key="7">Motors</Menu.Item>
                <Menu.Item key="8">Furniture</Menu.Item>
                {/* <Menu.Item key="9">VIEW ALL &gt;</Menu.Item> */}
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
                <Link href="/shop">Shop</Link>
              </Menu.Item>

              <Menu.Item key="3">
                <Link href="/about">About Us</Link>
              </Menu.Item>

              <SubMenu key="SubMenu3" title="Suport">
                <Menu.Item key="contact">
                  <Link href="/contact">Contact Us</Link>
                </Menu.Item>
                <Menu.Item key="support">
                  <Link href="/support">Support</Link>
                </Menu.Item>
                <Menu.Item key="products:4">
                  <Link href="/policy">Privacy Policy</Link>
                </Menu.Item>
                <Menu.Item key="products:5">
                  <Link href="/terms">Terms & Conditions</Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="4">
                <Link href="/faq">FAQs</Link>
              </Menu.Item>
              <Menu.Item key="blogs">
                <Link href="/blogs">Blogs</Link>
              </Menu.Item>

              {/* {user.isVendor && (
                <Menu.Item key="5">
                  <Link href="/dashboard/vendor">Admin</Link>
                </Menu.Item>
              )} */}
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
          className="pl-5 sm:pl-32 md:pl-0 lg:pl-0 xl:pl-16"
        >
          <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
            {user.isCustomer && (
              <Menu.Item key="1">
                <Link href="/auth/register" passHref>
                  Become a Seller
                </Link>
              </Menu.Item>
            )}
            <Menu.Item key="2">
              <span
                onClick={() => setShowTrack(!showTrack)}
                className="relative"
              >
                Track Order
              </span>
              {showTrack && (
                <div className="absolute z-10 top-10 right-0 bg-white px-5 pt-5 shadow w-64">
                  <div className="relative">
                    <div className="absolute z-10 -top-3 right-1">
                      <CloseOutlined
                        style={{
                          color: "black",
                          fontSize: "1rem",
                        }}
                        onClick={() => setShowTrack(false)}
                      />
                    </div>
                    <p className="text-xl font-bold">Track My order</p>
                    <Form
                      form={form}
                      name="Track order"
                      layout="vertical"
                      requiredMark={false}
                      initialValues={{ remember: true }}
                      onFinish={handleSubmit}
                    >
                      <Form.Item
                        label="My tracking number"
                        name="track_number"
                        hasFeedback
                        validateFirst
                        rules={[
                          {
                            required: true,
                            message: "Please enter your tracking number!",
                          },
                        ]}
                      >
                        <Input placeholder="eg. 123456789" allowClear />
                      </Form.Item>
                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          shape="round"
                          block
                          disabled={loading}
                          loading={loading}
                        >
                          Track
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              )}
            </Menu.Item>
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
            <Link href="/shop">Shop</Link>
          </Menu.Item>

          <Menu.Item key="3">
            <Link href="/about">About Us</Link>
          </Menu.Item>

          <SubMenu key="SubMenu3" title="Suport">
            <Menu.Item key="contact">
              <Link href="/contact">Contact Us</Link>
            </Menu.Item>
            <Menu.Item key="support">
              <Link href="/support">Support</Link>
            </Menu.Item>
            <Menu.Item key="products:4">
              <Link href="/policy">Privacy Policy</Link>
            </Menu.Item>
            <Menu.Item key="products:5">
              <Link href="/terms">Terms & Conditions</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="4">
            <Link href="/faq">FAQs</Link>
          </Menu.Item>
          <Menu.Item key="blogs">
            <Link href="/blogs">Blogs</Link>
          </Menu.Item>

          {/* {user.isVendor && (
            <Menu.Item key="5">
              <Link href="/dashboard/vendor">Admin</Link>
            </Menu.Item>
          )} */}
        </Menu>
      </Drawer>
    </>
  );
};

export default HomeMenu;
