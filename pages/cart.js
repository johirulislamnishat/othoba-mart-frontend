import { useState, useEffect } from "react";
import Router from "next/router";
import { LoadingOutlined } from "@ant-design/icons";
import useProvider from "../hooks/useProvider";
import CartFull from "../components/cart/CartFull";
import HomeLayout from "../components/layouts/homeLayout";

const Cart = () => {
  const [loading, setLoading] = useState(true);
  
  const {
    state: { user },
  } = useProvider();

 useEffect(()=>{
	 if (!user?.user_name) {
		 Router.push("/auth/login");
		} else {
			setLoading(false);
		} 
	},[user?.user_name])

  if (loading) {
    return <LoadingOutlined />;
  }
  
  return (
    <HomeLayout title="Othoba Mart | Cart">
      <CartFull />
    </HomeLayout>
  );
};

export default Cart;
