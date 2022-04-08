import { Col, Row } from "antd";
const PromoLgThree = () => {
  return (
    <div className="container promo-lg-one">
      <Row className="promo-lg bg-orange-100 m-4 p-8 flex justify-between items-center">
        <Col md={19}>
          <h3>Super Discount For Your First Purchase</h3>
          <p>Use Discount Code In Checkout Page</p>
        </Col>
        <Col md={5}>
          <h4>Code: OTHOBA300</h4>
        </Col>
      </Row>
    </div>
  );
};

export default PromoLgThree;
