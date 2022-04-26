import {
	SmileOutlined,
	SolutionOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import React from "react";

const { Step } = Steps;

const OrderTracking = ({ id }) => {
	return (
		<div>
			<p>Track Id: {id}</p>
			<Steps current={2}>
				<Step title="Login" icon={<UserOutlined />} />
				<Step title="Verification" icon={<SolutionOutlined />} />
				<Step status="error" title="Reject" icon={<SmileOutlined />} />
				<Step title="Done" icon={<SmileOutlined />} />
			</Steps>
		</div>
	);
};

export default OrderTracking;
