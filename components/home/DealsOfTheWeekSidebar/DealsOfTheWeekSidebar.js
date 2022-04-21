import {
  HeartOutlined,
  ShoppingOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import productSm from "../../../public/images/Products/product-sm-1.jpeg";

const DealsOfTheWeekSidebar = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="deals-of-the-weeks">
      <h3 className="text-2xl mt-4 pb-3 border-b">Deals Of The Week</h3>
      <Row>
        <Col lg={24} className="bg-white-100 border ">
          <div className="p-5 single-product">
            <Image src={productSm} alt="" />
            <div className="wishlist flex justify-center items-center">
              <HeartOutlined />
            </div>
            <div className="discount flex justify-center items-center">
              <small>30%</small>
            </div>

            <Link href="/" className="text-1xl">
              Flexible Black Smart Watches For Men & Women
            </Link>
            <div className="ratings">
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarOutlined />
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="product-price">
                <small>$779.99</small>
                <h3>$699.99</h3>
              </div>
              <div className="shopping flex justify-center items-center">
                <ShoppingOutlined />
              </div>
            </div>
            <p className="text-1xl mt-3">2 Day Delivery</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DealsOfTheWeekSidebar;
