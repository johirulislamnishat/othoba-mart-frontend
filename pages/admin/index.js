import { Area } from "@ant-design/plots";
import { Col, Row, Select, Space } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../apiconstants";
import OrderTable, { orderData } from "../../components/admin/orderTable";
import AdminLayout from "../../components/layouts/adminLayout";
import useProvider from "../../hooks/useProvider";

const { Option } = Select;

const Dashboard = () => {
	const {
		state: {
			user: { accessToken },
		},
	} = useProvider();
	const [graphData, setGraphData] = useState([
		{ Date: "1 Jul", Revenew: 10000 },
		{ Date: "8 Jul", Revenew: 18000 },
		{ Date: "16 Jul", Revenew: 12000 },
		{ Date: "24 Jul", Revenew: 24500 },
		{ Date: "31 Jul", Revenew: 35000 },
		{ Date: "1 Aug", Revenew: 20000 },
		{ Date: "8 Aug", Revenew: 25200 },
		{ Date: "16 Aug", Revenew: 16000 },
		{ Date: "24 Aug", Revenew: 24500 },
		{ Date: "30 Aug", Revenew: 35000 },
	]);

	const config = {
		data: graphData,
		xField: "Date",
		yField: "Revenew",
		xAxis: {
			range: [0, 1],
			tickCount: 5,
		},
		areaStyle: () => {
			return {
				fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
			};
		},
		smooth: true,
		autoFit: true,
	};

	useEffect(() => {
		axios
			.get(`${API_BASE_URL}/order`, {
				headers: {
					token: `Bearer ${accessToken}`,
				},
			})
			.then((res) => {
				const arr = [];
				for (const value of res.data.result) {
					arr.push({ ...value, key: value._id });
				}
				setData(arr);
			})
			.catch((e) => console.log(e));
	}, [accessToken]);

	const date = [
		"2022-04-25T18:12:25.742Z",
		"2022-04-25T16:56:32.425Z",
		"2022-04-21T17:55:26.476Z",
		"2022-04-20T20:23:05.779Z",
		"2022-04-20T20:20:15.675Z",
		"2022-04-19T20:05:14.465Z",
		"2022-04-09T21:31:30.113Z",
		"2022-04-15T05:30:38.200Z",
		"2022-04-19T21:02:00.717Z",
	];

	return (
		<AdminLayout title="Admin | Dashboard" pageTitle="Dashboard">
			<Space direction="vertical" size={45} className="w-full">
				<Row gutter={[32, 32]} justify="space-between" align="middle">
					<Col xs={24} lg={12}>
						<div className="bg-white rounded-xl">
							<div className="w-full flex justify-between py-5 px-8">
								<p className="text-lg font-bold">
									Money Revenue
								</p>
								<p>Weekly</p>
							</div>
							<Area
								{...config}
								className="w-full"
								appendPadding={35}
							/>
						</div>
					</Col>
					<Col xs={24} lg={12}>
						<div className="bg-white rounded-xl">
							<div className="w-full flex justify-between py-5 px-8">
								<p className="text-lg font-bold">Profit</p>
								<p>Weekly</p>
							</div>
							<Area
								{...config}
								className="w-full bg-white rounded-xl"
								appendPadding={35}
							/>
						</div>
					</Col>
				</Row>
				<Row gutter={[12, 12]} justify="space-around" align="middle">
					<Col xs={24} md={12} lg={6}>
						<Row
							justify="space-between"
							align="middle"
							className="p-5 rounded-2xl font-semibold"
							style={{
								backgroundColor: "rgba(240, 255, 248, 1)",
							}}
						>
							<Col>New Delivery</Col>
							<Col className="text-xl">2</Col>
						</Row>
					</Col>
					<Col xs={24} md={12} lg={6}>
						<Row
							justify="space-between"
							align="middle"
							className="p-5 rounded-2xl font-semibold"
							style={{
								backgroundColor: "rgba(240, 255, 235, 1)",
							}}
						>
							<Col>Active Orders</Col>
							<Col className="text-xl">5</Col>
						</Row>
					</Col>
					<Col xs={24} md={12} lg={6}>
						<Row
							justify="space-between"
							align="middle"
							className="p-5 rounded-2xl font-semibold"
							style={{
								backgroundColor: "rgba(255, 251, 235, 1)",
							}}
						>
							<Col>Total Orders</Col>
							<Col className="text-xl">
								{orderData?.length || 0}
							</Col>
						</Row>
					</Col>
					<Col xs={24} md={12} lg={6}>
						<Row
							justify="space-between"
							align="middle"
							className="p-5 rounded-2xl font-semibold"
							style={{
								backgroundColor: "rgba(240, 255, 214, 1)",
							}}
						>
							<Col>Order in Progress</Col>
							<Col className="text-xl">4</Col>
						</Row>
					</Col>
				</Row>

				<OrderTable />
			</Space>
		</AdminLayout>
	);
};

export default Dashboard;
