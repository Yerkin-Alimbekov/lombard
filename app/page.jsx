"use client";
import { useEffect } from "react";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Work from "@/components/Work/Work";
import Contact from "@/components/Contact";
import FixedMenu from "@/components/FixedMenu";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import Kalk from "@/components/Kalkulator";
import Onas from "@/components/Onas";

const Home = () => {
  // implement locomotive scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);

  return (
    <>
      <Hero />
      <FixedMenu />
      <Services />
      <Journey />
      <Kalk />
      <Work />
      <Onas />
      <Footer />
      {/* temporary div */}
      {/* <div className="h-[3000px]"></div> */}
    </>
  );
};

export default Home;