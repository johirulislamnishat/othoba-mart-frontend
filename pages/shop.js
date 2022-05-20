import React from "react";
import CategoriesPage from "../components/categories/CategoriesPage/CategoriesPage";
import HomeLayout from "../components/layouts/homeLayout";

const categories = () => {
  return (
    <HomeLayout title="Shop">
      <CategoriesPage />
    </HomeLayout>
  );
};

export default categories;
