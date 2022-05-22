import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import headphone from "../../../assets/Images/headphone.png";
import speaker from "../../../assets/Images/speaker.png";
const PromoSmOne = () => {
  return (
    <div className="container promo-sm-one">
      <Row>
        <Col md={12} sm={24}>
          <Row className="promo-lg bg-gray-100 p-6 md:mr-2 mb-4 flex justify-between items-center">
            <Col md={12}>
              <h4>Weekend Discount</h4>
              <h3>Headphone</h3>
              <p>Do not miss the last opportunity</p>
              <Link href="/shop" passHref>
                <button className="custom-btn">Shop Now</button>
              </Link>
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
              <Link href="/shop" passHref>
                <button className="custom-btn">Shop Now</button>
              </Link>
            </Col>
            <Col md={12}>
              <Image src={speaker} className="promo-image" alt="" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default PromoSmOne;
