import React from "react";
import Blogs from "../../components/Blogs";
import HomeLayout from "../../components/layouts/homeLayout";

const index = () => {
	return (
		<HomeLayout title={"Blogs | Othoba Mart"}>
			<div className="mt-32">
				<Blogs location={"blog"} />
			</div>
		</HomeLayout>
	);
};

export default index;
