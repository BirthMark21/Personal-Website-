import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Success from "./Pages/Success";
import Contact from "./Pages/Contact";
import EventDetail from "./Pages/Detail";
import Skills from "./Pages/Skills";
import Blog from "./Pages/Blog";
import Completedprojects from "./Pages/Completedprojects";
import Resume from "./Pages/Resume";
import ProjectIdeas from "./Pages/ProjectIdeas";
import ScrollToTop from "./Components/ScrollToTop";
import Portfolio from "./Pages/Portfolio";
import SomeCom from "./Pages/SomeCom";
import Admin from "./Pages/Admin";
import SpeakerReg from "./Components/SpeakerReg";
import SponsorReg from "./Components/SponsorReg";
import ScheduleReg from "./Components/ScheduleReg";
import EventReg from "./Pages/EventReg";
import StreamRoom from "./Pages/StreamRoom";
import Lobby from "./Pages/Lobby";
import EventSuccess from "./Pages/EventSuccess";
import CountCard from "./Components/Admin/CountCard";
import RoomLogin from "./Pages/RoomLogin";
import Navigation from "./Components/Navigation";
import DetailAdmin from "./Components/DetailAdmin";
import Layout from './Components/Layout';
// import Signin from "./Pages/Signin";
// import Profile from "./Pages/Profile";

const AllRoutes = () => {
  // const isLoginPage =
  //   window.location.pathname === "/" || window.location.pathname === "/signin";
  return (
    <>
      {/* {!isLoginPage && <Navbar />} */}
      <Layout>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reference" element={<Blog />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/portfolio" element={<Portfolio />} /> 

        <Route path="/resume" element={<Resume />} />
        <Route path="/skills/resume" element={<Resume />} /> {/* Route for Resume */}
        <Route path="/skills/projects" element={<Projects />} /> {/* Route for Resume */}
        <Route path="/projectideas" element={<ProjectIdeas />} />
        <Route path="/projects/completedprojects" element={<Completedprojects />} />
        <Route path="/projects/projectideas" element={<ProjectIdeas />} /> {/* Route for Resume */}
        <Route path="/register/:id" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/check" element={<SomeCom />} />
        <Route path="/cards" element={<Admin />} />
        <Route path="/speaker/:id" element={<SpeakerReg />} />
        <Route path="/sponsor/:id" element={<SponsorReg />} />
        <Route path="/schedule/:id" element={<ScheduleReg />} />
        <Route path="/eventreg" element={<EventReg />} />
        <Route path="/eventsucces" element={<EventSuccess />} />
        <Route path="/room/:id" element={<StreamRoom hidefooter={true} />} />
        <Route path="/lobby/:id" element={<Lobby />} />
        <Route path="/Admin" element={<CountCard />} />
        <Route path="/roomlogin/:id" element={<RoomLogin />} />
        <Route path="/admindetail/:id" element={<DetailAdmin />} />
        {/* <Route path="/signin" element={<Signin />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
      </Layout>
      {/* <Navigation /> */}
      <Footer />
     
    </>
  );
};

export default AllRoutes;
