import {
  CheckCircleOutlined,
  QuestionCircleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../apiconstants";
import useProvider from "../../hooks/useProvider";
import productImage from "../../public/images/Products/product-sm-1.jpeg";

const ThankYouPage = () => {
  const {
    state: { user },
  } = useProvider();
  // console.log(user);
  const userid = user?._id;
  const accessToken = user?.accessToken;
  const [order, setOrder] = useState({});
  const [items, setItems] = useState([]);
  const [id, setId] = useState("");

  // console.log("userid", userid);
  // console.log("items", items);
  // .get(`http://localhost:5000/order/user/${userid}`, {
  //                 headers: {
  //                     "Content-Type": "multipart/form-data",
  //                     token: `Bearer ${accessToken}`,
  //                 },
  //             })

  useEffect(() => {
    if (userid !== undefined) {
      axios
        .get(API_BASE_URL + `/order/user/${userid}`, {
          headers: {
            "Content-Type": "multipart/form-data",
            token: `Bearer ${accessToken}`,
          },
        })
        .then(function (response) {
          // console.log(response?.data?.result);
          setOrder(response?.data?.result[0]);
          setItems(response?.data?.result[0]?.purchased_items);
        });
    }
  }, [userid, accessToken]);

  return (
    <>
      {/* <div className="loader">
                <h1>Loading..... </h1>
            </div> */}
      <div className="container thank-you-page my-24">
        <main>
          <h2 className="mb-6">Othoba Mart Online Sopping</h2>
          <div className="flex justify-start items-center mb-6">
            <CheckCircleOutlined />
            <div>
              <small>Order {order?.tracking_id}</small>
              <h4>Thank You {order?.user_name}</h4>
            </div>
          </div>
          <div className="border p-6 mb-6">
            <h5>Your order is confirmed</h5>
            <p>
              You will receive a confirmation email with your order number
              shortly
            </p>
          </div>
          <div className="border p-6">
            <h5>Customer information</h5>
            <h6>Contact Information</h6>
            <small className="mb-6">{order?.email}</small>
            <h6>Shopping address</h6>
            <address>
              <small>{order?.user_name}</small>
              <small>{order?.address}</small>
              {/* <small>Paltan, Dhaka</small>
                        <small>Bangladesh</small> */}
            </address>
            <h6>Shipping method</h6>
            <small>First Class Package</small>
          </div>
          <div className="flex justify-between items-center my-6">
            <Link href="/">
              <a className="flex justify-center items-center">
                <QuestionCircleOutlined />
                <h5>Need Help?</h5>
              </a>
            </Link>

            <div>
              {/* <button className="custom-btn button-lg">
                                <SearchOutlined />
                                <span>Track Order</span>
                            </button> */}
              <Link href="/shop">
                <a>
                  <button className="custom-btn button-lg">
                    <ShoppingCartOutlined />
                    <span>Continue Shopping</span>
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </main>
        <aside className="border p-8 bg-gray-100">
          <div className="mb-6">
            {items.map((item, index) => {
              console.log(item);
              return (
                <div key={index} className="flex justify-between items-center ">
                  <div className="flex justify-start items-center">
                    <div className="product-sm-image">
                      <Image src={productImage} alt="" />
                      {/* <small>2</small> */}
                    </div>
                    <div className="nameqty">
                      <h6>{item?.item_name}</h6>
                      <div className="qty">
                        <h6>Item QTY : {item?.item_qty}</h6>
                      </div>
                    </div>
                  </div>

                  <h6>${item?.item_total_price}</h6>
                </div>
              );
            })}
          </div>
          <div className="py-6 border-y mb-6">
            <div className="flex justify-between items-center">
              <h5>Subtotal</h5>
              <h5>${order?.total_price}</h5>
            </div>
            {/* <div className="flex justify-between items-center">
                        <h5>Shipping</h5>
                        <h5>$25.00</h5>
                    </div>
                    <div className="flex justify-between items-center">
                        <h5>Taxes</h5>
                        <h5>$0.00</h5>
                    </div> */}
          </div>
          <div className="flex justify-between items-center">
            <h3>Total</h3>
            <h3>
              <span>USD </span> ${order?.total_price}
            </h3>
          </div>
        </aside>
      </div>
    </>
  );
};

export default ThankYouPage;
