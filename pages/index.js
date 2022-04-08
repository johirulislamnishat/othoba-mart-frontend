import { Col, Menu, Row } from "antd";
import { useState } from "react";
import HomeHeader from "../components/home/header";
import NewProducts from "../components/home/NewProducts/NewProducts";
import ProductCards from "../components/home/ProductCards/ProductCards";
import PromoLgThree from "../components/home/PromoLgThree/PromoLgThree";
import PromoLgTwo from "../components/home/PromoLgTwo/PromoLgTwo";
import Sidebar from "../components/home/Sidebar/Sidebar";
import useAuth from "../components/hooks/useAuth";
import HomeLayout from "../components/layouts/homeLayout";

const { SubMenu } = Menu;

export default function Home() {

	return (
		<HomeLayout title="Othoba Mart">
			<HomeHeader />
			<NewProducts />
			<PromoLgTwo />
			<Row>
                <Col>
					<Sidebar />
				</Col>
				<Col
					xs={16}
					md={8}
					lg={19}
					className="pl-5 sm:pl-32 md:pl-0 lg:pl-8 xl:pl-16"
				>
					<NewProducts />
					<ProductCards />
				</Col>
			</Row>
			<PromoLgThree />
		</HomeLayout>
	);
}
