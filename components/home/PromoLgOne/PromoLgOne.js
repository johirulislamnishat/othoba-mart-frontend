import { Col, Row } from "antd";
import Image from "next/image";
import superSmartphone from "../../../assets/Images/super-smartphone.png";
const PromoLgOne = () => {
  return (
    <div className="container promo-lg-one">
      <Row className="promo-lg bg-gray-100 p-8 flex justify-between items-center">
        <Col md={12} className="mb-6">
          <h4>Weekend Discount</h4>
          <h3>Supper Smartphone Deal</h3>
          <p>Do not miss the last opportunity</p>
          <button className="custom-btn">Shop Now</button>
        </Col>
        <Col md={12}>
          <Image src={superSmartphone} className="promo-image" alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default PromoLgOne;
