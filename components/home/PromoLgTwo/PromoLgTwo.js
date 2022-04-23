import { Col, Row } from "antd";
import Image from "next/image";
import smartwatches from "../../../assets/Images/smartwatches.png";
const PromoLgTwo = () => {
  return (
    <div className="container promo-lg-two">
      <Row className="promo-lg bg-black p-8 flex justify-between items-center">
        <Col className="mb-6" md={12}>
          <h4 className="text-white">Weekend Discount</h4>
          <h3 className="text-white">Smartwatch Big Deal</h3>
          <p>Do not miss the last opportunity</p>
          <button className="custom-btn">Shop Now</button>
        </Col>
        <Col md={12}>
          <Image src={smartwatches} className="promo-image" alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default PromoLgTwo;
