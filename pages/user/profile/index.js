import { Avatar, Card, Col, Divider, Row, Space, Tag } from "antd";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/layouts/adminLayout";
import useProvider from "../../../hooks/useProvider";
import { humaneDate } from "../../../utilities/time";

const Profile = () => {
	const [role, setRole] = useState(null);
	const {
		state: { user },
	} = useProvider();
	const nameWords = user.user_name?.split(" ");

	useEffect(() => {
		if (user.isSuperAdmin) setRole("Super Admin");
		else if (user.isAdmin) setRole("Admin");
		else if (user.isVendor) setRole("Vendor");
		else setRole("Customer");
	}, [user]);

	return (
		<AdminLayout title="OthobaMart | Profile" pageTitle="Profile">
			<Space direction="vertical" size={45} className="w-full">
				<Row gutter={[16, 32]}>
					<Col xs={24} md={10} lg={8} xl={6}>
						<Card className="text-center">
							<Avatar
								size={120}
								gap={10}
								style={{ backgroundColor: "#f66a05" }}
							>
								{user.user_name}
							</Avatar>
							<p className="mt-5 text-xl font-bold">
								{user.user_name}
							</p>
							<p>{user.email}</p>
							<p>{role}, Othoba Mart</p>
							<p>Since {humaneDate(user?.createdAt)}</p>
						</Card>
					</Col>

					<Col xs={24} md={14} lg={16} xl={18}>
						<Card>
							<Row gutter={16} align="middle">
								<Col xs={8} sm={6} lg={5} xl={3}>
									<p className="font-bold ">Full Name</p>
								</Col>
								<Col xs={16} sm={18} lg={19} xl={21}>
									<p>{user.user_name}</p>
								</Col>
							</Row>
							<Divider />

							<Row gutter={16} align="middle">
								<Col xs={8} sm={6} lg={5} xl={3}>
									<p className="font-bold ">Email</p>
								</Col>
								<Col xs={16} sm={18} lg={19} xl={21}>
									<p>{user.email}</p>
								</Col>
							</Row>
							<Divider />

							<Row gutter={16} align="top">
								<Col xs={8} sm={6} lg={5} xl={3}>
									<p className="font-bold ">Role</p>
								</Col>
								<Col xs={16} sm={18} lg={19} xl={21}>
									{user.isSuperAdmin && (
										<Tag>Super Admin</Tag>
									)}
									{user.isAdmin && <Tag>Admin</Tag>}
									{user.isVendor && <Tag>Vendor</Tag>}
									{user.isCustomer && <Tag>Customer</Tag>}
								</Col>
							</Row>
							<Divider />

							<Row gutter={16} align="middle">
								<Col xs={8} sm={6} lg={5} xl={3}>
									<p className="font-bold ">Email</p>
								</Col>
								<Col xs={16} sm={18} lg={19} xl={21}>
									<p>{user.email}</p>
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>
			</Space>
		</AdminLayout>
	);
};

export default Profile;
