import HomeHeader from "../components/home/header";
import useAuth from "../components/hooks/useAuth";
import HomeLayout from "../components/layouts/homeLayout";

export default function Home() {
	const { firstName, lastName, role } = useAuth();

	return (
		<HomeLayout title="Othoba Mart">
			<HomeHeader />
			<div className="bg-red-50 mt-8">
				<p className="text-3xl">
					These are comming from context provider
				</p>
				<p>First Name: {firstName}</p>
				<p>Last Name: {lastName}</p>
				<p>Role: {role}</p>
			</div>
		</HomeLayout>
	);
}
