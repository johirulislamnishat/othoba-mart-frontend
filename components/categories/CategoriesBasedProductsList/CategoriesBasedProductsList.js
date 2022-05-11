import { Col, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import ProductCardList from "../../ProductCardList/ProductCardList";
const CategoriesBasedProductsList = () => {
  const [items, setItems] = useState([]);
  // console.log(items);

  useEffect(() => {
    axios
      .get(API_BASE_URL + "/product/paginated?page=0&size=6")
      .then(function (response) {
        // console.log(response?.data?.result);
        setItems(response?.data?.result);
      });
  }, []);

  return (
    <div className="container new-products">
      <Row>
        {items.map((item, index) => {
          return (
            <Col sm={24} sx={24} lg={24} key={index}>
              <ProductCardList item={item} key={index} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default CategoriesBasedProductsList;
