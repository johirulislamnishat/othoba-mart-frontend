import { Col, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import ProductCardGrid from "../../ProductCardGrid/ProductCardGrid";

const CategoriesBasedProductsGrid = ({ selectedCategory }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(API_BASE_URL + `/product?cat=${selectedCategory}`)
      .then(function (response) {
        setItems(response?.data?.result);
      });
  }, [selectedCategory]);

  return (
    <div className="container category-based-products">
      <Row>
        {items.map((item, index) => {
          return (
            <Col
              className="single-product"
              xs={24}
              sm={24}
              md={8}
              lg={6}
              key={index}
            >
              <ProductCardGrid item={item} key={index} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CategoriesBasedProductsGrid;
