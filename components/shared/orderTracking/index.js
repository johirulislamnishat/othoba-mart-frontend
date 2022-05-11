import { Card, List, Space, Steps } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import useProvider from "../../../hooks/useProvider";

const { Step } = Steps;

const OrderTracking = ({ id }) => {
  const [orderData, setOrderData] = useState({});
  const [trackData, setTrackData] = useState({});
  const [products, setProducts] = useState([]);
  const [current, setCurrent] = useState(0);
  const {
    state: {
      user: { accessToken },
    },
  } = useProvider();

  useEffect(() => {
    if (accessToken && id) {
      axios
        .get(`${API_BASE_URL}/tracking/${id}`, {
          headers: {
            token: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          setTrackData(res.data.result[0]);
          if (res.data.result[0].status === "placed") setCurrent(0);
          else if (
            res.data.result[0].status === "pending" ||
            res.data.result[0].status === "cancelled"
          )
            setCurrent(1);
          else if (res.data.result[0].status === "packaging") setCurrent(2);
          else if (res.data.result[0].status === "shipped") setCurrent(3);
          else setCurrent(4);
        });

      axios
        .get(`${API_BASE_URL}/order?key=${id}`, {
          headers: {
            token: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          setOrderData(res.data.result[0]);
          setProducts(res.data.result[0].purchased_items);
        });
    }
  }, [accessToken, id]);

  // console.log(products);

  return (
    <Space direction="vertical" size={45} className="w-full">
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Order #{id}</p>
            <p>
              Placed on{" "}
              {new Date(orderData.createdAt).toLocaleDateString("en-Gb", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour12: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </p>
          </div>
          <p className="text-lg text-left md:text-right order-first md:order-last">
            Total: {orderData.total_price}
          </p>
        </div>
      </Card>

      <div className="bg-white p-5">
        <Steps current={current}>
          <Step title="Placed" description="Your order has been placed" />
          <Step
            title="Verified"
            description={
              trackData?.status === "cancelled"
                ? "Your order has been Cancled"
                : "Your order has been verified"
            }
            status={trackData?.status === "cancelled" ? "error" : ""}
          />
          <Step title="Packaging" description="Your order has been packged" />
          <Step title="Shipped" description="Your order has been shipped" />
          <Step title="Delivered" description="Your order has been delivered" />
        </Steps>
      </div>

      <div className="bg-white p-5">
        <List
          header={<p className="text-lg font-bold">Purchased Items</p>}
          itemLayout="horizontal"
          dataSource={products}
          renderItem={(item) => (
            <List.Item key={item._id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div>
                  <p className="font-semibold text-base">
                    Product: {item.item_name}
                  </p>
                  <p>Shop: {item.shop_name}</p>
                </div>
                <div className="text-left md:text-right">
                  <p key={1}>Quantity: {item.item_qty}</p>
                  <p key={2}>Cost: {item.item_total_price}</p>
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>
    </Space>
  );
};

export default OrderTracking;
