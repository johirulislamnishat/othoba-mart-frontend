import {
	BellOutlined,
	QuestionCircleOutlined,
	SearchOutlined,
} from "@ant-design/icons";
import { Dropdown, Menu, PageHeader } from "antd";
import Link from "next/link";
import React from "react";

const AdminTop = ({ pageTitle }) => {
	const menu = (
		<Menu>
			<Menu.Item key={1}>
				<Link href="" passHref>
					Profile
				</Link>
			</Menu.Item>
			<Menu.Item key={2}>
				<Link href="/auth/login" passHref>
					Login
				</Link>
			</Menu.Item>
		</Menu>
	);

	return (
		<PageHeader
			className="site-page-header"
			title={pageTitle || "Dashboard"}
			ghost={false}
			extra={[
				<SearchOutlined
					key={5}
					className="text-xl"
					style={{ color: "#f66a05" }}
				/>,
				<BellOutlined
					key={6}
					className="text-xl mx-3"
					style={{ color: "#f66a05" }}
				/>,
				<Dropdown overlay={menu} key={4}>
					<QuestionCircleOutlined
						className="text-xl"
						style={{ color: "#f66a05" }}
					/>
				</Dropdown>,
			]}
		/>
	);
};

export default AdminTop;
