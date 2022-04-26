import { Steps } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import useProvider from "../../../hooks/useProvider";

const { Step } = Steps;

const OrderTracking = ({ id }) => {
	const [data, setData] = useState([]);
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
					setData(res.data.result);
					if (res.data.result[0].status === "placed") setCurrent(0);
					else if (
						res.data.result[0].status === "pending" ||
						res.data.result[0].status === "cancelled"
					)
						setCurrent(1);
					else if (res.data.result[0].status === "packaging")
						setCurrent(2);
					else if (res.data.result[0].status === "shipped")
						setCurrent(3);
					else setCurrent(4);
				});
		}
	}, [accessToken, id]);

	return (
		<div className="bg-white p-5">
			<Steps current={current}>
				<Step title="Placed" description="Your order has been placed" />
				<Step
					title="Verified"
					description={
						data[0]?.status === "cancelled"
							? "Your order has been Cancled"
							: "Your order has been verified"
					}
					status={data[0]?.status === "cancelled" ? "error" : ""}
				/>
				<Step
					title="Packaging"
					description="Your order has been packged"
				/>
				<Step
					title="Shipped"
					description="Your order has been shipped"
				/>
				<Step
					title="Delivered"
					description="Your order has been delivered"
				/>
			</Steps>
		</div>
	);
};

export default OrderTracking;
