import {
  CheckCircleOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import productImage from "../../public/images/Products/product-sm-1.jpeg";
const ThankYouPage = () => {
  return (
    <div className="container thank-you-page my-24">
      <main>
        <h2 className="mb-6">Othoba Mart Online Sopping</h2>
        <div className="flex justify-start items-center mb-6">
          <CheckCircleOutlined />
          <div>
            <small>Order #3344556</small>
            <h4>Thank You Mr. John</h4>
          </div>
        </div>
        <div className="border p-6 mb-6">
          <h5>Your order is confirmed</h5>
          <p>
            You will receive a confirmation email with your order number shortly
          </p>
        </div>
        <div className="border p-6">
          <h5>Customer information</h5>
          <h6>Contact Information</h6>
          <small className="mb-6">customer@customername.com</small>
          <h6>Shopping address</h6>
          <address>
            <small>Mr. John Smith </small>
            <small>235/23 Purana Paltan Ave</small>
            <small>Paltan, Dhaka</small>
            <small>Bangladesh</small>
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
            <button className="custom-btn button-lg">
              <SearchOutlined />
              <span>Track Order</span>
            </button>
            <Link href="/categories">
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
          <div className="flex justify-between items-center ">
            <div className="flex justify-start items-center">
              <div className="product-sm-image">
                <Image src={productImage} alt="" />
                <small>2</small>
              </div>

              <h4>Xiaomi Smartwatch</h4>
            </div>
            <h4>$720.00</h4>
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex justify-start items-center">
              <div className="product-sm-image">
                <Image src={productImage} alt="" />
                <small>1</small>
              </div>

              <h4>Xiaomi Smartwatch</h4>
            </div>
            <h4>$360.00</h4>
          </div>
        </div>
        <div className="py-6 border-y mb-6">
          <div className="flex justify-between items-center">
            <h5>Subtotal</h5>
            <h5>$1080.00</h5>
          </div>
          <div className="flex justify-between items-center">
            <h5>Shipping</h5>
            <h5>$5.00</h5>
          </div>
          <div className="flex justify-between items-center">
            <h5>Taxes</h5>
            <h5>$0.00</h5>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3>Total</h3>
          <h3>
            <span>USD </span> $1085.00
          </h3>
        </div>
      </aside>
    </div>
  );
};

export default ThankYouPage;
