import { Col, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import ProductCardGrid from "../../ProductCardGrid/ProductCardGrid";

const CategoriesBasedProductsGrid = () => {
  const [items, setItems] = useState([]);
  console.log(items);

  useEffect(() => {
    axios
      .get(API_BASE_URL + "/product/paginated?page=0&size=6")
      .then(function (response) {
        setItems(response?.data?.result);
      });
  }, []);

  return (
    <div className="container new-products">
      <Row>
        {items.map((item, index) => {
          return (
            <Col xs={24} sm={24} md={8} lg={8} key={index}>
              <ProductCardGrid item={item} key={index} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CategoriesBasedProductsGrid;
