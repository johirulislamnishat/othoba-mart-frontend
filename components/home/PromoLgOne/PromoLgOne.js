import { Carousel, Col, Image } from "antd";
import Link from "next/link";

const PromoLgOne = () => {
  return (
    <div className="container promo-lg-one  my-6">
      <Col xs={24} md={24} lg={24}>
        <Carousel autoplay>
          <div className="promo-lg bg-gray-100 p-8 custom-promo-carousel">
            <div className="mt-6">
              <h4 className="pb-4">Weekend Discount</h4>
              <h3 className="pb-4">Smartwatch Big Deal</h3>
              <p className="pb-4">Do not miss the last opportunity</p>
              <Link href="shop">
                <button className="custom-btn">Shop Now</button>
              </Link>
            </div>
            <div>
              <Image
                className="float-right"
                width={"100%"}
                src="https://i.ibb.co/8B313cd/super-smartphone.png"
                alt="banner"
                preview={false}
              />
            </div>
          </div>
          <div className="promo-lg bg-gray-100 p-8 custom-promo-carousel">
            <div className="mt-6">
              <h4 className="pb-4">Weekend Discount</h4>
              <h3 className="pb-4">Powerbank Best Offer</h3>
              <p className="pb-4">Do not miss the last opportunity</p>
              <Link href="shop">
                <button className="custom-btn">Shop Now</button>
              </Link>
            </div>
            <div>
              <Image
                className="float-right"
                width={"100%"}
                src="https://i.ibb.co/zFsV14x/power-Bank.png"
                alt="banner"
                preview={false}
              />
            </div>
          </div>
        </Carousel>
      </Col>
    </div>
  );
};

export default PromoLgOne;
