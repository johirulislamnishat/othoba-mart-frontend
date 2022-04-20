import { ShoppingOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import { Col, Image, Row } from "antd";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";

const LatestDeals = () => {
	const [items, setItems] = useState([]);
<<<<<<< HEAD
	console.log(items);
=======
	// console.log(items);
>>>>>>> 2e1ad975e430e6e45c8eefff463f64065d0814d9

	useEffect(() => {
		axios
			.get(API_BASE_URL + "/product/paginated?page=0&size=2")
			.then(function (response) {
				setItems(response?.data?.result);
			});
	}, []);
	return (
		<div className="container latest-deals">
			<div className="section-title mt-8 flex justify-between items-center border-b-2">
				<h2 className="text-2xl">Latest Deals</h2>
				<Link href="/">See All</Link>
			</div>
			<Row>
				{items.map((item, index) => {
					return (
<<<<<<< HEAD
						<>
							<Col
								className="single-product"
								key={index}
								xs={24}
								sm={12}
								md={12}
								lg={12}
							>
								<Row className="">
									<div className="border-2 p-4 m-4 flex justify-between items-center">
										<Col md={10} className="product-image">
											<Image
												preview={false}
												src={item?.product_img}
												alt=""
											/>
											<div className="discount flex justify-center items-center">
												<small>24%</small>
											</div>
										</Col>
										<Col md={14}>
											<Link
												href="/product/[id]"
												as={`/product/${item._id}`}
											>
												<a className="text-1xl">
													{" "}
													{item?.product_name}
												</a>
											</Link>
											<div className="ratings">
												<StarFilled />
												<StarFilled />
												<StarFilled />
												<StarFilled />
												<StarOutlined />
											</div>
											<div className="flex justify-between items-center mt-4">
												<div className="product-price">
													<small>$779.99</small>
													<h3>
														${item?.product_price}
														.00
													</h3>
												</div>
												<div className="shopping flex justify-center items-center">
													<ShoppingOutlined />
												</div>
											</div>
											<div className="product-data flex justify-between items-center mt-4">
												<p>
													<span>Available:</span>{" "}
													<span> 24</span>
												</p>
												<p>
													<span>Sold: </span>{" "}
													<span>8</span>
												</p>
											</div>
										</Col>
									</div>
								</Row>
							</Col>
						</>
=======
						<Col
							className="single-product"
							key={index}
							xs={24}
							sm={12}
							md={12}
							lg={12}
						>
							<Row className="">
								<div className="border-2 p-4 m-4 flex justify-between items-center">
									<Col md={10} className="product-image">
										<Image
											preview={false}
											src={item?.product_img}
											alt=""
										/>
										<div className="discount flex justify-center items-center">
											<small>24%</small>
										</div>
									</Col>
									<Col md={14}>
										<Link
											href="/product/[id]"
											as={`/product/${item._id}`}
										>
											<a className="text-1xl">
												{" "}
												{item?.product_name}
											</a>
										</Link>
										<div className="ratings">
											<StarFilled />
											<StarFilled />
											<StarFilled />
											<StarFilled />
											<StarOutlined />
										</div>
										<div className="flex justify-between items-center mt-4">
											<div className="product-price">
												<small>$779.99</small>
												<h3>
													${item?.product_price}
													.00
												</h3>
											</div>
											<div className="shopping flex justify-center items-center">
												<ShoppingOutlined />
											</div>
										</div>
										<div className="product-data flex justify-between items-center mt-4">
											<p>
												<span>Available:</span>{" "}
												<span> 24</span>
											</p>
											<p>
												<span>Sold: </span>{" "}
												<span>8</span>
											</p>
										</div>
									</Col>
								</div>
							</Row>
						</Col>
>>>>>>> 2e1ad975e430e6e45c8eefff463f64065d0814d9
					);
				})}
			</Row>
		</div>
	);
};

export default LatestDeals;
