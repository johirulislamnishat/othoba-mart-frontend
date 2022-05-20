import { Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import iPhone13MaxPro from "../../../assets/Images/iPhone13MaxPro.png";
const SuperDiscountTwoSidebar = () => {
    return (
        <div className="super-discount mb-6  w-full ">
            <Row>
                <div className="bg-gray-100 super-discount-two-item p-6">
                    <h4>Super Discount</h4>
                    <h3>iPhone 13 Max Pro</h3>
                    <p>Do not miss the last opportunity</p>
                    <Link href="shop">
                        <Link href="shop">
                            <button className="custom-btn">Shop Now</button>
                        </Link>
                    </Link>
                    <div className="sidebar-image">
                        <Image preview={false} src={iPhone13MaxPro} alt="" />
                    </div>
                </div>
            </Row>
        </div>
    );
};

export default SuperDiscountTwoSidebar;
