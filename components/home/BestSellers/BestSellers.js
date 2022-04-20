import {
  HeartOutlined,
  ShoppingOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import axios from "axios";
import Link from "next/link";
import useProvider from '../../hooks/useProvider'
import { addToCart } from '../../context/actions/Actions'
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";

const BestSellers = () => {
  const { state: {cart}, dispatch } = useProvider()

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
    <div className="container best-sellers">
      <div className="section-title mt-6 flex justify-between items-center border-b-2">
        <h2 className="text-2xl">Best Sellers</h2>
        <Link href="/">See All</Link>
      </div>
      <Row>
        {items.map((item, index) => {
          return (
            <Col xs={24} sm={12} md={6} lg={6} key={index}>
              <div className="p-5 single-product">
                {/* <Image src={item.product_img} alt="" /> */}

                <img src={item?.product_img} alt="" />

                <div className="wishlist flex justify-center items-center">
                  <HeartOutlined />
                </div>
                <div className="discount flex justify-center items-center">
                  <small>Super Price</small>
                </div>
                <h3>
                  <Link href="/product/[id]" as={`/product/${item._id}`}>
                    <a className="text-1xl"> {item?.product_name}</a>
                  </Link>
                </h3>
                <div className="ratings">
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <StarFilled />
                  <StarOutlined />
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="product-price">
                    <small>$779.99</small>
                    <h3>${item?.product_price}.00</h3>
                  </div>
                  <div className="shopping flex justify-center items-center">
                    <ShoppingOutlined onClick={()=>dispatch(addToCart(cart, item))} />
                  </div>
                </div>
                <p className="text-1xl mt-3">2 Day Delivery</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default BestSellers;
