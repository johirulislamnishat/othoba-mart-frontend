import { useState, useEffect } from "react";
import Router from "next/router";
import { LoadingOutlined } from "@ant-design/icons";
import useIsAuthenticated from "../hooks/useIsAuthenticated";
import HomeLayout from "./../components/layouts/homeLayout";
import CheckoutForm from "./../components/checkout/CheckoutForm";
import CheckoutCart from "./../components/checkout/CheckoutCart";

const Checkout = () => {
    const isAuthenticating = useIsAuthenticated({query:{from:'/checkout'}})

    return (
        <HomeLayout title="Othoba Mart | Checkout">
            { isAuthenticating && <LoadingOutlined style={{fontSize:'large'}} /> }
            <div className="p-4 lg:p-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <CheckoutForm />
                </div>
            </div>
        </HomeLayout>
    );
};

export default Checkout;
