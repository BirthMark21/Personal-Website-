import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";
import Blog from "./Pages/Blog";
import Resume from "./Pages/Resume";
import Experience from "./Pages/Experience";
import ScrollToTop from "./Components/ScrollToTop";
import Layout from './Components/Layout';

const AllRoutes = () => {
  return (
    <>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <Footer />
    </>
  );
};

export default AllRoutes;
