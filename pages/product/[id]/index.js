import {
  HeartOutlined,
  QuestionCircleOutlined,
  ShoppingOutlined,
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
import { addToCart, addToWish } from "../../../context/actions/Actions";
import useProvider from "../../../hooks/useProvider";
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
    // console.log("changed", value);
  }
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }
  const [cartClicked, setCartClicked] = useState(false);
  const [wishClicked, setWishClicked] = useState(false);
  const {
    state: { cart, wish },
    dispatch,
  } = useProvider();

  const handleAddToWish = (item) => {
    setWishClicked(true);
    dispatch(addToWish(wish, item));
  };

  const handleAddToCart = (item) => {
    setCartClicked(true);
    dispatch(addToCart(cart, item));
  };
  return (
    <HomeLayout title={item.product_name}>
      <div className="single-product-page">
        <Row>
          <Col xs={24} md={10} gutter={8} className="border rounded-md mb-10">
            <div className="single-product-image w-full">
              <Image
                className="product-photo"
                preview={false}
                src={item?.photo}
                alt=""
              />
            </div>
          </Col>
          <Col xs={24} md={14} className="md:pl-6">
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
            <div className="py-4 border-y my-6">
              <Row className="single-product-meta-data">
                <Col xs={24} md={12}>
                  <div className="flex justify-start items-center">
                    <p>SKU</p>
                    <p>4353453453</p>
                  </div>
                </Col>

                <Col xs={24} md={12}>
                  <div className="flex justify-start items-center">
                    <p>Freshness</p>
                    <p>1 day old</p>
                  </div>
                </Col>

                <Col xs={24} md={12}>
                  <div className="flex justify-start items-center">
                    <p>Category</p>
                    <p>{item?.product_category}</p>
                  </div>
                </Col>

                <Col xs={24} md={12}>
                  <div className="flex justify-start items-center">
                    <p>Tags</p>
                    <p>{item?.product_sizes}</p>
                  </div>
                </Col>

                <Col xs={24} md={12}>
                  <div className="flex justify-start items-center">
                    <p>Stock</p>
                    <p>In Stock</p>
                  </div>
                </Col>

                <Col xs={24} md={12}>
                  <div className="flex justify-start items-center">
                    <p>Delivery</p>
                    <p>In 2 days</p>
                  </div>
                </Col>

                <Col xs={24} md={12}>
                  <div className="flex justify-start items-center">
                    <p>Colors</p>
                    <p>{item?.product_colors}</p>
                  </div>
                </Col>
                <Col xs={24} md={12}>
                  <div className="flex justify-start items-center">
                    <p>Sizes</p>
                    <p>{item?.product_sizes}</p>
                  </div>
                </Col>
              </Row>
            </div>

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

              <button
                onClick={() => handleAddToCart(item)}
                className="custom-btn button-lg"
              >
                <ShoppingOutlined />
                <span>Add to cart </span>
              </button>
              <button
                onClick={() => handleAddToWish(item)}
                className="custom-btn button-lg grey-btn"
              >
                <HeartOutlined />
                <span> Add To Wishlist</span>
              </button>
              <button
                onClick={() => handleAddToCart(item)}
                className="custom-btn button-sm"
              >
                <ShoppingOutlined />
              </button>

              <button
                onClick={() => handleAddToWish(item)}
                className="custom-btn grey-btn button-sm"
              >
                <HeartOutlined />
              </button>
            </div>

            <Tabs
              className="mt-6 product-data-tab"
              defaultActiveKey="1"
              onChange={callback}
            >
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
