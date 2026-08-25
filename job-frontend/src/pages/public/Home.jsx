import React from "react";
import Hero from "../../components/Hero";
import Choose from "../../components/Choose";
import Categories from "../../components/Categories";
import LatestJobs from "../../components/LatestJobs";
import CompanyMarquee from "../../components/CompanyMarquee";

export const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />

      <CompanyMarquee />
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-white">
        <Choose />
        <Categories />
        <LatestJobs />
      </div>
    </div>
  );
};
