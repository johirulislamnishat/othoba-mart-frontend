import HomeHeader from "../components/home/header";
import useAuth from "../components/hooks/useAuth";
import HomeLayout from "../components/layouts/homeLayout";

export default function Home() {
	const user = useAuth();

	return (
		<HomeLayout title="Othoba Mart">
			<HomeHeader />
			<div className="bg-red-50 mt-8">
				<p className="text-3xl">
					These are comming from context provider
				</p>
			<p>{user.user_name}</p>
			<p>{user.email}</p>
			</div>
		</HomeLayout>
	);
}
