import { Image, Table, Tag } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/layouts/adminLayout";

const AdminHome = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios
			.get("https://othobamart-api.herokuapp.com/product")
			.then((res) => {
				const arr = [];
				for (const value of res.data.result) {
					arr.push({ ...value, key: value._id });
				}
				setData(arr);
			})
			.catch((e) => console.log(e));
	}, []);

	const columns = [
		{
			title: "Preview",
			key: "img",
			render: (product) => (
				<Image
					src={product.product_img}
					width={50}
					alt={product.product_name}
				/>
			),
		},
		{
			title: "Product Name",
			dataIndex: "product_name",
			key: "name",
		},
		{
			title: "Price",
			dataIndex: "product_price",
			key: "price",
		},
		{
			title: "Category",
			dataIndex: "product_category",
			key: "product_category",
			render: (categories) =>
				categories ? (
					<>
						{categories.map((category) => (
							<Tag color={"#FF6A00"} key={category}>
								{category}
							</Tag>
						))}
					</>
				) : null,
		},
		{
			title: "Colors",
			dataIndex: "product_colors",
			key: "product_colors",
			render: (colors) =>
				colors ? (
					<>
						{colors.map((color) => (
							<Tag color={color.toUpperCase()} key={color}>
								{color}
							</Tag>
						))}
					</>
				) : null,
		},
		{
			title: "Tags",
			dataIndex: "product_tags",
			key: "product_tags",
			render: (tags) =>
				tags ? (
					<>
						{tags.map((tag) => (
							<Tag color={"#FF6A00"} key={tag}>
								{tag}
							</Tag>
						))}
					</>
				) : null,
		},
		{
			title: "Sizes",
			dataIndex: "product_sizes",
			key: "product_sizes",
			render: (sizes) =>
				sizes ? (
					<>
						{sizes.map((size) => (
							<Tag color={"#FF6A00"} key={size}>
								{size}
							</Tag>
						))}
					</>
				) : null,
		},
		{
			title: "Description",
			dataIndex: "product_description",
			key: "product_description",
		},
	];

	return (
		<AdminLayout title="Othoba Mart | Admin">
			<Table
				columns={columns}
				dataSource={data}
				scroll={{ x: 1200 }}
				pagination={{ position: ["bottomCenter"] }}
			/>
		</AdminLayout>
	);
};

export default AdminHome;
