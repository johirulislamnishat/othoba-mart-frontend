import { ShoppingOutlined } from "@ant-design/icons";
import { Col, Image, Row } from "antd";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import useProvider from "../../../hooks/useProvider";
const TrendingProductsSidebar = () => {
  const [cartClicked, setCartClicked] = useState(false);

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

  const handleAddToCart = (item) => {
    setCartClicked(true);
    dispatch(addToCart(cart, item));
  };
  const {
    state: { cart, wish },
    dispatch,
  } = useProvider();
  return (
    <div className="trending-products">
      <h3 className="text-2xl mt-4 pb-3 border-b">Trending Products</h3>

      <Row className="">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="single-product border flex justify-between items-center"
            >
              <Col md={10} className="product-image">
                <Image preview={false} src={item?.photo} alt="" />
              </Col>
              <Col md={14}>
                <h3>
                  <Link href="/product/[id]" as={`/product/${item._id}`}>
                    <a className="text-1xl"> {item?.product_name}</a>
                  </Link>
                </h3>

                <div className="flex justify-between items-center mt-4">
                  <div className="product-price">
                    {item?.discount_price ? (
                      <span>{item.discount_price}</span>
                    ) : (
                      ""
                    )}
                    <h3>${item?.product_price}.00</h3>
                  </div>
                  <div className="shopping flex justify-center items-center">
                    <ShoppingOutlined
                      onClick={() => handleAddToCart(item)}
                      style={
                        cartClicked ? { color: "red" } : { color: "inherit" }
                      }
                    />
                  </div>
                </div>
              </Col>
            </div>
          );
        })}
      </Row>
    </div>
  );
};

export default TrendingProductsSidebar;
