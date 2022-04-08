import {
  CarOutlined,
  CheckCircleOutlined,
  CreditCardOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { Button, Carousel, Col, Divider, Image, Menu, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";

const HomeHeader = () => {
  return (
      <div className="mt-3">
          <Row gutter={[16, 16]}>
              {/* left menu */}
              <Col xs={0} md={0} lg={4} className="mt-5">
                  <Menu defaultSelectedKeys={["1"]} mode="inline">
                      <Menu.Item key="1">Home</Menu.Item>
                      <Menu.Item key="2">Fashion</Menu.Item>
                      <Menu.Item key="3">Electronics</Menu.Item>
                      <Menu.Item key="4">Gifts</Menu.Item>
                      <Menu.Item key="5">Garden</Menu.Item>
                      <Menu.Item key="6">Music</Menu.Item>
                      <Menu.Item key="7">Motors</Menu.Item>
                      <Menu.Item key="8">Furniture</Menu.Item>
                      {/* <Menu.Item key="9">Trousers</Menu.Item>
            <Menu.Item key="10">VIEW ALL &gt;</Menu.Item> */}
                  </Menu>
              </Col>

              {/* Carousel */}
              <Col xs={24} md={24} lg={15}>
                  <Carousel autoplay>
                      <div>
                          <Image
                              width={"100%"}
                              src="https://www.portotheme.com/wordpress/porto/shop22/wp-content/uploads/sites/94/2019/06/shop22_home_slide1.jpg"
                              alt="banner"
                              preview={false}
                          />
                      </div>
                      <div>
                          <Image
                              width={"100%"}
                              src="https://www.portotheme.com/wordpress/porto/shop22/wp-content/uploads/sites/94/2019/06/shop22_home_slide2.jpg"
                              alt="banner2"
                              preview={false}
                          />
                      </div>
                  </Carousel>
              </Col>

              {/* right banner */}
              <Col xs={24} md={24} lg={5}>
                  <div className="bg-gray-700 text-center text-amber-500 p-5 mb-3">
                      <span className="text-lg font-black block">
                          Pro Buyer Exclusive
                      </span>
                      <p>Get payment terms and much more</p>

                      <button className="bg-amber-500 text-black w-full p-1 rounded-full">
                          Upgrade
                      </button>
                  </div>
                  <Button type="primary" className="mt-3" block>
                      Selected Machinery
                  </Button>

                  <Row align="middle" className="mt-5">
                      <Col xs={16}>
                          <Title level={5}>Woodworking Machinery</Title>
                      </Col>
                      <Col xs={6}>
                          <Image
                              src="http://springvalleymachinery.co.ke/wp-content/uploads/2020/11/IMG-20210225-WA0008.jpg"
                              alt="woodworking"
                              width={"100%"}
                              preview={false}
                          />
                      </Col>
                  </Row>
                  <Divider />

                  <Row align="middle">
                      <Col xs={16}>
                          <Title level={5}>Plastic Machinery</Title>
                      </Col>
                      <Col xs={6}>
                          <Image
                              src="https://m.plastic-recyclingequipment.com/photo/plastic-recyclingequipment/editor/20180829153605_87070.jpg"
                              alt="woodworking"
                              width={"100%"}
                              preview={false}
                          />
                      </Col>
                  </Row>
                  <Divider />

                  {/* <Row align="middle">
            <Col xs={20}>
              <Title level={4}>Laser & Machine Tool Equipment</Title>
            </Col>
            <Col xs={4}>
              <Image
                src="https://5.imimg.com/data5/UJ/DE/HP/IOS-1425623/product-jpeg-500x500.png"
                alt="woodworking"
                width={"100%"}
                preview={false}
              />
            </Col>
          </Row>
          <Divider /> */}
              </Col>
          </Row>

          <Row gutter={[16, 16]} align="middle" className="py-3 mt-3">
              <Col xs={24} md={12} xl={6}>
                  <Row gutter={[16, 16]} align="middle" justify="center">
                      <Col>
                          <CarOutlined className="text-3xl" />
                      </Col>
                      <Col>
                          <span className="block">FREE SHIPPING & RETURN</span>
                          <span className="block">
                              Free shipping on orders over $99
                          </span>
                      </Col>
                  </Row>
              </Col>

              <Col xs={24} md={12} xl={6}>
                  <Row gutter={[16, 16]} align="middle" justify="center">
                      <Col>
                          <DollarCircleOutlined className="text-3xl" />
                      </Col>
                      <Col>
                          <span className="block">MONEY BACK GUARANTEE</span>
                          <span className="block">
                              100% money back guarantee
                          </span>
                      </Col>
                  </Row>
              </Col>

              <Col xs={24} md={12} xl={6}>
                  <Row gutter={[16, 16]} align="middle" justify="center">
                      <Col>
                          <CheckCircleOutlined className="text-3xl" />
                      </Col>
                      <Col>
                          <span className="block">ONLINE SUPPORT 24/7</span>
                          <span className="block">
                              Lorem ipsum dolor sit amet.
                          </span>
                      </Col>
                  </Row>
              </Col>

              <Col xs={24} md={12} xl={6}>
                  <Row gutter={[16, 16]} align="middle" justify="center">
                      <Col>
                          <CreditCardOutlined className="text-3xl" />
                      </Col>
                      <Col>
                          <span className="block">SECURE PAYMENT</span>
                          <span className="block">
                              Lorem ipsum dolor sit amet.
                          </span>
                      </Col>
                  </Row>
              </Col>
          </Row>
      </div>
  );
};

export default HomeHeader;
