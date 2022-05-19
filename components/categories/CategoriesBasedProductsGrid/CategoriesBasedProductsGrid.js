import { Col, Row } from "antd";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import preloader from "../../../assets/Images/preeloader.gif";
import ProductCardGrid from "../../ProductCardGrid/ProductCardGrid";
const CategoriesBasedProductsGrid = ({ selectedCategory }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(API_BASE_URL + `/product?cat=${selectedCategory}`)
      .then(function (response) {
        setItems(response?.data?.result);
        setIsLoading(false);
      });
  }, [selectedCategory]);

  return (
    <div className="container category-based-products">
      {isLoading && (
        <Image
          height="40"
          width="40"
          className="preloader"
          src={preloader}
          alt=""
        />
      )}
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
