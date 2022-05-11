import { useState, useEffect } from "react";
import Router from "next/router";
import { LoadingOutlined } from "@ant-design/icons";
import useProvider from "../hooks/useProvider";
import WishFull from "../components/wish/WishFull";
import HomeLayout from "../components/layouts/homeLayout";

const WishList = () => {
  const [loading, setLoading] = useState(true);

  const {
    state: { user },
  } = useProvider();

  useEffect(() => {
    //  console.log(user?.user_name)
    if (user?.user_name === undefined) {
      setLoading(true);
    }

    if (!user?.user_name) {
      Router.push("/auth/login");
    } else {
      setLoading(false);
    }
  }, [user?.user_name]);

  if (loading) {
    return <LoadingOutlined />;
  }

  return (
    <HomeLayout>
      <div className="p-8">
        <WishFull />
      </div>
    </HomeLayout>
  );
};

export default WishList;
