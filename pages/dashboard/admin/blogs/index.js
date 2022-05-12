import { Card } from "antd";
import axios from "axios";
import React from "react";
import { API_BASE_URL } from "../../../../apiconstants";
import AdminLayout from "../../../../components/layouts/adminLayout";

const { Meta } = Card;

const Blogs = () => {
	React.useEffect(() => {
		axios
			.get(`${API_BASE_URL}/blog`)
			.then((res) => console.log(res.data.result));
	}, []);
	return (
		<AdminLayout title={"Blogs | Admin Dashboard"} pageTitle="Blogs">
			<h1>Manage blogs</h1>
		</AdminLayout>
	);
};

export default Blogs;
