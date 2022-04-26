import { Row } from "antd";
import Image from "next/image";
import React from "react";
import smartphone from "../../../public/images/Products/smartphone.jpg";
const SuperDiscountSidebar = () => {
	return (
		<div className="super-discount">
			<Row>
				<div className="bg-gray-100 super-discount-item p-6">
					<h4>Super Discount</h4>
					<h3>New Phone 11</h3>
					<p>Do not miss the last opportunity</p>
					<button className="custom-btn">Shop Now</button>
					<div className="sidebar-image">
						<Image src={smartphone} alt="super-discount" />
					</div>
				</div>
			</Row>
		</div>
	);
};

export default SuperDiscountSidebar;
