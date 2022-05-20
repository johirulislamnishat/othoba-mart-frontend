import { InboxOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Divider,
  Form,
  Image,
  Input,
  InputNumber,
  message,
  Modal,
  Row,
  Select,
  Space,
  Typography,
  Upload,
} from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../../apiconstants";
import AdminLayout from "../../../../components/layouts/adminLayout";
import useProvider from "../../../../hooks/useProvider";

const { Option } = Select;

export default function EditProduct({ product, id }) {
  const [form] = Form.useForm();
  const [optionName, setOptionName] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    state: {
      user: { accessToken },
    },
  } = useProvider();
  const [categoryChildren, setCategoryChildren] = useState([
    <Option key={"Smart phone"}>Smart phone</Option>,
  ]);
  const [tagChildren, setTagChildren] = useState([
    <Option key={"New"}>New</Option>,
  ]);
  const [colorChildren, setColorChildren] = useState([
    <Option key={"White"}>White</Option>,
  ]);
  const [sizeChildren, setSizeChildren] = useState([
    <Option key={"sm"}>sm</Option>,
  ]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (product.product_category) {
      setCategoryChildren(
        product.product_category.map((item) => (
          <Option key={item}>{item}</Option>
        ))
      );
    }

    if (product.product_colors) {
      setColorChildren(
        product.product_colors.map((item) => <Option key={item}>{item}</Option>)
      );
    }

    if (product.product_tags) {
      setTagChildren(
        product.product_tags.map((item) => <Option key={item}>{item}</Option>)
      );
    }

    if (product.product_sizes) {
      setSizeChildren(
        product.product_sizes.map((item) => <Option key={item}>{item}</Option>)
      );
    }
  }, [product]);

  const handleSubmit = (values) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("product_name", values.product_name);
    formData.append("product_description", values.product_description);
    formData.append("product_price", values.product_price);
    formData.append("photo", values.photo[0]);

    for (const item of values.gallery) {
      formData.append("gallery", item);
    }

    if (values.product_category) {
      for (const item of values.product_category) {
        formData.append("product_category", item);
      }
    }

    if (values.product_colors) {
      for (const item of values.product_colors) {
        formData.append("product_colors", item);
      }
    }

    if (values.product_tags) {
      for (const item of values.product_tags) {
        formData.append("product_tags", item);
      }
    }

    if (values.product_sizes) {
      for (const item of values.product_sizes) {
        formData.append("product_sizes", item);
      }
    }

    axios
      .put(`${API_BASE_URL}/product/${id}`, formData, {
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
          router.push("/admin/products");
        }
      })
      .catch(() => {
        message.error("Failed to update product");
        setLoading(false);
      });
  };

  const addCategory = (field, setField) => {
    setField([...field, <Option key={optionName}>{optionName}</Option>]);
    setOptionName("");
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  const mainPhoto = {
    beforeUpload: (file) => {
      if (file.size > 3000) {
        message.error(`${file.name}'s size is over 300kb`);
        setImg(null);
        return Upload.LIST_IGNORE;
      }
    },
    defaultFileList: [
      {
        uid: 1,
        name: "Product Preview",
        url: product.product_img,
      },
    ],
  };

  const props = {
    beforeUpload: (file) => {
      if (file.size > 3000) {
        message.error(`${file.name}'s size is over 300kb`);
        setImg(null);
        return Upload.LIST_IGNORE;
      }
    },
    defaultFileList: product.gallery
      ? product.gallery.map((item, index) => {
          return { uid: index, url: item.gallery };
        })
      : null,
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
    <AdminLayout
      title={"Admin | Update Product"}
      pageTitle="Update Product"
      child={true}
    >
      <section className="mt-5 bg-white p-8 pb-3">
        <Form
          form={form}
          name="Update Product"
          layout="vertical"
          size="large"
          requiredMark={false}
          onFinish={handleSubmit}
          initialValues={{
            product_name: product.photo,
            product_price: product.product_price,
            product_description: product.product_description,
            product_category: product.product_category,
            product_colors: product.product_colors,
            product_tags: product.product_tags,
            product_sizes: product.product_sizes,
            product_photo: product.product_img,
            product_gelery: product.product_gelery,
          }}
        >
          <Row gutter={[32]}>
            <Col xs={24} md={12}>
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
            </Col>

            <Col xs={24} md={12}>
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
            </Col>
          </Row>

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
                min: 30,
                message:
                  "Product description should be at least 30 characters long",
              },
            ]}
          >
            <Input.TextArea placeholder="Write something..." allowClear />
          </Form.Item>

          <Row gutter={[32]}>
            <Col xs={24} md={12}>
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
                      <Space align="center" style={{ padding: "0 8px 4px" }}>
                        <Input
                          placeholder="Enter category name"
                          value={optionName}
                          onChange={(e) => setOptionName(e.target.value)}
                        />
                        <Typography.Link
                          onClick={() =>
                            addCategory(categoryChildren, setCategoryChildren)
                          }
                          style={{
                            whiteSpace: "nowrap",
                          }}
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
            </Col>

            <Col xs={24} md={12}>
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
                      <Space align="center" style={{ padding: "0 8px 4px" }}>
                        <Input
                          placeholder="Enter tag name"
                          value={optionName}
                          onChange={(e) => setOptionName(e.target.value)}
                        />
                        <Typography.Link
                          onClick={() =>
                            addCategory(tagChildren, setTagChildren)
                          }
                          style={{
                            whiteSpace: "nowrap",
                          }}
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
            </Col>
          </Row>

          <Row gutter={[32]}>
            <Col xs={24} md={12}>
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
                      <Space align="center" style={{ padding: "0 8px 4px" }}>
                        <Input
                          placeholder="Enter colour name"
                          value={optionName}
                          onChange={(e) => setOptionName(e.target.value)}
                        />
                        <Typography.Link
                          onClick={() =>
                            addCategory(colorChildren, setColorChildren)
                          }
                          style={{
                            whiteSpace: "nowrap",
                          }}
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
            </Col>
            <Col xs={24} md={12}>
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
                      <Space align="center" style={{ padding: "0 8px 4px" }}>
                        <Input
                          placeholder="Enter size"
                          value={optionName}
                          onChange={(e) => setOptionName(e.target.value)}
                        />
                        <Typography.Link
                          onClick={() =>
                            addCategory(sizeChildren, setSizeChildren)
                          }
                          style={{
                            whiteSpace: "nowrap",
                          }}
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
            </Col>
          </Row>

          <Row gutter={[32]}>
            <Col xs={24} md={12}>
              <Form.Item label="Picture">
                <Form.Item
                  name="photo"
                  rules={[
                    {
                      required: true,
                      message: `Please insert procuct's photo`,
                    },
                  ]}
                  noStyle
                  initialValue={product.product_img}
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
                      Support for a single upload. Only accept png, jpg file.
                    </p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Gelery Images">
                <Form.Item
                  name="gallery"
                  rules={[
                    {
                      required: false,
                      message: `Please insert procuct's photos`,
                    },
                  ]}
                  noStyle
                  initialValue={product.gallery}
                  getValueFromEvent={normFile}
                >
                  <Upload.Dragger
                    {...props}
                    maxCount={5}
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
                      Support for a single upload. Only accept png, jpg file.
                    </p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>
            </Col>
            <Modal
              visible={previewVisible}
              title={previewTitle}
              footer={null}
              onCancel={() => setPreviewVisible(false)}
            >
              <Image
                preview={false}
                alt="preview"
                style={{ width: "100%" }}
                src={previewImage}
              />
            </Modal>
          </Row>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              disabled={loading}
              loading={loading}
            >
              Update Product
            </Button>
          </Form.Item>
        </Form>
      </section>
    </AdminLayout>
  );
}

EditProduct.getInitialProps = async (ctx) => {
  const { editProduct } = ctx.query;
  const res = await fetch(
    `https://othobamart-api.herokuapp.com/product/${editProduct}`
  );
  if (res.ok) {
    const product = await res.json();
    return { product: product.result, id: editProduct };
  }
};
