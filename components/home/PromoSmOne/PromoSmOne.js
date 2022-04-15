import { Col, Row } from "antd";
import Image from "next/image";
import headphone from "../../../public/images/Products/headphone.jpg";
const PromoSmOne = () => {
  return (
    <div className="container promo-lg-one ">
      <Row>
        <Col md={12} sm={24}>
          <Row className="promo-lg bg-gray-100 p-6 mr-2 mb-3 flex justify-between items-center">
            <Col md={12}>
              <h4>Weekend Discount</h4>
              <h3>Smartphone</h3>
              <p>Do not miss the last opportunity</p>
              <button className="custom-btn">Shop Now</button>
            </Col>
            <Col md={12}>
              <Image src={headphone} className="promo-image" alt="" />
            </Col>
          </Row>
        </Col>
        <Col md={12} sm={24}>
          <Row className="promo-lg bg-gray-100 p-6 flex justify-between items-center">
            <Col md={12}>
              <h4>Weekend Discount</h4>
              <h3>Speaker</h3>
              <p>Do not miss the last opportunity</p>
              <button className="custom-btn">Shop Now</button>
            </Col>
            <Col md={12}>
              <Image src={headphone} className="promo-image" alt="" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default PromoSmOne;
