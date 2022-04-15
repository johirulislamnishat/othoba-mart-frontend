import { ShoppingOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import productSm from "../../../public/images/Products/product-sm-1.jpeg";

const TrendingProductsSidebar = () => {
  return (
    <div className="trending-products">
      <h3 className="text-2xl mt-4 pb-3 border-b-2">Trending Products</h3>
      <Row className="">
        <Col className="single-product" lg={24}>
          <Row className="">
            <div className="flex justify-between items-center">
              <Col md={10} className="product-image">
                <Image src={productSm} alt="" />
              </Col>
              <Col md={14}>
                <Link href="/" className="product-title">
                  Flexible Black Smart Watches For Men & Women
                </Link>

                <div className="flex justify-between items-center mt-4">
                  <div className="product-price">
                    <small>$779.99</small>
                    <h3>$699.99</h3>
                  </div>
                  <div className="shopping flex justify-center items-center">
                    <ShoppingOutlined />
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </Col>
        <Col className="single-product" lg={24}>
          <Row className="">
            <div className="flex justify-between items-center">
              <Col md={10} className="product-image">
                <Image src={productSm} alt="" />
              </Col>
              <Col md={14}>
                <Link href="/" className="product-title">
                  Flexible Black Smart Watches For Men & Women
                </Link>

                <div className="flex justify-between items-center mt-4">
                  <div className="product-price">
                    <small>$779.99</small>
                    <h3>$699.99</h3>
                  </div>
                  <div className="shopping flex justify-center items-center">
                    <ShoppingOutlined />
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </Col>
        <Col className="single-product" lg={24}>
          <Row className="">
            <div className="flex justify-between items-center">
              <Col md={10} className="product-image">
                <Image src={productSm} alt="" />
              </Col>
              <Col md={14}>
                <Link href="/" className="product-title">
                  Flexible Black Smart Watches For Men & Women
                </Link>

                <div className="flex justify-between items-center mt-4">
                  <div className="product-price">
                    <small>$779.99</small>
                    <h3>$699.99</h3>
                  </div>
                  <div className="shopping flex justify-center items-center">
                    <ShoppingOutlined />
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </Col>
        <Col className="single-product" lg={24}>
          <Row className="">
            <div className="flex justify-between items-center">
              <Col md={10} className="product-image">
                <Image src={productSm} alt="" />
              </Col>
              <Col md={14}>
                <Link href="/" className="product-title">
                  Flexible Black Smart Watches For Men & Women
                </Link>

                <div className="flex justify-between items-center mt-4">
                  <div className="product-price">
                    <small>$779.99</small>
                    <h3>$699.99</h3>
                  </div>
                  <div className="shopping flex justify-center items-center">
                    <ShoppingOutlined />
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default TrendingProductsSidebar;
