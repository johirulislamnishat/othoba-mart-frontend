import React from "react";
import CategoriesBasedProductsGrid from "../CategoriesBasedProductsGrid/CategoriesBasedProductsGrid";
import CategoriesBasedProductsList from "../CategoriesBasedProductsList/CategoriesBasedProductsList";

const MainArea = ({ view }) => {
  // console.log(view);
  return (
    <main>
      {view == "list-view" ? (
        <CategoriesBasedProductsList></CategoriesBasedProductsList>
      ) : (
        <CategoriesBasedProductsGrid></CategoriesBasedProductsGrid>
      )}
    </main>
  );
};

export default MainArea;
