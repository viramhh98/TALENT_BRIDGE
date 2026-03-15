import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-lime-400 py-12 text-center">
      <h2 className="text-white text-2xl font-bold mb-4">TalentBridge Stats</h2>
      <p className="text-white mb-8 text-center">
        At TalentBridge, we connect the right talent with the right opportunities. Our platform has helped thousands of candidates find their dream jobs while enabling companies to discover exceptional talent tailored to their needs.
      </p>

      <div className="flex justify-center space-x-12">
        <div className="text-white">
          <p className="text-4xl font-bold">3</p>
          <p className="text-sm">Candidates</p>
        </div>
        <div className="text-white">
          <p className="text-4xl font-bold">6</p>
          <p className="text-sm">Jobs Posted</p>
        </div>
        <div className="text-white">
          <p className="text-4xl font-bold">20</p>
          <p className="text-sm">Jobs Filled</p>
        </div>
        <div className="text-white">
          <p className="text-4xl font-bold">4</p>
          <p className="text-sm">Companies</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
