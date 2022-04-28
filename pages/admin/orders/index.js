import { Select } from "antd";
import React from "react";
import OrderTable from "../../../components/admin/orderTable";
import AdminLayout from "../../../components/layouts/adminLayout";

const { Option } = Select;

const Orders = () => {
	return (
		<AdminLayout title="Admin | Orders" pageTitle="Orders">
			<OrderTable />
		</AdminLayout>
	);
};

export default Orders;
