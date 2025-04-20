import About from "@/app/components/home/About";
import Banner from "@/app/components/home/Banner";
import FAQ from "@/app/components/home/FAQ";
import FeatureMeal from "@/app/components/home/FeatureMeal";
import Hero from "@/app/components/home/Hero";
import Testimonials from "@/app/components/home/Testimonials";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Hero/>
      <About/>
      <Testimonials/>
      <FAQ/>
      <FeatureMeal/>
    </div>
  );
};

export default HomePage;
