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
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import AdminLayout from "../../../components/layouts/adminLayout";
import useProvider from "../../../hooks/useProvider";

const { Option } = Select;

const AdminTickets = () => {
  const [tickets, setTickets] = useState([]);
  const {
    state: {
      user: { accessToken },
    },
  } = useProvider();

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/support`, {
        headers: {
          token: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setTickets(res.data.result);
      })
      .catch((e) => console.log(e));
  }, [accessToken]);

  const deleteTicket = (ticket) => {
    axios
      .delete(`${API_BASE_URL}/support/${ticket._id}`, {
        headers: {
          token: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        message.success(res.data.message);
        setTickets(tickets.filter((item) => item != ticket));
      })
      .catch((e) => console.log(e));
  };

  const handleStatus = (value, field) => {
    axios
      .put(
        `${API_BASE_URL}/support/${field.id}`,
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
      title: "Ticket id",
      dataIndex: "support_id",
      key: "2",
      width: 100,
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
      title: "Title",
      dataIndex: "support_title",
      key: "3",
      width: 200,
    },
    {
      title: "Topic",
      dataIndex: "reason",
      key: "4",
      width: 100,
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "5",
      width: 120,
      // defaultSortOrder: "descend",
      // sorter: (a, b) => a.total_price - b.total_price,
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

          <Option id={order._id} value="completed">
            <div className="flex items-center">
              <div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-green-500" />
              Completed
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
          text: "Completed",
          value: "completed",
        },

        {
          text: "Rejected",
          value: "rejected",
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
    {
      title: "Reply",
      dataIndex: "reply",
      key: "reply",
      width: 30,
    },
    {
      title: "Action",
      key: "actions",
      width: 80,
      render: (order) => (
        <Space split={<Divider type="vertical" />}>
          <Popconfirm
            title="Are you sure you want to delete this order?"
            onConfirm={() => deleteTicket(order)}
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
    <AdminLayout>
      <Table
        columns={columns}
        dataSource={tickets}
        scroll={{ x: 1550 }}
        pagination={{ position: ["bottomCenter"] }}
        size="small"
      />
    </AdminLayout>
  );
};

export default AdminTickets;
