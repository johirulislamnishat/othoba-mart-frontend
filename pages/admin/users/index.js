import { DeleteOutlined } from "@ant-design/icons";
import { message, Popconfirm, Select, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import AdminLayout from "../../../components/layouts/adminLayout";

const { Option } = Select;

const Users = () => {
	const [token, setToken] = useState(null);
	const [data, setData] = useState(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setToken(localStorage.getItem("token"));

			axios
				.get(`${API_BASE_URL}/user/all`, {
					headers: {
						token: `Bearer ${localStorage.getItem("token")}`,
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
		}
	}, []);

	const deleteUser = (user) => {
		axios
			.delete(`${API_BASE_URL}/user/${user._id}`, {
				headers: {
					token: `Bearer ${token}`,
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
						token: `Bearer ${token}`,
					},
				}
			)
			.then((res) => {
				console.log(res.data);
				message.success(res.data.message);
			})
			.catch(() => message.success("Failed to change status"));
	};

	const columns = [
		{
			title: "Name",
			dataIndex: "user_name",
			key: "1",
			width: 300,
		},
		{
			title: "email",
			dataIndex: "email",
			key: "2",
			width: 400,
		},
		{
			title: "Role",
			key: "3",
			width: 350,
			render: (user) => (
				<div>
					{user.isSuperAdmin && (
						<span className="mr-2">Super Admin</span>
					)}
					{user.isAdmin && <span className="mr-2">Admin</span>}
					{user.isVendor && <span className="mr-2">vendor</span>}
					{user.isCustomer && <span className="mr-2">Customer</span>}
				</div>
			),
		},
		{
			title: "Shop Name",
			dataIndex: "shop_name",
			key: "4",
			width: 200,
		},
		{
			title: "Vendor Status",
			key: "5",
			width: 100,
			render: (user) => (
				<Select
					defaultValue={user.vendor_status.toLowerCase()}
					onChange={(value, field) => handleStatus(value, field)}
				>
					<Option id={user._id} value="pending">
						pending
					</Option>
					<Option id={user._id} value="approved">
						approved
					</Option>
					<Option id={user._id} value="rejected">
						rejected
					</Option>
				</Select>
			),
		},
		{
			title: "",
			key: "actions",
			width: 80,
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
		<AdminLayout title={"Admin || All Users"}>
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

export default Users;
