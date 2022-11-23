import React from "react";
import HeroSection from "../components/UI/HeroSection";
import LiveAuction from "../components/UI/Live-auction/LiveAuction";
import SellerSection from "../components/UI/Seller-section/SellerSection";
import Trending from "../components/UI/Trending-section/Trending";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
      <Trending />
    </>
  );
};

export default Home;
