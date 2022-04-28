import { Select } from "antd";
import React from "react";
import UsersTable from "../../../components/admin/usersTable";
import AdminLayout from "../../../components/layouts/adminLayout";

const { Option } = Select;

const Users = () => {
	return (
		<AdminLayout title={"Admin || All Users"} pageTitle="Users">
			<UsersTable />
		</AdminLayout>
	);
};

export default Users;
