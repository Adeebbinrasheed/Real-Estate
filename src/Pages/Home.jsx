import React from "react";
import Hero from "../Components/Hero";
import Featured from "../Components/Featured";
import Banner from "../Components/Banner";
import Category from "../Components/Category";
import Agents from "../Components/Agents";
import Services from "../Components/Services";
import Blogs from "../Components/Blogs";
import NewsLetter from "../Components/NewsLetter";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured/>
      <Banner/>
      <Category/>
      <Agents/>
      <Services/>
      <Blogs/>
      <NewsLetter/>
    </>
  );
};

export default Home;
