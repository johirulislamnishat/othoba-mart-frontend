import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Modal, Button } from "antd";
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
import { API_BASE_URL } from "../../../../apiconstants";
import AdminLayout from "../../../../components/layouts/adminLayout";

import useProvider from "../../../../hooks/useProvider";
import TicketModal from "./ticketModal";

const { Option } = Select;

const AdminTickets = () => {
  const [tickets, setTickets] = useState([]);
  // console.log("tickets", tickets);
  const {
    state: {
      user: { accessToken },
    },
  } = useProvider();
  const [modalVisible, setModalVisible] = useState(false);
  const [chats, setChats] = useState([]);
  const [ticketId, setTicketId] = useState(null);
  // console.log("ticketId", ticketId);

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

  const handleModal = (id) => {
    // console.log("id", id);
    setTicketId(id);
    setModalVisible(true);
    axios
      .get(`${API_BASE_URL}/support/${ticketId}`, {
        headers: {
          token: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setChats(res.data.result.chat);
        setRender(false);
      })
      .catch((e) => console.log(e));
  };

  const onOk = () => setModalVisible(false);
  const onCancel = () => {
    setModalVisible(false);
    setChats([]);
  };

  const handleStatus = (value, field) => {
    axios
      .put(
        `${API_BASE_URL}/support/${field.ticketId}`,
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
      title: "Ticket id",
      dataIndex: "support_id",
      key: "2",
      width: 100,
      render: (id) => <p>#{id}</p>,
    },
    {
      title: "Customer Name",
      dataIndex: "user_name",
      key: "name",
      width: 200,
    },

    {
      title: "Customer Email",
      dataIndex: "user_email",
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
      dataIndex: "chat",
      key: "5",
      width: 120,
      render: (item) => <p>{item[0].message}</p>,
    },
    {
      title: "Status",
      key: "6",
      width: 150,
      render: (ticket) => (
        <Select
          style={{ width: 150 }}
          defaultValue={ticket.status.toLowerCase()}
          onChange={(value, field) => handleStatus(value, field)}
        >
          <Option id={ticket._id} value="pending">
            <div className="flex items-center">
              <div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-yellow-400" />
              Pending
            </div>
          </Option>
          <Option id={ticket._id} value="approved">
            <div className="flex items-center">
              <div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-lime-300" />
              Approved
            </div>
          </Option>

          <Option id={ticket._id} value="completed">
            <div className="flex items-center">
              <div className="m-1 mr-2 w-2 h-2 relative rounded-full bg-green-500" />
              Completed
            </div>
          </Option>

          <Option id={ticket._id} value="rejected">
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
      dataIndex: "_id",
      key: "reply",
      width: 30,
      render: (id) => (
        <Button type="primary" onClick={() => handleModal(id)}>
          Reply
        </Button>
      ),
    },
  ];

  return (
    <>
      <AdminLayout>
        <Table
          columns={columns}
          dataSource={tickets}
          scroll={{ x: 1550 }}
          pagination={{ position: ["bottomCenter"] }}
          size="small"
        />
      </AdminLayout>

      <TicketModal
        title="Othoba Mart"
        style={{ maxWidth: 800, padding: 0 }}
        visible={modalVisible}
        onOk={onOk}
        onCancel={onCancel}
        tickets={tickets}
        chats={chats}
        setChats={setChats}
        ticketId={ticketId}
      ></TicketModal>
    </>
  );
};

export default AdminTickets;
