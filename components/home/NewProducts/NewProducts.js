import { Col, Row } from "antd";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import ProductCardGrid from "../../ProductCardGrid/ProductCardGrid";
const NewProducts = () => {
    const [items, setItems] = useState([]);
    // console.log(items);

    useEffect(() => {
        axios
            .get(API_BASE_URL + "/product/paginated?page=0&size=4")
            .then(function (response) {
                // console.log(response?.data?.result);
                setItems(response?.data?.result);
            });
    }, []);

    return (
        <div className="container new-products">
            <div className="section-title my-6 flex justify-between items-center border-b">
                <h2 className="text-2xl">New Products</h2>
                <Link href="/shop">See All</Link>
            </div>
            <Row>
                {items.map((item, index) => {
                    return (
                        <Col
                            className="single-product"
                            xs={24}
                            sm={24}
                            md={12}
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

export default NewProducts;
