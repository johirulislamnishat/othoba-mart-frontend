import { InboxOutlined } from "@ant-design/icons";
import {
	Button,
	Divider,
	Form,
	Input,
	InputNumber,
	message,
	PageHeader,
	Select,
	Space,
	Typography,
	Upload,
} from "antd";
import axios from "axios";
import React, { useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import useAuth from "../../../components/hooks/useAuth";
import AdminLayout from "../../../components/layouts/adminLayout";

const { Option } = Select;
const { Dragger } = Upload;

const AddProduct = () => {
	const [optionName, setOptionName] = useState("");
	const [loading, setLoading] = useState(false);
	const { token } = useAuth();
	const [categoryChildren, setCategoryChildren] = useState([
		<Option key={1}>Smart phone</Option>,
	]);
	const [tagChildren, setTagChildren] = useState([
		<Option key={1}>New</Option>,
	]);
	const [colorChildren, setColorChildren] = useState([
		<Option key={1}>White</Option>,
	]);
	const [sizeChildren, setSizeChildren] = useState([
		<Option key={1}>sm</Option>,
	]);

	const handleSubmit = (values) => {
		const formData = new FormData();

		for (const item in values) {
			if (values[item] !== undefined)
				formData.append(`${item}: ${values[item]}`);
		}

		axios
			.post(`${API_BASE_URL}/product`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
					token: `Bearer ${token}`,
				},
			})
			.then((res) => {
				console.log(res.result);
			})
			.catch((err) => console.log(err));
	};

	const addCategory = (field, setField) => {
		setField([
			...field,
			<Option key={field.length + 1}>{optionName}</Option>,
		]);
		setOptionName("");
	};

	const normFile = (e) => {
		if (Array.isArray(e)) {
			return e;
		}
		return e && e.fileList;
	};

	const props = {
		beforeUpload: (file) => {
			if (file.size > 3000) {
				message.error(`${file.name}'s size is over 300kb`);
				return Upload.LIST_IGNORE;
			}
		},
	};

	return (
		<AdminLayout title={"Admin || Add Product"}>
			<PageHeader ghost={false} title="Add product" />

			<section className="mt-5 bg-white p-5">
				<Form
					name="Add Product"
					layout="vertical"
					requiredMark={false}
					initialValues={{ remember: true }}
					onFinish={handleSubmit}
				>
					<Form.Item
						label="Product Name"
						name="product_name"
						hasFeedback
						validateFirst
						rules={[
							{
								required: true,
								message: "Please enter the product name",
							},
							{
								min: 3,
								message:
									"Product name should be at least 3 characters long",
							},
						]}
					>
						<Input placeholder="Product Name" allowClear />
					</Form.Item>

					<Form.Item
						label="Description"
						name="product_description"
						hasFeedback
						validateFirst
						rules={[
							{
								required: true,
								message: "Please enter the product description",
							},
							{
								min: 50,
								message:
									"Product description should be at least 50 characters long",
							},
						]}
					>
						<Input.TextArea
							placeholder="Write something..."
							allowClear
						/>
					</Form.Item>

					<Form.Item
						label="Price"
						name="product_price"
						rules={[
							{
								required: true,
								message: "Please input procuct price",
							},
						]}
					>
						<InputNumber style={{ width: "100%" }} />
					</Form.Item>

					<Form.Item
						label="Category"
						name="product_category"
						hasFeedback
						validateFirst
					>
						<Select
							mode="multiple"
							placeholder="Select category"
							optionFilterProp="categoryChildren"
							dropdownRender={(menu) => (
								<>
									{menu}
									<Divider style={{ margin: "8px 0" }} />
									<Space
										align="center"
										style={{ padding: "0 8px 4px" }}
									>
										<Input
											placeholder="Enter category name"
											value={optionName}
											onChange={(e) =>
												setOptionName(e.target.value)
											}
										/>
										<Typography.Link
											onClick={() =>
												addCategory(
													categoryChildren,
													setCategoryChildren
												)
											}
											style={{ whiteSpace: "nowrap" }}
										>
											Add Category
										</Typography.Link>
									</Space>
								</>
							)}
						>
							{categoryChildren}
						</Select>
					</Form.Item>

					<Form.Item
						label="Tags"
						name="product_tags"
						hasFeedback
						validateFirst
					>
						<Select
							mode="multiple"
							placeholder="Select tags"
							optionFilterProp="tagChildren"
							dropdownRender={(menu) => (
								<>
									{menu}
									<Divider style={{ margin: "8px 0" }} />
									<Space
										align="center"
										style={{ padding: "0 8px 4px" }}
									>
										<Input
											placeholder="Enter tag name"
											value={optionName}
											onChange={(e) =>
												setOptionName(e.target.value)
											}
										/>
										<Typography.Link
											onClick={() =>
												addCategory(
													tagChildren,
													setTagChildren
												)
											}
											style={{ whiteSpace: "nowrap" }}
										>
											Add Tag
										</Typography.Link>
									</Space>
								</>
							)}
						>
							{tagChildren}
						</Select>
					</Form.Item>

					<Form.Item
						label="Colours"
						name="product_colors"
						hasFeedback
						validateFirst
					>
						<Select
							mode="multiple"
							placeholder="Select colors"
							optionFilterProp="colorChildren"
							dropdownRender={(menu) => (
								<>
									{menu}
									<Divider style={{ margin: "8px 0" }} />
									<Space
										align="center"
										style={{ padding: "0 8px 4px" }}
									>
										<Input
											placeholder="Enter colour name"
											value={optionName}
											onChange={(e) =>
												setOptionName(e.target.value)
											}
										/>
										<Typography.Link
											onClick={() =>
												addCategory(
													colorChildren,
													setColorChildren
												)
											}
											style={{ whiteSpace: "nowrap" }}
										>
											Add Colour
										</Typography.Link>
									</Space>
								</>
							)}
						>
							{colorChildren}
						</Select>
					</Form.Item>

					<Form.Item
						label="Sizes"
						name="product_sizes"
						hasFeedback
						validateFirst
					>
						<Select
							mode="multiple"
							placeholder="Select sizes"
							optionFilterProp="sizeChildren"
							dropdownRender={(menu) => (
								<>
									{menu}
									<Divider style={{ margin: "8px 0" }} />
									<Space
										align="center"
										style={{ padding: "0 8px 4px" }}
									>
										<Input
											placeholder="Enter size"
											value={optionName}
											onChange={(e) =>
												setOptionName(e.target.value)
											}
										/>
										<Typography.Link
											onClick={() =>
												addCategory(
													sizeChildren,
													setSizeChildren
												)
											}
											style={{ whiteSpace: "nowrap" }}
										>
											Add Size
										</Typography.Link>
									</Space>
								</>
							)}
						>
							{sizeChildren}
						</Select>
					</Form.Item>

					<Form.Item label="Picture" required>
						<Form.Item
							name="photo"
							valuePropName="fileList"
							getValueFromEvent={normFile}
							rules={[
								{
									required: true,
									message: `Please insert procuct's photo`,
								},
							]}
							noStyle
						>
							<Dragger
								{...props}
								maxCount={1}
								accept=".png, .jpg"
							>
								<p className="ant-upload-drag-icon">
									<InboxOutlined />
								</p>
								<p className="ant-upload-text">
									Click or drag file to this area to upload
								</p>
								<p className="ant-upload-hint">
									Support for a single upload. Only accept
									png, jpg file.
								</p>
							</Dragger>
						</Form.Item>
					</Form.Item>

					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							disabled={loading}
							loading={loading}
						>
							Add Product
						</Button>
					</Form.Item>
				</Form>
			</section>
		</AdminLayout>
	);
};

export default AddProduct;
