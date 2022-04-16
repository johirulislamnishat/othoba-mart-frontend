import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
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
import AdminLayout from "../../../components/layouts/adminLayout";

const { Option } = Select;

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

	const handleStatus = (value, field) => {
		axios
			.put(
				`${API_BASE_URL}/order/${field.id}`,
				{ status: value },
				{
					headers: {
						token: `Bearer ${token}`,
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
			title: "User id",
			dataIndex: "user_id",
			key: "2",
			width: 100,
			render: (id) => <Tooltip title={id}>#{id.slice(15)}</Tooltip>,
		},
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
			title: "Total Price",
			dataIndex: "total_price",
			key: "5",
			width: 100,
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
					<Option id={order._id} value="pending">
						<div className="flex items-center">
							<div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-yellow-400" />
							Pending
						</div>
					</Option>
					<Option id={order._id} value="approved">
						<div className="flex items-center">
							<div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-lime-300" />
							Approved
						</div>
					</Option>
					<Option id={order._id} value="shifted">
						<div className="flex items-center">
							<div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-violet-500" />
							Shifted
						</div>
					</Option>
					<Option id={order._id} value="completed">
						<div className="flex items-center">
							<div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-green-500" />
							Completed
						</div>
					</Option>
					<Option id={order._id} value="cancled">
						<div className="flex items-center">
							<div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-stone-300" />
							Cancled
						</div>
					</Option>
					<Option id={order._id} value="rejected">
						<div className="flex items-center">
							<div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-red-500" />
							Rejected
						</div>
					</Option>
				</Select>
			),
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
		<AdminLayout title="Othoba Mart | Orders" pageTitle="Orders">
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
