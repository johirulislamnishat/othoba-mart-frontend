import { useState, useEffect } from "react";
import Router from "next/router";
import { LoadingOutlined } from "@ant-design/icons";
import useIsAuthenticated from "../hooks/useIsAuthenticated";
import CartFull from "../components/cart/CartFull";
import HomeLayout from "../components/layouts/homeLayout";

const Cart = () => {
  const isAuthenticating = useIsAuthenticated({query:{from:'/cart'}})

  return (
    <HomeLayout title="Othoba Mart | Cart">
      { isAuthenticating && <LoadingOutlined style={{fontSize:'large'}} /> }
      <CartFull />
    </HomeLayout>
  );
};

export default Cart;

