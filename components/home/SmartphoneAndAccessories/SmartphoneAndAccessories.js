import { Col, Row } from "antd";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import ProductCardGrid from "../../ProductCardGrid/ProductCardGrid";
import SuperDiscountFourSidebar from "../SuperDiscountFourSidebar/SuperDiscountFourSidebar";
import SuperDiscountTwoSidebar from "../SuperDiscountTwoSidebar/SuperDiscountTwoSidebar";
const SmartphoneAndAccessories = () => {
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
        <div className="container smartphone-and-accessories">
            <div className="section-title mt-8 my-6 flex justify-between items-center border-b ">
                <h2 className="text-2xl">Smartphone & Accessories</h2>
                <Link href="/shop">See All</Link>
            </div>
            <Row>
                <Col xs={24} sm={24} md={12} lg={9} className="md:pr-2">
                    <SuperDiscountTwoSidebar></SuperDiscountTwoSidebar>
                    <SuperDiscountFourSidebar></SuperDiscountFourSidebar>
                </Col>
                <Col md={12} lg={15} className="md:pl-2">
                    <Row>
                        {items.map((item, index) => {
                            return (
                                <Col
                                    className="single-product"
                                    xs={24}
                                    sm={24}
                                    md={24}
                                    lg={12}
                                    key={index}
                                >
                                    <ProductCardGrid item={item} key={index} />
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default SmartphoneAndAccessories;
