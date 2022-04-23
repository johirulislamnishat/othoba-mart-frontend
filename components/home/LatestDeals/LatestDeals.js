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
            <div className="section-title mt-8 flex justify-between items-center border-b">
                <h2 className="text-2xl">Latest Deals</h2>
                <Link href="/">See All</Link>
            </div>
            <Row className="latest-deals-items">
                {items.map((item, index) => {
                    return (
                        <Col
                            className="single-product "
                            key={index}
                            xs={24}
                            sm={12}
                            md={12}
                            lg={12}
                        >
                            <Row>
                                <div className="border p-4 my-4 flex justify-between items-center">
                                    <Col md={10} className="product-image">
                                        <Image
                                            preview={false}
                                            src={item?.photo}
                                            alt=""
                                        />
                                        <div className="discount flex justify-center items-center">
                                            <small>24%</small>
                                        </div>
                                    </Col>
                                    <Col md={14}>
                                        <Link
                                            href="/product/[id]"
                                            as={`/product/${item._id}`}
                                        >
                                            <a className="text-1xl">
                                                {" "}
                                                {item?.product_name}
                                            </a>
                                        </Link>
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
                                                <span> 24</span>
                                            </p>
                                            <p>
                                                <span>Sold: </span>{" "}
                                                <span>8</span>
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
