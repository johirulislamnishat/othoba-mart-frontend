import { Row } from "antd";
import Image from "next/image";
import React from "react";
import smartphone from "../../../public/images/Products/smartphone.jpg";
const SuperDiscountSidebar = () => {
  return (
    <div className="super-discount">
      <Row>
        <div className="bg-gray-100 p-4 m-4">
          <h4>Super Discount</h4>
          <h3>New Phone 11</h3>
          <p>Do not miss the last opportunity</p>
          <button className="custom-btn">Shop Now</button>
          <Image src={smartphone} alt="" />
        </div>
      </Row>
    </div>
  );
};

export default SuperDiscountSidebar;
