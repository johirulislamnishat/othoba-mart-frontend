import { Row } from "antd";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import Card from "./Card";
const BestSellers = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios
			.get(API_BASE_URL + "/product/paginated?page=0&size=4")
			.then(function (response) {
				setItems(response?.data?.result);
			});
	}, []);

	return (
		<div className="container best-sellers">
			<div className="section-title mt-6 flex justify-between items-center border-b-2">
				<h2 className="text-2xl">Best Sellers</h2>
				<Link href="/">See All</Link>
			</div>
			<Row>
				{items.map((item, index) => {
					return <Card item={item} key={index} />;
				})}
			</Row>
		</div>
	);
};

export default BestSellers;
