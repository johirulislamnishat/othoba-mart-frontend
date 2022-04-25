import { ShoppingOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import { Col, Image, Row } from "antd";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";

const LatestDeals = () => {
  const [items, setItems] = useState([]);
  console.log(items);

  useEffect(() => {
    axios
      .get(API_BASE_URL + "/product/paginated?page=0&size=2")
      .then(function (response) {
        setItems(response?.data?.result);
      });
  }, []);
  return (
    <div className="container latest-deals">
      <div className="section-title my-6 flex justify-between items-center border-b">
        <h2 className="text-2xl">Latest Deals</h2>
        <Link href="/">See All</Link>
      </div>
      <Row className="latest-deals-items">
        {items.map((item, index) => {
          return (
            <Col
              className="single-product"
              key={index}
              xs={24}
              sm={24}
              md={24}
              lg={12}
            >
              <Row>
                <div className="border w-full p-4 flex justify-between md:mb-4 items-center">
                  <Col md={10} className="product-image">
                    <Image preview={false} src={item?.photo} alt="" />
                    {item?.discount_percentage && (
                      <div className="discount flex justify-center items-center">
                        <small>{item.discount_percentage}</small>
                      </div>
                    )}
                  </Col>
                  <Col md={14}>
                    <h3>
                      <Link href="/product/[id]" as={`/product/${item._id}`}>
                        <a className="text-1xl">
                          {" "}
                          {item?.product_name.slice(0, 40)}
                        </a>
                      </Link>
                    </h3>
                    <div className="ratings">
                      {item?.ratings ? (
                        <>
                          <StarFilled />
                          <StarFilled />
                          <StarFilled />
                          <StarFilled />
                          <StarOutlined />
                        </>
                      ) : (
                        <>
                          <StarOutlined />
                          <StarOutlined />
                          <StarOutlined />
                          <StarOutlined />
                          <StarOutlined />
                        </>
                      )}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="product-price">
                        {item?.discount_price ? (
                          <span>{item.discount_price}</span>
                        ) : (
                          ""
                        )}
                        <h3>
                          ${item?.product_price}
                          .00
                        </h3>
                      </div>
                      <div className="shopping flex justify-center items-center">
                        <ShoppingOutlined />
                      </div>
                    </div>
                    <div className="product-data flex justify-between items-center mt-4">
                      <p>
                        <span>Available:</span>{" "}
                        <span> {item?.available ? item?.available : 0}</span>
                      </p>
                      <p>
                        <span>Sold: </span>{" "}
                        <span>{item?.sold ? item?.sold : 0}</span>
                      </p>
                    </div>
                  </Col>
                </div>
              </Row>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default LatestDeals;
