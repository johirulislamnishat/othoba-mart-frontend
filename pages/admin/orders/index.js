import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Divider, Popconfirm, Space, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import AdminLayout from "../../../components/layouts/adminLayout";

const Orders = () => {
	const [data, setData] = useState(null);
	const [token, setToken] = useState(null);

	useEffect(() => {
		axios
			.get(`${API_BASE_URL}/order`)
			.then((res) => {
				const arr = [];
				for (const value of res.data.result) {
					arr.push({ ...value, key: value._id });
				}
				setData(arr);
				console.log(res.data.result);
			})
			.catch((e) => console.log(e));

		if (typeof window !== "undefined") {
			setToken(localStorage.getItem("token"));
		}
	}, []);

	const deleteOrder = (order) => {
		axios
			.delete(`${API_BASE_URL}/order/${order._id}`, {
				headers: {
					token: `Bearer ${token}`,
				},
			})
			.then((res) => {
				message.success(res.data.message);
				setData(data.filter((item) => item != order));
			})
			.catch((e) => console.log(e));
	};

	const columns = [
		{
			title: "User Name",
			dataIndex: "user_name",
			key: "name",
			width: 200,
		},
		{
			title: "User Email",
			dataIndex: "email",
			key: "email",
			width: 250,
		},
		{
			title: "Phone",
			dataIndex: "phone",
			key: "3",
			width: 200,
		},
		{
			title: "Address",
			dataIndex: "address",
			key: "4",
			width: 280,
		},
		{
			title: "",
			key: "actions",
			width: 80,
			render: (order) => (
				<Space split={<Divider type="vertical" />}>
					<Popconfirm
						title="Are you sure you want to delete this order?"
						onConfirm={() => deleteOrder(order)}
						okText="Yes"
						cancelText="No"
						placement="topRight"
					>
						<DeleteOutlined />
					</Popconfirm>
					<EditOutlined />
				</Space>
			),
		},
	];

	return (
		<AdminLayout title="Othoba Mart | Orders">
			<Table
				columns={columns}
				dataSource={data}
				scroll={{ x: 1550 }}
				pagination={{ position: ["bottomCenter"] }}
				size="small"
			/>
		</AdminLayout>
	);
};

export default Orders;
