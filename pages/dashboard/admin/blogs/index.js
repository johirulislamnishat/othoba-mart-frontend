import React from "react";
import BlogsTable from "../../../../components/admin/blogsTable";
import AdminLayout from "../../../../components/layouts/adminLayout";

const Blogs = () => {
	return (
		<AdminLayout title={"Blogs | Admin Dashboard"} pageTitle="Blogs">
			<BlogsTable />
		</AdminLayout>
	);
};

export default Blogs;
