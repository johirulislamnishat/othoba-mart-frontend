import { Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import macbookPro from "../../../assets/Images/macbookPro.png";
const SuperDiscountThreeSidebar = () => {
    return (
        <div className="super-discount mb-6">
            <Row>
                <div className="bg-gray-100 super-discount-three-item p-6">
                    <h4>Super Discount</h4>
                    <h3>NEW MacBook Pro in 16-inch and 14-inch Sizes</h3>
                    <p>Do not miss the last opportunity</p>
                    <Link href="shop">
                        <Link href="shop">
                            <button className="custom-btn">Shop Now</button>
                        </Link>
                    </Link>
                    <div className="sidebar-image">
                        <Image preview={false} src={macbookPro} alt="" />
                    </div>
                </div>
            </Row>
        </div>
    );
};

export default SuperDiscountThreeSidebar;
