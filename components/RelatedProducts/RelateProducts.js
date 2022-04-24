import { Col, Row } from "antd";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../apiconstants";
import ProductCardGrid from "../ProductCardGrid/ProductCardGrid";

const RelateProducts = () => {
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
    <div className="container new-products">
      <div className="section-title mt-8 flex justify-between items-center border-b-2">
        <h2 className="text-2xl pb-4">Related Products</h2>
        <Link href="/">See All</Link>
      </div>
      <Row>
        {items.map((item, index) => {
          return (
            <Col className="my-6" xs={24} sm={12} md={6} lg={6} key={index}>
              <ProductCardGrid item={item} key={index} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default RelateProducts;
