import { Col, Row } from "antd";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import ProductCardGridTwo from "../../ProductCardGridTwo/ProductCardGridTwo";

const LatestDeals = () => {
    const [items, setItems] = useState([]);
    // console.log(items);

    useEffect(() => {
        axios
            .get(API_BASE_URL + "/product?cat=earphone")
            .then(function (response) {
                setItems(response?.data?.result);
            });
    }, []);
    return (
        <div className="container latest-deals">
            <div className="section-title my-6 flex justify-between items-center border-b">
                <h2 className="text-2xl">Latest Deals</h2>
                <Link href="/shop">See All</Link>
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
                            <ProductCardGridTwo item={item} key={index} />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default LatestDeals;
