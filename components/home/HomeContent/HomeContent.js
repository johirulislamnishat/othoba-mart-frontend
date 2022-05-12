import React from "react";
import Blogs from "../../Blogs";
import MainArea from "../MainArea/MainArea";
import ProductCategories from "../ProductCategories/ProductCategories";
import Sidebar from "../Sidebar/Sidebar";

const HomeContent = () => {
	return (
		<>
			<div className="main-container">
				<Sidebar />
				<MainArea />
			</div>
			<ProductCategories />
			<Blogs location={"home"} />
		</>
	);
};

export default HomeContent;
