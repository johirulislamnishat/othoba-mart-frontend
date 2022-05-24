import {
  CarOutlined,
  CheckCircleOutlined,
  CreditCardOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { Button, Carousel, Col, Image, Menu, Row } from "antd";
import Title from "antd/lib/typography/Title";
import Router from "next/router";
import React from "react";
import Link from "next/link";

const HomeHeader = () => {
  return (
    <div className="mt-3">
      <Row gutter={[16, 16]} align="middle">
        {/* left menu */}
        <Col className="category-menu-home" xs={0} md={0} lg={4}>
          <Menu
            defaultSelectedKeys={["1"]}
            mode="inline"
            onClick={() => Router.push("/shop")}
          >
            <Menu.Item key="1">Electronics</Menu.Item>
            <Menu.Item key="2">Fashion</Menu.Item>
            <Menu.Item key="3">Sports</Menu.Item>
            <Menu.Item key="4">Gifts</Menu.Item>
            <Menu.Item key="5">Garden</Menu.Item>
            <Menu.Item key="6">Music</Menu.Item>
            <Menu.Item key="7">Motors</Menu.Item>
            <Menu.Item key="8">Furniture</Menu.Item>
            {/* <Menu.Item key="9">VIEW ALL &gt;</Menu.Item> */}
          </Menu>
        </Col>

        {/* Carousel */}
        <Col xs={24} md={24} lg={15}>
          <Carousel autoplay>
            <div className="relative">
              <Image
                width={"100%"}
                src="https://www.portotheme.com/wordpress/porto/shop22/wp-content/uploads/sites/94/2019/06/shop22_home_slide1.jpg"
                alt="banner"
                preview={false}
              />
              <div className="absolute z-10 top-0 right-3 sm:right-12 md:right-12 xl:right-20 h-full">
                <div className="flex h-full py-5 sm:py-12 md:py-16 lg:py-12 xl:py-24 flex-col justify-between">
                  <div className="text-right">
                    <span className="text-base md:text-3xl lg:text-2xl xl:text-3xl font-black block">
                      ELECTRONIC
                    </span>
                    <span className="text-base md:text-3xl lg:text-2xl xl:text-3xl font-black block">
                      DEALS
                    </span>
                  </div>

                  <div>
                    <span className="bg-gray-700 text-white text-xs sm:text-sm md:text-xl lg:text-base xl:text-xl font-bold inline-block mb-1 p-1 md:p-2">
                      Exclusive CUPON
                    </span>
                    <br />
                    <span className="bg-gray-700 text-white text-xs sm:text-sm md:text-xl lg:text-lg xl:text-2xl font-bold inline-block p-1 md:p-2 mr-1">
                      $100
                    </span>
                    <span className="font-bold text-xs sm:text-base">OFF</span>
                  </div>

                  <button
                    onClick={() => Router.push("/shop")}
                    className="bg-orange-500 text-white py-1 sm:py-2 text-xs sm:text-base rounded-full hover:bg-orange-400"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                width={"100%"}
                src="https://www.portotheme.com/wordpress/porto/shop22/wp-content/uploads/sites/94/2019/06/shop22_home_slide2.jpg"
                alt="banner2"
                preview={false}
              />
              <div className="absolute z-10 top-0 left-3 sm:left-12 md:left-12 xl:left-20 h-full">
                <div className="flex h-full py-5 sm:py-12 md:py-16 lg:py-12 xl:py-24 flex-col justify-between">
                  <div>
                    <span className="text-base md:text-3xl lg:text-2xl xl:text-3xl font-black block">
                      TOP BRANDS
                    </span>
                    <span className="text-base md:text-3xl lg:text-2xl xl:text-3xl font-black block">
                      SMARTPHONES
                    </span>
                  </div>

                  <div>
                    <span className="bg-gray-700 text-white text-xs sm:text-sm md:text-xl lg:text-base xl:text-xl font-bold inline-block mb-1 p-1 md:p-2">
                      STARTING FROM
                    </span>
                    <br />
                    <span className="bg-gray-700 text-white text-xs sm:text-sm md:text-xl lg:text-lg xl:text-2xl font-bold inline-block p-1 md:p-2 mr-1">
                      $100
                    </span>
                  </div>

                  <button
                    onClick={() => Router.push("/shop")}
                    className="bg-orange-500 text-white py-1 sm:py-2  text-xs sm:text-base rounded-full hover:bg-orange-400"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
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

            <Link href="/coming-soon" passHref>
              <button className="bg-amber-500 text-black w-full p-1 rounded-full">
                Upgrade
              </button>
            </Link>
          </div>
          <Link href="/coming-soon" passHref>
            <Button type="primary" className="mt-3 " block>
              Selected Machinery
            </Button>
          </Link>
          <Row align="middle" className="mt-3 ">
            <Col xs={20}>
              <Title level={5}>Woodworking Machinery</Title>
            </Col>
            <Col xs={4}>
              <Image
                src="https://springvalleymachinery.co.ke/wp-content/uploads/2020/11/IMG-20210225-WA0008.jpg"
                alt="woodworking"
                width={"100%"}
                preview={false}
              />
            </Col>
          </Row>
          <hr className="my-3" />

          <Row align="middle">
            <Col xs={20}>
              <Title level={5}>Plastic & Rubber Machinery</Title>
            </Col>
            <Col xs={4}>
              <Image
                src="https://m.plastic-recyclingequipment.com/photo/plastic-recyclingequipment/editor/20180829153605_87070.jpg"
                alt="woodworking"
                width={"100%"}
                preview={false}
              />
            </Col>
          </Row>
          <hr className="my-3" />

          <Row align="middle">
            <Col xs={20}>
              <Title level={5}>Laser & Machine Tool Equipment</Title>
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
          <hr className="my-3" />
        </Col>
      </Row>

      <Row
        gutter={[16, 16]}
        align="middle"
        justify="center"
        className="py-3 mt-3"
      >
        <Col xs={24} md={12} xl={6}>
          <Row gutter={[16, 16]} align="middle" className="w-full">
            <Col>
              <CarOutlined className="text-3xl" style={{ color: "#f66a05" }} />
            </Col>
            <Col>
              <span className="block">FREE SHIPPING & RETURN</span>
              <span className="block">Free shipping on orders over $99</span>
            </Col>
          </Row>
        </Col>

        <Col xs={24} md={12} xl={6}>
          <Row gutter={[16, 16]} align="middle">
            <Col>
              <DollarCircleOutlined
                className="text-3xl"
                style={{ color: "#f66a05" }}
              />
            </Col>
            <Col>
              <span className="block">MONEY BACK GUARANTEE</span>
              <span className="block">100% money back guarantee</span>
            </Col>
          </Row>
        </Col>

        <Col xs={24} md={12} xl={6}>
          <Row gutter={[16, 16]} align="middle">
            <Col>
              <CheckCircleOutlined
                className="text-3xl"
                style={{ color: "#f66a05" }}
              />
            </Col>
            <Col>
              <span className="block">ONLINE SUPPORT 24/7</span>
              <span className="block">Lorem ipsum dolor sit amet.</span>
            </Col>
          </Row>
        </Col>

        <Col xs={24} md={12} xl={6}>
          <Row gutter={[16, 16]} align="middle">
            <Col>
              <CreditCardOutlined
                className="text-3xl"
                style={{ color: "#f66a05" }}
              />
            </Col>
            <Col>
              <span className="block">SECURE PAYMENT</span>
              <span className="block">Lorem ipsum dolor sit amet.</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default HomeHeader;
