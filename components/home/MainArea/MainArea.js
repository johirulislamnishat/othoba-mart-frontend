import React from "react";
import BestSellers from "../BestSellers/BestSellers";
import LatestDeals from "../LatestDeals/LatestDeals";
import NewProducts from "../NewProducts/NewProducts";
import PromoLgOne from "../PromoLgOne/PromoLgOne";
import PromoLgThree from "../PromoLgThree/PromoLgThree";
import PromoLgTwo from "../PromoLgTwo/PromoLgTwo";
import SmartphoneAndAccessories from "../SmartphoneAndAccessories/SmartphoneAndAccessories";

const MainArea = () => {
  return (
    <main>
      <BestSellers></BestSellers>
      <PromoLgOne></PromoLgOne>
      <LatestDeals></LatestDeals>
      <PromoLgThree></PromoLgThree>
      <SmartphoneAndAccessories></SmartphoneAndAccessories>
      <PromoLgTwo></PromoLgTwo>
      <NewProducts></NewProducts>
    </main>
  );
};

export default MainArea;
