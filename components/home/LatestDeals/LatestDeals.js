import { ShoppingOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import productSm from "../../../public/images/Products/product-sm-1.jpeg";
const LatestDeals = () => {
  return (
    <div className="container latest-deals">
      <div className="section-title mt-8 px-4 flex justify-between items-center border-b-2">
        <h2 className="text-2xl">Latest Deals</h2>
        <Link href="/">See All</Link>
      </div>
      <Row className="">
        <Col className="single-product" xs={24} sm={12} md={12} lg={12}>
          <Row className="">
            <div className="border-2 p-4 m-4 flex justify-between items-center">
              <Col md={10} className="product-image">
                <Image src={productSm} alt="" />
                <div className="discount flex justify-center items-center">
                  <small>24%</small>
                </div>
              </Col>
              <Col md={14}>
                <Link href="/" className="product-title">
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
                <div className="product-data flex justify-between items-center mt-4">
                  <p>
                    <span>Available:</span> <span> 24</span>
                  </p>
                  <p>
                    <span>Sold: </span> <span>8</span>
                  </p>
                </div>
              </Col>
            </div>
          </Row>
        </Col>
        <Col className="single-product" xs={24} sm={12} md={12} lg={12}>
          <Row className="">
            <div className="border-2 p-4  m-4  flex justify-between items-center">
              <Col md={10} className="product-image">
                <Image src={productSm} alt="" />
                <div className="discount flex justify-center items-center">
                  <small>24%</small>
                </div>
              </Col>
              <Col md={14}>
                <Link href="/" className="product-title">
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
                <div className="product-data flex justify-between items-center mt-4">
                  <p>
                    <span>Available:</span> <span> 24</span>
                  </p>
                  <p>
                    <span>Sold: </span> <span>8</span>
                  </p>
                </div>
              </Col>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default LatestDeals;
