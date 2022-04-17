import {
	EyeOutlined,
	HeartOutlined,
	StarFilled,
	StarOutlined,
} from "@ant-design/icons";
import { Col, Image, Row } from "antd";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
const CategoriesBasedProductsList = () => {
	const [items, setItems] = useState([]);
	console.log(items);

	useEffect(() => {
		axios
			.get(API_BASE_URL + "/product/paginated?page=0&size=6")
			.then(function (response) {
				console.log(response?.data?.result);
				setItems(response?.data?.result);
			});
	}, []);

	return (
		<div className="container new-products">
			<Row>
				{items.map((item, index) => {
					return (
						<Col lg={24} key={index}>
							<div className="product-list-view p-5 flex justify-between items-center border-2 mb-5 rounded-lg">
								{/* <Image src={item.product_img} alt="" /> */}

								<Image
									preview={false}
									src={item?.product_img}
									alt=""
								/>

								<div>
									<h3>
										<Link href="/" className="text-1xl">
											{item?.product_name}
										</Link>
									</h3>
									<p>Space for a small product description</p>
									<div className="ratings mb-4">
										<StarFilled />
										<StarFilled />
										<StarFilled />
										<StarFilled />
										<StarOutlined />
									</div>
									<div className="meta-data">
										<p>
											<span>Brand:</span>
											<span>OPPO</span>
										</p>
										<p>
											<span>Delivery:</span>
											<span>Europe</span>
										</p>
										<p>
											<span>Stoke:</span>
											<span>320 pcs</span>
										</p>
									</div>
								</div>
								<div className="product-data">
									<div className="product-price">
										<h3>${item?.product_price}.00</h3>
										<small>$779.99</small>
									</div>
									<h6 className="text-1xl mt-3">
										Free Shipping
									</h6>
									<p className="text-1xl mt-3">
										Delivery in 1 day
									</p>

									<button className="custom-btn">
										<EyeOutlined />
										<span>Product Details </span>
									</button>

									<button className="custom-btn grey-btn">
										<HeartOutlined />
										<span> Add To Wishlist</span>
									</button>
								</div>
							</div>
						</Col>
					);
				})}
			</Row>
		</div>
	);
};

export default CategoriesBasedProductsList;
