import { CarOutlined } from "@ant-design/icons";
import { Carousel, Col, Image, Rate, Row } from "antd";
import Text from "antd/lib/typography/Text";
import React from "react";

const HomeHeader = () => {
	return (
		<div>
			<Row>
				<Col xs={0} md={0} lg={4}>
					<h1>First</h1>
				</Col>
				<Col xs={24} md={24} lg={14}>
					<Carousel autoplay>
						<div>
							<Image
								width={"100%"}
								src="https://www.portotheme.com/wordpress/porto/shop22/wp-content/uploads/sites/94/2019/06/shop22_home_slide1.jpg"
								preview={false}
							/>
						</div>
						<div>
							<Image
								width={"100%"}
								src="https://www.portotheme.com/wordpress/porto/shop22/wp-content/uploads/sites/94/2019/06/shop22_home_slide2.jpg"
								preview={false}
							/>
						</div>
					</Carousel>
				</Col>
				<Col xs={24} md={24} lg={6}>
					<Carousel autoplay className="text-center">
						<div className="bg-white">
							<Image
								width={"100%"}
								src="https://www.portotheme.com/wordpress/porto/shop22/wp-content/uploads/sites/94/2018/06/shop22_product7-300x300.jpg"
								preview={false}
							/>
							<div className="-mt-2">
								<p className="text-lg -mb-1">
									1080P Wifi IP Camera
								</p>
								<Rate disabled defaultValue={3} />
								<br />
								<Text delete>$596.00</Text>{" "}
								<Text strong>$496.00</Text>
								<p className="py-4" />
							</div>
						</div>
						<div className="bg-white">
							<Image
								width={"100%"}
								src="https://www.portotheme.com/wordpress/porto/shop22/wp-content/uploads/sites/94/2018/06/shop22_product3-300x300.jpg"
								preview={false}
							/>
							<div className="-mt-2">
								<p className="text-lg -mb-1">HD Camera</p>
								<Rate disabled defaultValue={3} />
								<br />
								<Text delete>$299.00</Text>{" "}
								<Text strong>$199.00</Text>
								<p className="py-4" />
							</div>
						</div>
					</Carousel>
				</Col>
			</Row>

			<Row
				gutter={[16, 16]}
				align="middle"
				className="bg-white py-3 mt-3"
			>
				<Col xs={24} md={12} xl={6}>
					<Row gutter={[16, 16]} align="middle" justify="center">
						<Col>
							<CarOutlined className="text-3xl" />
						</Col>
						<Col>
							<span className="block">
								FREE SHIPPING & RETURN
							</span>
							<span className="block">
								Free shipping on orders over $99
							</span>
						</Col>
					</Row>
				</Col>

				<Col xs={24} md={12} xl={6}>
					<Row gutter={[16, 16]} align="middle" justify="center">
						<Col>
							<CarOutlined className="text-3xl" />
						</Col>
						<Col>
							<span className="block">
								FREE SHIPPING & RETURN
							</span>
							<span className="block">
								Free shipping on orders over $99
							</span>
						</Col>
					</Row>
				</Col>

				<Col xs={24} md={12} xl={6}>
					<Row gutter={[16, 16]} align="middle" justify="center">
						<Col>
							<CarOutlined className="text-3xl" />
						</Col>
						<Col>
							<span className="block">
								FREE SHIPPING & RETURN
							</span>
							<span className="block">
								Free shipping on orders over $99
							</span>
						</Col>
					</Row>
				</Col>

				<Col xs={24} md={12} xl={6}>
					<Row gutter={[16, 16]} align="middle" justify="center">
						<Col>
							<CarOutlined className="text-3xl" />
						</Col>
						<Col>
							<span className="block">
								FREE SHIPPING & RETURN
							</span>
							<span className="block">
								Free shipping on orders over $99
							</span>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default HomeHeader;
