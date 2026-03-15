import React from "react";
import Footer from "./Footer";
import StatsSection from "./StatsSection";

const Home = () => (
  <>
    <div
      style={{
        backgroundImage: `url('images/pexels-cytonn-955395.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white">
          Welcome to TalentBridge
        </h1>
        <p className="text-2xl mt-2 text-white">
          Your gateway to finding the perfect job.
        </p>
      </div>
    </div>

    <div>
      <StatsSection />
      <Footer />
    </div>
  </>
);

export default Home;
