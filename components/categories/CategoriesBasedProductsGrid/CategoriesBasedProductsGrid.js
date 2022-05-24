import { Col, Radio, Row } from "antd";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import preloader from "../../../assets/Images/preeloader.gif";
import ProductCardGrid from "../../ProductCardGrid/ProductCardGrid";
const CategoriesBasedProductsGrid = ({ selectedCategory }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("1");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    var products = items.sort((a, b) => {
      return value == "1"
        ? a.product_price - b.product_price
        : b.product_price - a.product_price;
    });
    setItems(products);
  }, [value]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(API_BASE_URL + `/product?cat=${selectedCategory}`)
      .then(function (response) {
        let products = response?.data?.result;
        products = products.sort((a, b) => {
          return b.product_price - a.product_price;
        });
        setItems(products);
        setIsLoading(false);
      });
  }, [selectedCategory]);

  return (
    <div className="container category-based-products">
      <Radio.Group
        style={{ marginBottom: 30 }}
        onChange={onChange}
        value={value}
        className="high-low-radio-btn"
      >
        <Radio defaultChecked={false} value={"1"}>
          High to Low
        </Radio>
        <Radio value={"2"}>Low to High</Radio>
      </Radio.Group>
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
