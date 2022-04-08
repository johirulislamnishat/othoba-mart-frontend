import {
  HeartOutlined,
  ShoppingOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import productSm from "../../../public/images/Products/product-sm-1.jpeg";
const BestSellers = () => {
  return (
    <div className="container best-sellers">
      <div className="section-title mt-3  px-4 flex justify-between items-center border-b-2">
        <h2 className="text-2xl">Best Sellers</h2>
        <Link href="/">See All</Link>
      </div>
      <Row>
        <Col xs={24} sm={12} md={6} lg={6}>
          <div className="p-5 single-product">
            <Image src={productSm} alt="" />
            <div className="wishlist flex justify-center items-center">
              <HeartOutlined />
            </div>
            <div className="discount flex justify-center items-center">
              <small>30%</small>
            </div>

            <Link href="/" className="text-1xl">
              Flexible Black Smart Watches For Men & Women
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
                <h3>$699.99</h3>
              </div>
              <div className="shopping flex justify-center items-center">
                <ShoppingOutlined />
              </div>
            </div>
            <p className="text-1xl mt-3">2 Day Delivery</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6}>
          <div className="p-5 single-product">
            <Image src={productSm} alt="" />
            <div className="wishlist flex justify-center items-center">
              <HeartOutlined />
            </div>
            <div className="discount flex justify-center items-center">
              <small>30%</small>
            </div>

            <Link href="/" className="text-1xl">
              Flexible Black Smart Watches For Men & Women
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
                <h3>$699.99</h3>
              </div>
              <div className="shopping flex justify-center items-center">
                <ShoppingOutlined />
              </div>
            </div>
            <p className="text-1xl mt-3">2 Day Delivery</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6}>
          <div className="p-5 single-product">
            <Image src={productSm} alt="" />
            <div className="wishlist flex justify-center items-center">
              <HeartOutlined />
            </div>
            <div className="discount flex justify-center items-center">
              <small>30%</small>
            </div>

            <Link href="/" className="text-1xl">
              Flexible Black Smart Watches For Men & Women
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
                <h3>$699.99</h3>
              </div>
              <div className="shopping flex justify-center items-center">
                <ShoppingOutlined />
              </div>
            </div>
            <p className="text-1xl mt-3">2 Day Delivery</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={6} lg={6}>
          <div className="p-5 single-product">
            <Image src={productSm} alt="" />
            <div className="wishlist flex justify-center items-center">
              <HeartOutlined />
            </div>
            <div className="discount flex justify-center items-center">
              <small>30%</small>
            </div>

            <Link href="/" className="text-1xl">
              Flexible Black Smart Watches For Men & Women
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
                <h3>$699.99</h3>
              </div>
              <div className="shopping flex justify-center items-center">
                <ShoppingOutlined />
              </div>
            </div>
            <p className="text-1xl mt-3">2 Day Delivery</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BestSellers;
