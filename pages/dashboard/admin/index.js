import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Area } from "@ant-design/plots";
import {
  Col,
  Divider,
  message,
  Popconfirm,
  Row,
  Select,
  Space,
  Table,
  Tooltip,
} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import AdminLayout from "../../../components/layouts/adminLayout";
import useProvider from "../../../hooks/useProvider";

const { Option } = Select;

const Dashboard = () => {
  const [data, setData] = useState(null);
  const {
    state: {
      user: { accessToken },
    },
  } = useProvider();
  const [graphData, setGraphData] = useState([
    { Date: "1 Jul", Revenew: 10000 },
    { Date: "8 Jul", Revenew: 18000 },
    { Date: "16 Jul", Revenew: 12000 },
    { Date: "24 Jul", Revenew: 24500 },
    { Date: "31 Jul", Revenew: 35000 },
    { Date: "1 Aug", Revenew: 20000 },
    { Date: "8 Aug", Revenew: 25200 },
    { Date: "16 Aug", Revenew: 16000 },
    { Date: "24 Aug", Revenew: 24500 },
    { Date: "30 Aug", Revenew: 35000 },
  ]);

  const config = {
    data: graphData,
    xField: "Date",
    yField: "Revenew",
    xAxis: {
      range: [0, 1],
      tickCount: 5,
    },
    areaStyle: () => {
      return {
        fill: "l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff",
      };
    },
    smooth: true,
    autoFit: true,
  };

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/order`, {
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

  const deleteOrder = (order) => {
    axios
      .delete(`${API_BASE_URL}/order/${order._id}`, {
        headers: {
          token: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        message.success(res.data.message);
        setData(data.filter((item) => item != order));
      })
      .catch((e) => console.log(e));
  };

  const handleStatus = (value, field) => {
    axios
      .put(
        `${API_BASE_URL}/order/${field.id}`,
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
      title: "Order id",
      dataIndex: "_id",
      key: "2",
      width: 100,
      render: (id) => <Tooltip title={id}>#{id.slice(15)}</Tooltip>,
    },
    {
      title: "Customer Name",
      dataIndex: "user_name",
      key: "name",
      width: 200,
    },
    {
      title: "Customer Email",
      dataIndex: "email",
      key: "email",
      width: 250,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "3",
      width: 200,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "4",
      width: 280,
    },
    {
      title: "Total Price",
      dataIndex: "total_price",
      key: "5",
      width: 120,
      defaultSortOrder: "descend",
      sorter: (a, b) => a.total_price - b.total_price,
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
          <Option id={order._id} value="pending">
            <div className="flex items-center">
              <div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-yellow-400" />
              Pending
            </div>
          </Option>
          <Option id={order._id} value="approved">
            <div className="flex items-center">
              <div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-lime-300" />
              Approved
            </div>
          </Option>
          <Option id={order._id} value="shifted">
            <div className="flex items-center">
              <div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-violet-500" />
              Shifted
            </div>
          </Option>
          <Option id={order._id} value="completed">
            <div className="flex items-center">
              <div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-green-500" />
              Completed
            </div>
          </Option>
          <Option id={order._id} value="cancled">
            <div className="flex items-center">
              <div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-stone-300" />
              Cancled
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
          text: "Pending",
          value: "pending",
        },
        {
          text: "Approved",
          value: "approved",
        },
        {
          text: "Shifted",
          value: "shifted",
        },
        {
          text: "Completed",
          value: "completed",
        },
        {
          text: "Cancled",
          value: "cancled",
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
      render: (order) => (
        <Space split={<Divider type="vertical" />}>
          <Popconfirm
            title="Are you sure you want to delete this order?"
            onConfirm={() => deleteOrder(order)}
            okText="Yes"
            cancelText="No"
            placement="topRight"
          >
            <DeleteOutlined />
          </Popconfirm>
          <EditOutlined />
        </Space>
      ),
    },
  ];

  return (
    <AdminLayout title="Admin | Dashboard" pageTitle="Dashboard">
      <Space direction="vertical" size={45} className="w-full">
        <Row gutter={[32, 32]} justify="space-between" align="middle">
          <Col xs={24} lg={12}>
            <div className="bg-white rounded-xl">
              <div className="w-full flex justify-between py-5 px-8">
                <p className="text-lg font-bold">Money Revenue</p>
                <p>Weekly</p>
              </div>
              <Area {...config} className="w-full" appendPadding={35} />
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className="bg-white rounded-xl">
              <div className="w-full flex justify-between py-5 px-8">
                <p className="text-lg font-bold">Profit</p>
                <p>Weekly</p>
              </div>
              <Area
                {...config}
                className="w-full bg-white rounded-xl"
                appendPadding={35}
              />
            </div>
          </Col>
        </Row>
        <Row gutter={[12, 12]} justify="space-around" align="middle">
          <Col xs={24} md={12} lg={6}>
            <Row
              justify="space-between"
              align="middle"
              className="p-5 rounded-2xl font-semibold"
              style={{
                backgroundColor: "rgba(240, 255, 248, 1)",
              }}
            >
              <Col>New Delivery</Col>
              <Col className="text-xl">2</Col>
            </Row>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Row
              justify="space-between"
              align="middle"
              className="p-5 rounded-2xl font-semibold"
              style={{
                backgroundColor: "rgba(240, 255, 235, 1)",
              }}
            >
              <Col>Active Orders</Col>
              <Col className="text-xl">5</Col>
            </Row>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Row
              justify="space-between"
              align="middle"
              className="p-5 rounded-2xl font-semibold"
              style={{
                backgroundColor: "rgba(255, 251, 235, 1)",
              }}
            >
              <Col>Total Orders</Col>
              <Col className="text-xl">{data?.length || 0}</Col>
            </Row>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Row
              justify="space-between"
              align="middle"
              className="p-5 rounded-2xl font-semibold"
              style={{
                backgroundColor: "rgba(240, 255, 214, 1)",
              }}
            >
              <Col>Order in Progress</Col>
              <Col className="text-xl">4</Col>
            </Row>
          </Col>
        </Row>
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: 1550 }}
          pagination={{ position: ["bottomCenter"] }}
          size="small"
        />
      </Space>
    </AdminLayout>
  );
};

export default Dashboard;
