import { Menu } from "antd";
import HomeHeader from "../components/home/header";
import HomeLayout from "../components/layouts/homeLayout";

const { SubMenu } = Menu;

export default function Home() {
	return (
		<HomeLayout title="Othoba Mart">
			<HomeHeader />
		</HomeLayout>
	);
}
