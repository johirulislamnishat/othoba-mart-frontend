import { useState, useEffect } from "react";
import Router from "next/router";
import { LoadingOutlined } from "@ant-design/icons";
import useProvider from "../hooks/useProvider";
import HomeLayout from "./../components/layouts/homeLayout";
import CheckoutForm from "./../components/checkout/CheckoutForm";
import CheckoutCart from "./../components/checkout/CheckoutCart";

const Checkout = () => {
    const [loading, setLoading] = useState(true);

    const {
        state: { user },
    } = useProvider();

    useEffect(() => {
        if (!user.user_name) {
            Router.push("/auth/login");
        } else {
            setLoading(false);
        }
    }, [user.user_name]);

    if (loading) {
        return <LoadingOutlined />;
    }

    return (
        <HomeLayout title="Othoba Mart | Checkout">
            <div className="p-4 lg:p-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <CheckoutForm />
                </div>
            </div>
        </HomeLayout>
    );
};

export default Checkout;
