import {
  EyeOutlined,
  HeartOutlined,
  QuestionCircleOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import { Col, Image, InputNumber, Row, Tabs } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import HomeLayout from "../../../components/layouts/homeLayout";
import RelateProducts from "../../../components/RelatedProducts/RelateProducts";
const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get(API_BASE_URL + `/product/${id}`).then(function (response) {
      setItem(response?.data?.result);
    });
  }, [id]);
  function onChange(value) {
    console.log("changed", value);
  }
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }
  const url = item.product_img;
  console.log(url);
  return (
    <HomeLayout title={item.product_name}>
      <div className="single-product-page">
        <Row>
          <Col sm={12} gutter={8} className="border rounded-md">
            <Image preview={false} src={url} alt="" />
          </Col>
          <Col sm={12} className="pl-6">
            <h2>{item.product_name}</h2>
            <div className="ratings mt-4">
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarOutlined />
              <span>1 customer review</span>
            </div>
            <p className="mt-6">{item.product_description}</p>
            <table className="mt-6">
              <tbody>
                <tr>
                  <td>SKU</td>
                  <td>4353453453</td>
                  <td>Freshness</td>
                  <td>1 day old</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>{item?.product_category}</td>
                  <td>Tags</td>
                  <td>{item?.product_tags}</td>
                </tr>
                <tr>
                  <td>Stock</td>
                  <td>In Stock</td>
                  <td>Delivery</td>
                  <td>In 2 days</td>
                </tr>
                <tr>
                  <td>Colors</td>
                  <td>{item?.product_colors}</td>
                  <td>Sizes</td>
                  <td>{item?.product_sizes}</td>
                </tr>
              </tbody>
            </table>
            <div className="product-data flex justify-between items-center border p-3 my-6  rounded-lg">
              <div className="product-price">
                <h3>
                  <span>$</span>
                  {item.product_price}
                </h3>
                <small>$779.99</small>
              </div>
              <InputNumber
                size="large"
                min={1}
                max={100000}
                defaultValue={3}
                onChange={onChange}
              />
              <button className="custom-btn">
                <EyeOutlined />
                <span>Add To Cart</span>
              </button>

              <button className="custom-btn grey-btn">
                <HeartOutlined />
                <span> Add To Wishlist</span>
              </button>
            </div>

            <Tabs className="mt-6" defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Descriptions" key="1">
                <p>{item.product_description}</p>
              </TabPane>
              <TabPane tab="Reviews" key="2">
                No Reviews Available
              </TabPane>
              <TabPane tab="Questions" key="3">
                <button className="custom-btn">
                  <QuestionCircleOutlined />
                  <span>Ask Question</span>
                </button>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
        <Row>
          <RelateProducts></RelateProducts>
        </Row>
      </div>
    </HomeLayout>
  );
};

export default Product;
