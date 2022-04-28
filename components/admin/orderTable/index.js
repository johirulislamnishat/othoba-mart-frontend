import { DeleteOutlined } from "@ant-design/icons";
import {
	Divider,
	message,
	Popconfirm,
	Select,
	Space,
	Table,
	Tooltip,
} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import useProvider from "../../../hooks/useProvider";
import { humaneDate } from "../../../utilities/time";

const { Option } = Select;
export let orderData;

const OrderTable = () => {
	const [data, setData] = useState(null);
	const {
		state: {
			user: { accessToken },
		},
	} = useProvider();

	useEffect(() => {
		if (accessToken) {
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
					orderData = arr;
				})
				.catch((e) => console.log(e));
		}
	}, [accessToken]);

	const deleteOrder = (order) => {
		axios
			.delete(`${API_BASE_URL}/order/${order._id}`, {
				headers: {
					token: `Bearer ${accessToken}`,
				},
			})
			.then((res) => {
				message.success(res.data.message);
				setData(data.filter((item) => item != order));
			})
			.catch((e) => console.log(e));
	};

	const handleStatus = (value, field) => {
		axios
			.put(
				`${API_BASE_URL}/order/${field.id}`,
				{ status: value },
				{
					headers: {
						token: `Bearer ${accessToken}`,
					},
				}
			)
			.then((res) => {
				message.success(res.data.message);
			})
			.catch(() => message.success("Failed to change status"));
	};

	const columns = [
		{
			title: "Order id",
			dataIndex: "_id",
			key: "2",
			width: 100,
			render: (id) => <Tooltip title={id}>#{id.slice(15)}</Tooltip>,
		},
		{
			title: "Customer Name",
			dataIndex: "user_name",
			key: "name",
			width: 200,
		},

		{
			title: "Customer Email",
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
			title: "Order At",
			dataIndex: "createdAt",
			key: "order",
			width: 150,
			render: (date) => humaneDate(date),
		},
		{
			title: "Total Price",
			dataIndex: "total_price",
			key: "5",
			width: 120,
			defaultSortOrder: "descend",
			sorter: (a, b) => a.total_price - b.total_price,
		},
		{
			title: "Status",
			key: "6",
			width: 150,
			render: (order) => (
				<Select
					style={{ width: 150 }}
					defaultValue={order.status.toLowerCase()}
					onChange={(value, field) => handleStatus(value, field)}
				>
					<Option id={order._id} value="placed">
						<div className="flex items-center">
							<div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-lime-300" />
							Placed
						</div>
					</Option>

					<Option id={order._id} value="pending">
						<div className="flex items-center">
							<div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-yellow-400" />
							Pending
						</div>
					</Option>

					<Option id={order._id} value="cancelled">
						<div className="flex items-center">
							<div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-red-500" />
							Cancelled
						</div>
					</Option>

					<Option id={order._id} value="packaging">
						<div className="flex items-center">
							<div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-green-500" />
							Packaging
						</div>
					</Option>

					<Option id={order._id} value="shipped">
						<div className="flex items-center">
							<div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-violet-500" />
							Shipped
						</div>
					</Option>

					<Option id={order._id} value="delivered">
						<div className="flex items-center">
							<div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-stone-300" />
							Delivered
						</div>
					</Option>
				</Select>
			),
			filters: [
				{
					text: "Placed",
					value: "placed",
				},
				{
					text: "Pending",
					value: "pending",
				},
				{
					text: "Cancelled",
					value: "cancelled",
				},
				{
					text: "Packaging",
					value: "packaging",
				},
				{
					text: "Shipped",
					value: "shipped",
				},
				{
					text: "Delivered",
					value: "delivered",
				},
			],
			onFilter: (value, record) => record.status.indexOf(value) === 0,
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
					{/* <EditOutlined /> */}
				</Space>
			),
		},
	];

	return (
		<Table
			columns={columns}
			dataSource={data}
			scroll={{ x: 1550 }}
			pagination={{ position: ["bottomCenter"] }}
			size="small"
		/>
	);
};

export default OrderTable;
