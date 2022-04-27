import React from "react";
import HomeLayout from "../components/layouts/homeLayout";
import SingleProductPage from "../components/singleProduct/SingleProductPage";
   
const singleProduct = () => {
  return (
    <HomeLayout title="Single Products">
      <SingleProductPage></SingleProductPage>
    </HomeLayout>
  );
};

export default singleProduct;
