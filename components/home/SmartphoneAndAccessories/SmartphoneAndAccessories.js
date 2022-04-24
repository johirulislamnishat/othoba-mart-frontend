import { Col, Row } from "antd";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import ProductCardGrid from "../../ProductCardGrid/ProductCardGrid";
import SuperDiscountTwoSidebar from "../SuperDiscountTwoSidebar/SuperDiscountTwoSidebar";
const SmartphoneAndAccessories = () => {
  const [items, setItems] = useState([]);
  console.log(items);

  useEffect(() => {
    axios
      .get(API_BASE_URL + "/product/paginated?page=0&size=4")
      .then(function (response) {
        console.log(response?.data?.result);
        setItems(response?.data?.result);
      });
  }, []);
  return (
    <div className="container smartphone-and-accessories">
      <div className="section-title mt-8 mb-4 flex justify-between items-center border-b ">
        <h2 className="text-2xl">Smartphone & Accessories</h2>
        <Link href="/">See All</Link>
      </div>
      <Row>
        <Col xs={24} sm={24} md={9}>
          <SuperDiscountTwoSidebar></SuperDiscountTwoSidebar>
        </Col>
        <Col md={15}>
          <Row>
            {items.map((item, index) => {
              return (
                <Col xs={24} sm={24} md={12} lg={12} key={index}>
                  <ProductCardGrid item={item} key={index} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default SmartphoneAndAccessories;
