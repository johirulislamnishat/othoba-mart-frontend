import { DeleteOutlined } from "@ant-design/icons";
import {
	Divider,
	Image,
	message,
	Popconfirm,
	Select,
	Space,
	Table,
} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import useProvider from "../../../hooks/useProvider";
import { humaneDate } from "../../../utilities/time";

const { Option } = Select;
export let blogData;

const BlogsTable = () => {
	const [data, setData] = useState(null);
	const {
		state: {
			user: { accessToken },
		},
	} = useProvider();

	useEffect(() => {
		axios
			.get(`${API_BASE_URL}/blog`)
			.then((res) => {
				const arr = [];
				for (const value of res.data.result) {
					arr.push({ ...value, key: value._id });
				}
				setData(arr);
				blogData = arr;
			})
			.catch((e) => console.log(e));
	}, []);

	const deleteBlog = (blog) => {
		axios
			.delete(`${API_BASE_URL}/blog/${blog._id}`, {
				headers: {
					token: `Bearer ${accessToken}`,
				},
			})
			.then((res) => {
				message.success(res.data.message);
				setData(data.filter((item) => item != blog));
			})
			.catch(() => message.error("Blog delete failed"));
	};

	const handleStatus = (value, field) => {
		axios
			.put(
				`${API_BASE_URL}/blog/status/${field.id}`,
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
			.catch(() => message.error("Failed to change status"));
	};

	const columns = [
		{
			title: "Preview",
			dataIndex: "blog_image",
			key: "2",
			width: 100,
			render: (img) => (
				<Image src={img} alt={"image"} style={{ objectFit: "fill" }} />
			),
		},
		{
			title: "Blog Title",
			dataIndex: "blog_title",
			key: "name",
			width: 200,
		},

		{
			title: "Description",
			dataIndex: "blog_content",
			key: "description",
			width: 650,
		},

		{
			title: "Posted On",
			dataIndex: "createdAt",
			key: "order",
			width: 150,
			render: (date) => humaneDate(date),
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
					<Option id={order._id} value="published">
						<div className="flex items-center">
							<div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-green-500" />
							Published
						</div>
					</Option>

					<Option id={order._id} value="pending">
						<div className="flex items-center">
							<div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-yellow-400" />
							Pending
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
			filters: [
				{
					text: "Published",
					value: "published",
				},
				{
					text: "Pending",
					value: "pending",
				},
				{
					text: "Rejected",
					value: "rejected",
				},
			],
			onFilter: (value, record) => record.status.indexOf(value) === 0,
		},

		{
			title: "Actions",
			key: "actions",
			width: 80,
			render: (blog) => (
				<Space split={<Divider type="vertical" />}>
					<Popconfirm
						title="Are you sure you want to delete this blog?"
						onConfirm={() => deleteBlog(blog)}
						okText="Yes"
						cancelText="No"
						placement="topRight"
					>
						<DeleteOutlined />
					</Popconfirm>
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

export default BlogsTable;
