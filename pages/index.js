import HomeHeader from "../components/home/header";
import useAuth from "../components/hooks/useAuth";
import HomeLayout from "../components/layouts/homeLayout";

export default function Home() {
	const user = useAuth();
console.log(user.email)
	return (
		<HomeLayout title="Othoba Mart">
			<HomeHeader />
			<div className="bg-red-50 mt-8">
				<p className="text-3xl">
					These are comming from context provider
				</p>
			
			</div>
		</HomeLayout>
	);
}
