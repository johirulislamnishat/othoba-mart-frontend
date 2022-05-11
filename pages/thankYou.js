import React from "react";
import HomeLayout from "../components/layouts/homeLayout";
import RelateProducts from "../components/RelatedProducts/RelateProducts";
import ThankYouPage from "../components/thankYou/ThankYouPage";

const thankyou = () => {
    return (
        <HomeLayout title="Category">
            <ThankYouPage />
            <RelateProducts />
        </HomeLayout>
    );
};

export default thankyou;
