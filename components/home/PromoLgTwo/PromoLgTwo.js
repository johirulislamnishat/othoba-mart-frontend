import { Col, Row } from "antd";
import Image from "next/image";
import productSm from "../../../public/images/Products/product-sm-1.jpeg";
const PromoLgTwo = () => {
  return (
    <div className="container promo-lg-one">
      <Row className="promo-lg bg-cyan-200 m-4 p-8 flex justify-between items-center">
        <Col md={12}>
          <h4>Weekend Discount</h4>
          <h3>Smartwatch Big Deal</h3>
          <p>Do not miss the last opportunity</p>
          <button className="custom-btn">Shop Now</button>
        </Col>
        <Col md={12}>
          <Image src={productSm} className="promo-image" alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default PromoLgTwo;
