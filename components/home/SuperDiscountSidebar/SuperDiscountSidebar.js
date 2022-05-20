import { Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import oppof7 from "../../../assets/Images/oppo-f7.png";
const SuperDiscountSidebar = () => {
    return (
        <div className="super-discount">
            <Row>
                <div className="bg-gray-100 super-discount-item p-6">
                    <h4>Super Discount</h4>
                    <h3>Brand NEW OPPO F7</h3>
                    <p>Do not miss the last opportunity</p>

                    <Link href="shop">
                        <Link href="shop">
                            <button className="custom-btn">Shop Now</button>
                        </Link>
                    </Link>
                    <div className="sidebar-image">
                        <Image preview={false} src={oppof7} alt="" />
                    </div>
                </div>
            </Row>
        </div>
    );
};

export default SuperDiscountSidebar;
