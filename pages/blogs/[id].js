import { Col, Image, Row } from "antd";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { API_BASE_URL } from "../../apiconstants";
import HomeLayout from "../../components/layouts/homeLayout";
import { humaneDate } from "../../utilities/time";

const BlogDetails = () => {
	const router = useRouter();
	const { id } = router.query;
	const [data, setData] = React.useState({});

	React.useEffect(() => {
		if (id) {
			axios
				.get(`${API_BASE_URL}/blog/${id}`)
				.then((res) => setData(res.data.result));
		}
	}, [id]);

	return (
		<HomeLayout title={data?.blog_title}>
			<div className="single-product-page">
				<Row gutter={[24, 24]}>
					<Col xs={24} md={10}>
						<Image src={data?.blog_image} alt={data?.blog_title} />
					</Col>

					<Col xs={24} md={14}>
						<h3>{data?.blog_title}</h3>
						<p>{data?.blog_content}</p>
						<br />
						<p>Posted at: {humaneDate(data?.createdAt)}</p>
					</Col>
				</Row>
			</div>
		</HomeLayout>
	);
};

export default BlogDetails;
