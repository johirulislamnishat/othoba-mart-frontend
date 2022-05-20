import { Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import useProvider from "../../../hooks/useProvider";
import ProductCardListSidebar from "../../ProductCardListSidebar/ProductCardListSidebar";
const TrendingProductsSidebar = () => {
    const [cartClicked, setCartClicked] = useState(false);

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

            <Row>
                {items.map((item, index) => {
                    return <ProductCardListSidebar item={item} key={index} />;
                })}
            </Row>
        </div>
    );
};

export default TrendingProductsSidebar;
