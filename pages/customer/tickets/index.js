import {
  Button,
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
import TicketModal from "../../admin/tickets/ticketModal";

const CustomersTickets = () => {
  const [tickets, setTickets] = useState([]);
  const {
    state: {
      user: { email, accessToken },
    },
  } = useProvider();
  const [modalVisible, setModalVisible] = useState(false);
  const [chats, setChats] = useState([]);
  const [ticketId, setTicketId] = useState(null);
  // console.log("ticketId", ticketId);
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
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/support?key=${email}`, {
        headers: {
          token: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setTickets(res.data.result);
      })
      .catch((e) => console.log(e));
  }, [email, accessToken]);

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
    // {
    //   title: "Status",
    //   dataIndex: "status",
    //   key: "6",
    //   width: 150,
    //   render: (status) => <p>{status}</p>,
    // },
    {
      title: "View & Reply",
      dataIndex: "_id",
      key: "reply",
      width: 30,
      render: (id) => (
        <Button type="primary" onClick={() => handleModal(id)}>
          Reply
        </Button>
      ),
    },
    // {
    //   title: "Action",
    //   key: "actions",
    //   width: 80,
    //   render: (order) => (
    //     <Space split={<Divider type="vertical" />}>
    //       <Popconfirm
    //         title="Are you sure you want to delete this order?"
    //         onConfirm={() => deleteTicket(order)}
    //         okText="Yes"
    //         cancelText="No"
    //         placement="topRight"
    //       >
    //         <DeleteOutlined />
    //       </Popconfirm>
    //       <EditOutlined />
    //     </Space>
    //   ),
    // },
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
        handleModal={handleModal}
        setChats={setChats}
        ticketId={ticketId}
      ></TicketModal>
    </>
  );
};

export default CustomersTickets;
