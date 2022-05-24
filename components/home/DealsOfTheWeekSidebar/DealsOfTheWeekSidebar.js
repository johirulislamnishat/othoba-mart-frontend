import { Col, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import ProductCardGrid from "../../ProductCardGrid/ProductCardGrid";

const DealsOfTheWeekSidebar = () => {
    const [items, setItems] = useState([]);
    // console.log(items);

    useEffect(() => {
        axios
            .get(API_BASE_URL + "/product/paginated?page=0&size=1")
            .then(function (response) {
                console.log(response?.data?.result);
                setItems(response?.data?.result);
            });
    }, []);
    return (
        <div className="deals-of-the-weeks">
            <h3 className="text-2xl mt-4 pb-3 border-b">Deals Of The Week</h3>
            <Row>
                {items.map((item, index) => {
                    return (
                        <Col className="single-product" lg={24} key={index}>
                            <ProductCardGrid item={item} key={index} />
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default DealsOfTheWeekSidebar;
