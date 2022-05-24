import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../../apiconstants";
import AdminLayout from "../../../../components/layouts/adminLayout";
import Review from "../../../../components/review";
import useProvider from "../../../../hooks/useProvider";
import Link from "next/link";

const OrderDetails = () => {
    const router = useRouter();
    const id = router.query.id;
    const [orderData, setOrderData] = useState({});
    const [items, setItems] = useState([]);
    console.log(orderData);
    const {
        state: {
            user: { accessToken },
        },
    } = useProvider();

    useEffect(() => {
        if (typeof window !== "undefined") {
            // setToken(localStorage.getItem("token"));

            axios
                .get(`${API_BASE_URL}/order/${id}`, {
                    headers: {
                        token: `Bearer ${accessToken}`,
                    },
                })
                .then((res) => {
                    setOrderData(res?.data?.result);
                    setItems(res?.data?.result?.purchased_items);
                    // console.log(res?.data?.result);
                })
                .catch((e) => console.log(e));
        }
    }, [id]);

    return (
        <AdminLayout title={"Customer | Order Details"}>
            <h1 className="heading-order">Shipping details: </h1>
            <div className="order-details">
                <h1>Name: {orderData?.user_name}</h1>
                <h1>Email: {orderData?.email}</h1>
                <h1>Phone: {orderData?.phone}</h1>
                <h1>Tracking Id: {orderData?.tracking_id}</h1>
                <h1>Shipping Address: {orderData?.address}</h1>
            </div>
            <h1 className="heading-order">All ordered products: </h1>
            {items.map((product, index) => {
                return (
                    <div key={index} className="product-container">
                        <h1 className="pro-name">
                            #{index + 1}: {product?.item_name}
                        </h1>
                        <p>
                            <b>Shop Name:</b> {product?.shop_name}
                        </p>
                        <p>
                            <b>Total QTY:</b> {product?.item_qty}
                        </p>
                        <p>
                            <b>Total Price:</b> ${product?.item_total_price}
                        </p>
                        {orderData?.status === "delivered" ? (
                            <Review id={product?._id} />
                        ) : (
                            ""
                        )}
                    </div>
                );
            })}
        </AdminLayout>
    );
};

export default OrderDetails;
