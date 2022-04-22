import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import cellPhones from "../../../assets/Images/cellPhones.png";
import headphone from "../../../assets/Images/headphone.png";
import smartWatch from "../../../assets/Images/smartWatch.png";

const ProductCategories = () => {
  return (
    <div className="container product-categories">
      <Row className="single-category-card">
        <Col className="" xs={24} sm={12} md={8} lg={8}>
          <Row className="">
            <div className="border w-full my-4 p-4 flex justify-start items-center">
              <Col md={10} className="product-image mr-6">
                <Image src={cellPhones} alt="" />
              </Col>
              <Col className="categories-link" md={14}>
                <h3>Cell Phones</h3>
                <Link href="/">iPhones</Link>
                <Link href="/">Phone Accessories</Link>
                <Link href="/">Phone Cases</Link>
                <Link href="/">Postpaid Phones</Link>
                <Link href="/">All Cell Phones </Link>
              </Col>
            </div>
          </Row>
        </Col>
        <Col className="" xs={24} sm={12} md={8} lg={8}>
          <Row className="">
            <div className="border w-full p-4  my-4 flex justify-start items-center">
              <Col md={10} className="product-image mr-6">
                <Image src={headphone} alt="" />
              </Col>
              <Col className="categories-link" md={14}>
                <h3>Headphones</h3>
                <Link href="/">Noise Canceling</Link>
                <Link href="/">Over-EAR</Link>
                <Link href="/">Premium Headphones</Link>
                <Link href="/">Sports & Fitness</Link>
                <Link href="/">All Headphones</Link>
              </Col>
            </div>
          </Row>
        </Col>
        <Col className="" xs={24} sm={12} md={8} lg={8}>
          <Row className="">
            <div className="border w-full p-4  my-4 flex justify-start items-center">
              <Col md={10} className="product-image mr-6">
                <Image src={smartWatch} alt="" />
              </Col>
              <Col className="categories-link" md={14}>
                <h3>Smartwatches</h3>
                <Link href="/">Sport Watches</Link>
                <Link href="/">Times Watches</Link>
                <Link href="/">Watch Brands</Link>
                <Link href="/">Women Watches</Link>
                <Link href="/">All Smartwatches</Link>
              </Col>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProductCategories;
