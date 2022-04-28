import { DeleteOutlined } from "@ant-design/icons";
import { message, Popconfirm, Select, Table, Tag } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import useProvider from "../../../hooks/useProvider";
const { Option } = Select;

const UsersTable = () => {
	const [data, setData] = useState(null);
	const {
		state: {
			user: { accessToken },
		},
	} = useProvider();

	useEffect(() => {
		axios
			.get(`${API_BASE_URL}/user/all`, {
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

	const deleteUser = (user) => {
		axios
			.delete(`${API_BASE_URL}/user/${user._id}`, {
				headers: {
					token: `Bearer ${accessToken}`,
				},
			})
			.then((res) => {
				message.success(res.data.message);
				setData(data.filter((item) => item != user));
			})
			.catch(() => message.error("Failed to delete user!"));
	};

	const handleStatus = (value, field) => {
		axios
			.put(
				`${API_BASE_URL}/user/vendor/${field.id}`,
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
			title: "Name",
			dataIndex: "user_name",
			key: "1",
			width: 250,
			defaultSortOrder: "descend",
			sorter: (a, b) =>
				a.user_name.charCodeAt(0) - b.user_name.charCodeAt(0),
		},
		{
			title: "email",
			dataIndex: "email",
			key: "2",
			width: 300,
		},
		{
			title: "Role",
			key: "3",
			width: 300,
			render: (user) => (
				<div>
					{user.isSuperAdmin && (
						<Tag color={"rgba(255, 239, 217, 1)"}>
							<span className="text-orange-500">Super Admin</span>
						</Tag>
					)}
					{user.isAdmin && (
						<Tag color={"rgba(216, 255, 238, 1)"}>
							<span className="text-green-500">Admin</span>
						</Tag>
					)}
					{user.isVendor && (
						<Tag color={"rgba(240, 255, 214, 1)"}>
							<span className="text-gray-700">Vendor</span>
						</Tag>
					)}
					{user.isCustomer && (
						<Tag color={"rgba(255, 239, 217, 1)"}>
							<span className="text-orange-500">Customer</span>
						</Tag>
					)}
				</div>
			),
		},
		{
			title: "Shop Name",
			dataIndex: "shop_name",
			key: "4",
			width: 160,
		},
		{
			title: "Status",
			key: "5",
			width: 150,
			render: (user) => (
				<Select
					style={{ width: 150 }}
					defaultValue={user.vendor_status.toLowerCase()}
					onChange={(value, field) => handleStatus(value, field)}
				>
					<Option id={user._id} value="pending">
						<div className="flex items-center">
							<div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-yellow-500" />
							Pending
						</div>
					</Option>
					<Option id={user._id} value="approved">
						<div className="flex items-center">
							<div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-green-500" />
							Approved
						</div>
					</Option>
					<Option id={user._id} value="rejected">
						<div className="flex items-center">
							<div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-red-500" />
							Rejected
						</div>
					</Option>
				</Select>
			),
			filters: [
				{
					text: "Pending",
					value: "pending",
				},
				{
					text: "Approved",
					value: "approved",
				},
				{
					text: "Rejected",
					value: "rejected",
				},
			],
			onFilter: (value, record) =>
				record.vendor_status.indexOf(value) === 0,
		},
		{
			title: "",
			key: "actions",
			width: 40,
			render: (user) => (
				<Popconfirm
					title="Are you sure you want to delete this user?"
					onConfirm={() => deleteUser(user)}
					okText="Yes"
					cancelText="No"
					placement="topRight"
				>
					<DeleteOutlined />
				</Popconfirm>
			),
		},
	];

	return (
		<Table
			columns={columns}
			dataSource={data}
			scroll={{ x: 1150 }}
			pagination={{ position: ["bottomCenter"] }}
			size="small"
		/>
	);
};

export default UsersTable;
