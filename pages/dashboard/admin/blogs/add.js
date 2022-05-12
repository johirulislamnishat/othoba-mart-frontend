import { InboxOutlined } from "@ant-design/icons";
import { Button, Form, Image, Input, message, Modal, Upload } from "antd";
import axios from "axios";
import Router from "next/router";
import React, { useState } from "react";
import { API_BASE_URL } from "../../../../apiconstants";
import AdminLayout from "../../../../components/layouts/adminLayout";
import useProvider from "../../../../hooks/useProvider";

const AddProduct = () => {
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const {
		state: {
			user: { accessToken },
		},
	} = useProvider();

	const [previewVisible, setPreviewVisible] = useState(false);
	const [previewImage, setPreviewImage] = useState("");
	const [previewTitle, setPreviewTitle] = useState("");

	const handleSubmit = (values) => {
		setLoading(true);
		const formData = new FormData();
		formData.append("blog_title", values.blog_title);
		formData.append("blog_content", values.blog_content);
		formData.append("blog_image", values.blog_image[0].originFileObj);

		axios
			.post(`${API_BASE_URL}/blog`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
					token: `Bearer ${accessToken}`,
				},
			})
			.then((res) => {
				if (res.status === 200) {
					message.success(res.data.message);
					setLoading(false);
					form.resetFields();
					Router.push("/dashboard/admin/blogs");
				}
			})
			.catch(() => {
				message.error("Failed to add blog");
				setLoading(false);
			});
	};

	const normFile = (e) => {
		if (Array.isArray(e)) {
			return e;
		}

		return e && e.fileList;
	};

	const mainPhoto = {
		beforeUpload: (file) => {
			const perfectSize = file.size < 300000;

			if (!perfectSize) {
				message.error(`${file.name}'s size is over 300kb`);
				setImg(null);
				return Upload.LIST_IGNORE;
			}
			return perfectSize || Upload.LIST_IGNORE;
		},
	};

	function getBase64(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});
	}

	const handlePreview = async (file) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}

		setPreviewImage(file.url || file.preview);
		setPreviewVisible(true);
		setPreviewTitle(
			file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
		);
	};

	return (
		<AdminLayout title={"Admin || Add Product"} pageTitle="Add Product">
			<section className="mt-5 bg-white p-8 pb-3">
				<Form
					form={form}
					name="Add Blog"
					layout="vertical"
					size="large"
					requiredMark={false}
					initialValues={{ remember: true }}
					onFinish={handleSubmit}
				>
					<Form.Item
						label="Blog Title"
						name="blog_title"
						hasFeedback
						validateFirst
						rules={[
							{
								required: true,
								message: "Please enter the blog title",
							},
							{
								min: 3,
								message:
									"Title should be at least 3 characters long",
							},
						]}
					>
						<Input placeholder="Blog Title" allowClear />
					</Form.Item>

					<Form.Item
						label="Description"
						name="blog_content"
						hasFeedback
						validateFirst
						rules={[
							{
								required: true,
								message: "Please enter the blog contant",
							},
							{
								min: 30,
								message:
									"Blog should be at least 50 characters long",
							},
						]}
					>
						<Input.TextArea
							placeholder="Write something..."
							allowClear
						/>
					</Form.Item>

					<Form.Item label="Picture">
						<Form.Item
							name="blog_image"
							rules={[
								{
									required: true,
									message: `Please insert blog's photo`,
								},
							]}
							noStyle
							getValueFromEvent={normFile}
						>
							<Upload.Dragger
								{...mainPhoto}
								maxCount={1}
								listType="picture-card"
								accept=".png, .jpg"
								onPreview={handlePreview}
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
							</Upload.Dragger>
						</Form.Item>
					</Form.Item>

					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							disabled={loading}
							loading={loading}
						>
							Add Blog
						</Button>
					</Form.Item>
				</Form>
			</section>
			<Modal
				visible={previewVisible}
				title={previewTitle}
				footer={null}
				onCancel={() => setPreviewVisible(false)}
			>
				<Image
					preview={false}
					alt="example"
					style={{ width: "100%" }}
					src={previewImage}
				/>
			</Modal>
		</AdminLayout>
	);
};

export default AddProduct;
