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
        <Col className="" xs={24} sm={24} md={24} lg={8}>
          <Row className="">
            <div className="border w-full my-4 p-4 flex justify-start items-center">
              <Col md={10} className="product-image mr-6">
                <Image src={cellPhones} alt="" />
              </Col>
              <Col className="categories-link" md={14}>
                <h3>Cell Phones</h3>
                <Link href="/shop">iPhones</Link>
                <Link href="/shop">Phone Accessories</Link>
                <Link href="/shop">Phone Cases</Link>
                <Link href="/shop">Postpaid Phones</Link>
                <Link href="/shop">All Cell Phones </Link>
              </Col>
            </div>
          </Row>
        </Col>
        <Col className="" xs={24} sm={24} md={24} lg={8}>
          <Row className="">
            <div className="border w-full p-4  my-4 flex justify-start items-center">
              <Col md={10} className="product-image mr-6">
                <Image src={headphone} alt="" />
              </Col>
              <Col className="categories-link" md={14}>
                <h3>Headphones</h3>
                <Link href="/shop">Noise Canceling</Link>
                <Link href="/shop">Over-EAR</Link>
                <Link href="/shop">Premium Headphones</Link>
                <Link href="/shop">Sports & Fitness</Link>
                <Link href="/shop">All Headphones</Link>
              </Col>
            </div>
          </Row>
        </Col>
        <Col className="" xs={24} sm={24} md={24} lg={8}>
          <Row className="">
            <div className="border w-full p-4  my-4 flex justify-start items-center">
              <Col md={10} className="product-image mr-6">
                <Image src={smartWatch} alt="" />
              </Col>
              <Col className="categories-link" md={14}>
                <h3>Smartwatches</h3>
                <Link href="/shop">Sport Watches</Link>
                <Link href="/shop">Times Watches</Link>
                <Link href="/shop">Watch Brands</Link>
                <Link href="/shop">Women Watches</Link>
                <Link href="/shop">All Smartwatches</Link>
              </Col>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProductCategories;
