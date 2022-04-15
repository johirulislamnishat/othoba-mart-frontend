import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Divider, Image, message, Popconfirm, Space, Table, Tag } from "antd";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import AdminLayout from "../../../components/layouts/adminLayout";

const Products = () => {
	const [data, setData] = useState(null);
	const [token, setToken] = useState(null);

	useEffect(() => {
		axios
			.get(`${API_BASE_URL}/product`)
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

	const deleteProduct = (product) => {
		axios
			.delete(`${API_BASE_URL}/product/${product._id}`, {
				headers: {
					token: `Bearer ${token}`,
				},
			})
			.then((res) => {
				message.success(res.data.message);
				setData(data.filter((item) => item != product));
			})
			.catch((e) => console.log(e));
	};

	const columns = [
		{
			title: "Preview",
			key: "img",
			width: 60,
			render: (product) => (
				<Image
					src={product.product_img}
					width={30}
					alt={product.product_name}
				/>
			),
		},
		{
			title: "Product Name",
			dataIndex: "product_name",
			key: "name",
			width: 200,
		},
		{
			title: "Price",
			dataIndex: "product_price",
			key: "price",
			width: 100,
		},
		{
			title: "Category",
			dataIndex: "product_category",
			key: "product_category",
			width: 280,
			render: (categories) =>
				categories ? (
					<>
						{categories.map((category) => (
							<Tag
								color={"rgba(255, 239, 217, 1)"}
								key={category}
							>
								<span className="text-orange-500">
									{category}
								</span>
							</Tag>
						))}
					</>
				) : null,
		},
		{
			title: "Colors",
			dataIndex: "product_colors",
			key: "product_colors",
			width: 180,
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
			width: 200,
			render: (tags) =>
				tags ? (
					<>
						{tags.map((tag) => (
							<Tag color={"rgba(216, 255, 238, 1)"} key={tag}>
								<span className="text-green-500">{tag}</span>
							</Tag>
						))}
					</>
				) : null,
		},
		{
			title: "Sizes",
			dataIndex: "product_sizes",
			key: "product_sizes",
			width: 120,
			render: (sizes) =>
				sizes ? (
					<>
						{sizes.map((size) => (
							<Tag color={"rgba(240, 255, 214, 1)"} key={size}>
								<span className="text-gray-700">{size}</span>
							</Tag>
						))}
					</>
				) : null,
		},
		{
			title: "Description",
			dataIndex: "product_description",
			key: "product_description",
			width: 320,
		},
		{
			title: "",
			key: "actions",
			width: 80,
			render: (product) => (
				<Space split={<Divider type="vertical" />}>
					<Popconfirm
						title="Are you sure you want to delete this product?"
						onConfirm={() => deleteProduct(product)}
						okText="Yes"
						cancelText="No"
						placement="topRight"
					>
						<DeleteOutlined />
					</Popconfirm>
					<Link href={`/admin/products/${product._id}`} passHref>
						<EditOutlined />
					</Link>
				</Space>
			),
		},
	];

	return (
		<AdminLayout title="Othoba Mart | Products">
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

export default Products;
