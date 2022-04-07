import { Menu } from "antd";
import { useState } from "react";
import HomeHeader from "../components/home/header";
import useAuth from "../components/hooks/useAuth";
import HomeLayout from "../components/layouts/homeLayout";
const { SubMenu } = Menu;

export default function Home() {

  return (
    <HomeLayout title="Othoba Mart">
      <HomeHeader />
    </HomeLayout>
  );

	const { firstName, lastName, role } = useAuth();
	const [current, setCurrent] = useState("mail");

	const handleClick = (e) => {
		console.log("click ", e);
		setCurrent(e.key);
	};

	return (
		<HomeLayout title="Othoba Mart">
			<HomeHeader />
			<div className="bg-red-50 mt-8">
				<p className="text-3xl">
					These are comming from context provider
				</p>
				<p>First Name: {firstName}</p>
				<p>Last Name: {lastName}</p>
				<p className="font-black">
					Full Name: {firstName.concat(" ").concat(lastName)}
				</p>
				<p>Role: {role}</p>
			</div>
		</HomeLayout>
	);

}
