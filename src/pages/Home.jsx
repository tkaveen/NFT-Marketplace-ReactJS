import React from "react";
import HeroSection from "../components/UI/HeroSection";
import LiveAuction from "../components/UI/Live-auction/LiveAuction";
import SellerSection from "../components/UI/Seller-section/SellerSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
    </>
  );
};

export default Home;
