import React from "react";
import MainArea from "../MainArea/MainArea";
import ProductCategories from "../ProductCategories/ProductCategories";
import Sidebar from "../Sidebar/Sidebar";

const HomeContent = () => {
  return (
    <>
      <div className="main-container">
        <Sidebar></Sidebar>
        <MainArea></MainArea>
      </div>
      <ProductCategories></ProductCategories>
    </>
  );
};

export default HomeContent;
