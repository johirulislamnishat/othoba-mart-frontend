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
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import VendorLayout from "../../../components/layouts/vendorLayout";
import useProvider from "../../../hooks/useProvider";

const { Option } = Select;

const Coupon = () => {
	const [data, setData] = useState(null);
	const {
		state: {
			user: { accessToken },
		},
	} = useProvider();

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
	}, []);

	const deleteCoupon = (product) => {
		axios
			.delete(`${API_BASE_URL}/product/${product.coupon}`, {
				headers: {
					token: `Bearer ${accessToken}`,
				},
			})
			.then((res) => {
				message.success(res.data.message);
				setData(data.filter((item) => item != product));
			})
			.catch((e) => console.log(e));
	};

	const handleStatus = (value, field) => {
		axios
			.put(
				`${API_BASE_URL}/vendor/coupon/${field.id}`,
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
			title: 'Coupun Id',
			dataIndex: 'coupon_id',
			key: 'coupon_id',
			width: 40,
		},
		{
			title: 'Start Date',
			dataIndex: 'start_date',
			key: 'start_date',
			width: 100, 
		},
		{
			title: 'End Date',
			dataIndex: 'end_date',
			key: 'end_date',
			width: 100,
		},
		{
			title: 'Code',
			dataIndex: 'code',
			key: 'code',
			width: 70, 
		},
		{
			title: 'Percentage',
			dataIndex: 'percentage',
			key: 'percentage',
			width: 70,
		},
		{
			title: 'Product Type',
			dataIndex: 'product_type',
			key: 'product_type',
			width: 70, 
		},
		{
			title: 'Price',
			dataIndex: 'price',
			key: 'price',
			width: 50, 
		},	
		{
			title: "Status",
			key: "status",
			width: 100,
			render: (product) => (
				<Select
					defaultValue={product.status.toLowerCase()}
					style={{ width: 100 }}
					onChange={(value, field) => handleStatus(value, field)}
				>
					<Option id={product._id} value="expired">
						<div className="flex items-center">
							<div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-yellow-400" />
							Expired
						</div>
					</Option>
					<Option id={product._id} value="active">
						<div className="flex items-center">
							<div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-lime-300" />
							Active
						</div>
					</Option>
					
				</Select>
			),
			filters: [
				{
					text: "Expired",
					value: "expired",
				},
				{
					text: "Active",
					value: "active",
				},
			],
			onFilter: (value, record) => record.status.indexOf(value) === 0,
		},
		{
			title: "Actions",
			key: "actions",
			width: 40,
			render: (product) => (
				<Space split={<Divider type="vertical" />}>
					<Popconfirm
						title="Are you sure you want to delete this coupon?"
						onConfirm={() => deleteCoupon(product)}
						okText="Yes"
						cancelText="No"
						placement="topRight"
					>
						<DeleteOutlined />
					</Popconfirm>
					<Link href={`vendor/products/${product._id}`} passHref>
						<EditOutlined />
					</Link>
				</Space>
			),
		},
	];

	return (
		<VendorLayout title='Vendor | Coupon' pageTitle="Coupon">
			<Table
				columns={columns}
				dataSource={data}
				scroll={{ x: 1600 }}
				pagination={{ position: ["bottomCenter"] }}
				size="small"
				
			/>
		</VendorLayout>
	);
};

export default Coupon;
