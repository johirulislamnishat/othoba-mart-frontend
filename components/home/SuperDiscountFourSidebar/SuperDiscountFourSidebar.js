import { Row } from "antd";
import Link from "next/link";
import React from "react";
const SuperDiscountFourSidebar = () => {
    return (
        <div className="super-discount">
            <Row>
                <div className="bg-gray-100 super-discount-four-item p-6">
                    <h3>60% OFF ON HEADPHONE</h3>
                    <h4>PROMO CODE: 60%OFFHP</h4>
                    <p>Do not miss the last opportunity</p>
                    <Link href="shop">
                        <Link href="shop">
                            <button className="custom-btn">Shop Now</button>
                        </Link>
                    </Link>
                </div>
            </Row>
        </div>
    );
};

export default SuperDiscountFourSidebar;
