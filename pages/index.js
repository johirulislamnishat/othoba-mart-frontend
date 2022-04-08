import { Menu } from "antd";
import { useState } from "react";
import HomeHeader from "../components/home/header";
export default function Home() {
	return (
		<HomeLayout title="Othoba Mart">
			<HomeHeader />
		</HomeLayout>
	);
}
