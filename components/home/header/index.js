import {
	CarOutlined,
	CheckCircleOutlined,
	CreditCardOutlined,
	DollarCircleOutlined,
} from "@ant-design/icons";
import { Carousel, Col, Image, Menu, Rate, Row } from "antd";
import Text from "antd/lib/typography/Text";
import React from "react";

const HomeHeader = () => {
	return (
		<div className="mt-3">
			<Row gutter={[16, 16]}>
				<Col xs={0} md={0} lg={4} className="mt-5">
					<Menu defaultSelectedKeys={["1"]} mode="inline">
						<Menu.Item key="1">Home</Menu.Item>
						<Menu.Item key="2">Fashion</Menu.Item>
						<Menu.Item key="3">Electronics</Menu.Item>
						<Menu.Item key="4">Gifts</Menu.Item>
						<Menu.Item key="5">Garden</Menu.Item>
						<Menu.Item key="6">Music</Menu.Item>
						<Menu.Item key="7">Motors</Menu.Item>
						<Menu.Item key="8">Furniture</Menu.Item>
						<Menu.Item key="9">Trousers</Menu.Item>
						<Menu.Item key="10">VIEW ALL &gt;</Menu.Item>
					</Menu>
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
							<DollarCircleOutlined className="text-3xl" />
						</Col>
						<Col>
							<span className="block">MONEY BACK GUARANTEE</span>
							<span className="block">
								100% money back guarantee
							</span>
						</Col>
					</Row>
				</Col>

				<Col xs={24} md={12} xl={6}>
					<Row gutter={[16, 16]} align="middle" justify="center">
						<Col>
							<CheckCircleOutlined className="text-3xl" />
						</Col>
						<Col>
							<span className="block">ONLINE SUPPORT 24/7</span>
							<span className="block">
								Lorem ipsum dolor sit amet.
							</span>
						</Col>
					</Row>
				</Col>

				<Col xs={24} md={12} xl={6}>
					<Row gutter={[16, 16]} align="middle" justify="center">
						<Col>
							<CreditCardOutlined className="text-3xl" />
						</Col>
						<Col>
							<span className="block">SECURE PAYMENT</span>
							<span className="block">
								Lorem ipsum dolor sit amet.
							</span>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default HomeHeader;
