import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
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
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../../apiconstants";
import AdminLayout from "../../../../components/layouts/adminLayout";

import useProvider from "../../../../hooks/useProvider";

const { Option } = Select;

const Shops = () => {
    const [data, setData] = useState(null);
    const {
        state: {
            user: { accessToken },
        },
    } = useProvider();

    useEffect(() => {
        axios
            .get(`${API_BASE_URL}/shop`, {
                headers: {
                    token: `Bearer ${accessToken}`,
                },
            })
            .then((res) => {
                console.log("shop", res.data.result);
                const arr = [];
                for (const value of res?.data?.result) {
                    arr.push({ ...value, key: value._id });
                }
                setData(arr);
            })
            .catch((e) => console.log(e));
    }, [accessToken]);

    const deleteProduct = (product) => {
        axios
            .delete(`${API_BASE_URL}/product/${product._id}`, {
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
                `${API_BASE_URL}/shop/status/${field.id}`,
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
            title: "Image",
            key: "img",
            width: 50,
            render: (shop) => (
                <Image src={shop.shop_logo} width={50} alt={shop.shop_logo} />
            ),
        },
        {
            title: "Shop Name",
            dataIndex: "shop_name",
            key: "name",
            width: 80,
        },
        {
            title: "Vendor Name",
            dataIndex: "vendor_name",
            key: "vendor_name",
            width: 80,
            defaultSortOrder: "descend",
            sorter: (a, b) => a.product_price - b.product_price,
        },
        {
            title: "Vendor Email",
            dataIndex: "shop_email",
            key: "shop_email",
            width: 80,
            defaultSortOrder: "descend",
            sorter: (a, b) => a.product_price - b.product_price,
        },
        {
            title: "Shop Address",
            dataIndex: "shop_address",
            key: "shop_address",
            width: 160,
            defaultSortOrder: "descend",
            sorter: (a, b) => a.product_price - b.product_price,
        },
        {
            title: "Status",
            key: "status",
            width: 150,
            render: (product) => (
                <Select
                    defaultValue={product?.shop_status.toLowerCase()}
                    style={{ width: 150 }}
                    onChange={(value, field) => handleStatus(value, field)}
                >
                    <Option id={product._id} value="pending">
                        <div className="flex items-center">
                            <div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-yellow-400" />
                            Pending
                        </div>
                    </Option>
                    <Option id={product._id} value="approved">
                        <div className="flex items-center">
                            <div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-lime-300" />
                            Approved
                        </div>
                    </Option>
                    <Option id={product._id} value="rejected">
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
            onFilter: (value, record) => record.status.indexOf(value) === 0,
        },
        {
            title: "Actions",
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
                    <Link href={`/admin/shops/${product._id}`} passHref>
                        <EditOutlined />
                    </Link>
                </Space>
            ),
        },
    ];

    return (
        <AdminLayout title="Admin | Shops" pageTitle="Shops">
            <Table
                columns={columns}
                dataSource={data}
                scroll={{ x: 1600 }}
                pagination={{ position: ["bottomCenter"] }}
                size="small"
            />
        </AdminLayout>
    );
};

export default Shops;
