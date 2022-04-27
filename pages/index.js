import HomeHeader from "../components/home/header";
import HomeContent from "../components/home/HomeContent/HomeContent";
import HomeLayout from "../components/layouts/homeLayout";

export default function Home() {
  return (
    <HomeLayout title="Othoba Mart | Best Online E-commerce Shopping">
      <HomeHeader />
      <HomeContent></HomeContent>
    </HomeLayout>
  );
}
