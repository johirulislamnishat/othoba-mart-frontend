import {
    HeartOutlined,
    ShoppingOutlined,
    StarFilled,
    StarOutlined,
} from "@ant-design/icons";
import { Col, Image, Row } from "antd";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";

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
                        <Col xs={24} sm={12} md={8} lg={8} key={index}>
                            <div className="p-5 single-product border-2 rounded-md m-2">
                                {/* <Image src={item.product_img} alt="" /> */}

                                <Image
                                    preview={false}
                                    src={item?.photo}
                                    alt=""
                                />

                                <div className="wishlist flex justify-center items-center">
                                    <HeartOutlined />
                                </div>
                                <div className="discount flex justify-center items-center">
                                    <small>40% off</small>
                                </div>
                                <h3>
                                    <Link
                                        href="/product/[id]"
                                        as={`/product/${item._id}`}
                                    >
                                        <a className="text-1xl">
                                            {" "}
                                            {item?.product_name}
                                        </a>
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
                                        <ShoppingOutlined />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default CategoriesBasedProductsGrid;
