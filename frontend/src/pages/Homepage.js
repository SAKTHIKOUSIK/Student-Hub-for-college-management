// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Grid, Box, Button } from '@mui/material';
// import styled from 'styled-components';
// // import Students from "../assets/students.svg";
// import homephoto from "../assets/homephoto.jpg";
// import linebackground from '../assets/linebackground.avif'

// import { LightPurpleButton } from '../components/buttonStyles';

// const Homepage = () => {
//     return (
//         <StyledContainer  >
//             <Grid container spacing={0}>
//                 <Grid item xs={12} md={6}>
//                     <img src={homephoto} alt="students" style={{ width: '100%', marginTop: '170px' }} />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <StyledPaper elevation={3}>
//                     <StyledTitle style={{position:'absolute', translate:'-600px 0 0'}}>
//                       Welcome to Smart Hub For College Management System
//                     </StyledTitle>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                     <br/>
//                    <StyledText style={{textAlign:'justify'}}>
//                     The "Smart Hub For College Management System Using MERN Stack" is an advanced ERP-based web application designed to streamline the management processes within a college. 
//                     The platform caters to three primary users: Admin, Teachers, and Students.
//                     It integrates a help chatbot, a productive task manager, and personalized dashboards, facilitating efficient management of academic and administrative tasks.
//                     Additionally, the platform includes a dedicated placement preparation section that offers study materials related to aptitude and coding. The platform aims to simplify complex processes, improve communication, and enhance productivity within the educational ecosystem.
//                     </StyledText>

//                         <StyledBox>
//                             <StyledLink to="/choose">
//                                 <LightPurpleButton variant="contained" fullWidth>
//                                     Login
//                                 </LightPurpleButton>
//                             </StyledLink>
//                             {/* <StyledLink to="/chooseasguest">
//                                 <Button variant="outlined" fullWidth
//                                     sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
//                                 >
//                                     Login as Guest
//                                 </Button>
//                             </StyledLink> */}
//                             <StyledText>
//                                 Don't have an account?{' '}
//                                 <Link to="/Adminregister" style={{color:"#550080"}}>
//                                     Sign up
//                                 </Link>
//                             </StyledText>
//                         </StyledBox>
//                     </StyledPaper>
//                 </Grid>
//             </Grid>
//         </StyledContainer>
//     );
// };

// export default Homepage;

// const StyledContainer = styled(Container)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// //   background-image: url(${linebackground});
// //   background-repeat: no-repeat;
// //   background-size: cover; /* Or use contain, auto, or specific dimensions */
// //   background-position: center; /* To center the image */
// `;

// const StyledPaper = styled.div`
//   padding: 24px;
//   height: 100vh;
// `;

// const StyledBox = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content:center;
//   gap: 16px;
//   padding: 24px;
// `;

// const StyledTitle = styled.h1`
//   font-size: 3rem;
//   color: #252525;
//   /* font-family: "Manrope"; */
//   font-weight: bold;
//   padding-top: 0;
//   letter-spacing: normal;
//   line-height: normal;
// `;

// const StyledText = styled.p`
//   /* color: #550080; */
//   margin-top: 30px;
//   margin-bottom: 30px; 
//   letter-spacing: normal;
//   line-height: normal;
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;
// `;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
// import a2 from '../assets/a2.png'; 
// import a1 from '../assets/a1.png';
// import a3 from '../assets/a3.png';
// import a4 from '../assets/a4.jpg';

// const Homepage = () => {
//     const [showOptions, setShowOptions] = useState(false); 

//     const handleDashboardClick = () => {
//         setShowOptions(!showOptions); 
//     };

//     return (
//         <div className="min-h-screen bg-white">
//             {/* Navbar */}
//             <nav className="flex justify-between items-center bg-gray-200 py-4 px-8 shadow-md">
//                 <div className="flex items-center space-x-8">
//                     <button
//                         onClick={handleDashboardClick}
//                         className="text-lg text-black font-semibold bg-white border border-gray-300 rounded py-2 px-4 hover:bg-gray-100"
//                     >
//                         Dashboard
//                     </button>

//                     {showOptions && (
//                         <div className="flex space-x-4">
//                             <span className="text-lg text-black font-semibold">Admin</span>
//                             <span className="text-lg text-black font-semibold">Teachers</span>
//                             <span className="text-lg text-black font-semibold">Contained</span>
//                         </div>
//                     )}
//                 </div>

//                 <div className="flex items-center space-x-4">
//                     <Link to="/choose">
//                         <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
//                             Login
//                         </button>
//                     </Link>
//                     <Link to="/Adminregister">
//                         <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
//                             Signup
//                         </button>
//                     </Link>
//                 </div>
//             </nav>

//             {/* Carousel Section */}
//             <div className="p-8 bg-white">
//                 <Carousel
//                     autoPlay={true}
//                     infiniteLoop={true}
//                     showThumbs={false}
//                     showArrows={true}
//                     showStatus={false}
//                     interval={3000}
//                     stopOnHover={true}
//                 >
//                     <div>
//                         <img src={a1} alt="Image 1" style={{ width: '1200px', height: '800px', objectFit: 'cover' }} />
//                     </div>
//                     <div>
//                         <img src={a2} alt="Image 2" style={{ width: '1200px', height: '800px', objectFit: 'cover' }} />
//                     </div>
//                     <div>
//                         <img src={a3} alt="Image 3" style={{ width: '1200px', height: '800px', objectFit: 'cover' }} />
//                     </div>
//                 </Carousel>
//             </div>

//             {/* About Us Section */}
//             <div className="flex flex-col md:flex-row justify-between items-center mt-8 p-8">
//                 <div className="md:w-1/2 p-4">
//                     <img 
//                         src={a4} 
//                         alt="VealthX" 
//                         className="mx-auto rounded-lg shadow-lg" 
//                         style={{ width: '100%', height: 'auto', borderRadius: '20px' }} 
//                     />
//                 </div>

//                 <div className="md:w-1/2 p-4 text-left">
//                     <h3 className="text-blue-400 text-xl font-semibold mb-2">About us</h3>
//                     <h2 className="text-[36px] font-bold mb-4">What does this web application do?</h2>
//                     <p className="text-[24px] mb-4">
//                         The "Smart Hub For College Management System Using MERN Stack" is an advanced ERP-based web application
//                         designed to streamline the management processes within a college. The platform caters to three primary
//                         users: Admin, Teachers, and Students. It integrates a help chatbot, a productive task manager, and personalized
//                         dashboards, facilitating efficient management of academic and administrative tasks. Additionally, the platform
//                         includes a dedicated placement preparation section that offers study materials related to aptitude and coding.
//                         The platform aims to simplify complex processes, improve communication, and enhance productivity within
//                         the educational ecosystem.                    
//                     </p>

//                     <button 
//                         className="mt-4 px-6 py-2 bg border-2 border-blue-400 text-black rounded-full transition-all duration-300 hover:bg-blue-400 hover:text-white blink" 
//                         onMouseEnter={(e) => e.currentTarget.classList.add('blink')}
//                         onMouseLeave={(e) => e.currentTarget.classList.remove('blink')}
//                     >
//                         Get Started
//                     </button>
//                 </div>
//             </div>

//             {/* Additional Admin Section as in Image */}
//             <div className="flex flex-col md:flex-row justify-between items-center mt-8 p-8">
//                 {/* Admin Section Image */}
//                 <div className="md:w-1/2 p-4">
//                     <img 
//                         src={a4} 
//                         alt="Admin Dashboard" 
//                         className="mx-auto rounded-lg shadow-lg" 
//                         style={{ width: '100%', height: 'auto', borderRadius: '20px' }} 
//                     />
//                 </div>

//                 {/* Admin Section Text */}
//                 <div className="md:w-1/2 p-4 text-left">
//                     <h2 className="text-[36px] font-bold mb-4">Admin</h2>
//                     <p className="text-[20px] mb-4">
//                         The admin dashboard provides comprehensive access to college management features. 
//                         It includes controls for user management, course updates, and performance tracking. 
//                         From monitoring academic progress to addressing complaints, the admin section streamlines 
//                         overall management of academic and non-academic activities.
//                     </p>

//                     <button 
//                         className="mt-4 px-6 py-2 bg border-2 border-blue-400 text-black rounded-full transition-all duration-300 hover:bg-blue-400 hover:text-white blink" 
//                         onMouseEnter={(e) => e.currentTarget.classList.add('blink')}
//                         onMouseLeave={(e) => e.currentTarget.classList.remove('blink')}
//                     >
//                         Get Started
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Homepage;


import React from "react";
import { IoIosArrowRoundForward, IoMdMenu, IoMdHappy } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";
import { FaBell, FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa"; // Added imports
import { motion } from "framer-motion";
import Blob from "../assets/blob.svg"; // adjust the path based on your folder structure
import HeroPng from "../assets/hero.png"; // adjust the path based on your folder structure
import BgImage from "../assets/bg.png"; // adjust the path based on your folder structure
import BannerPng from "../assets/education.png"; // ensure the path is correct
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FaUsersLine } from "react-icons/fa6";
import { useEffect } from "react"; //for chat bot



// Navbar Menu Data
const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Services", link: "#" },
  { id: 3, title: "About Us", link: "#" },
  { id: 4, title: "Dashboards", link: "#" },
  { id: 5, title: "Contact Us", link: "#" },
];

// Navbar Component
const Navbar = () => {
  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Scrolling Text Logo */}
        <div className="overflow-hidden w-48 h-8 relative">
          <div className="absolute whitespace-nowrap animate-scroll text-2xl font-bold">
            Smart Hub For Clg Mgmt System
          </div>
        </div>

        {/* Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="primary-btn">Sign In</button>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

// Hero Section Component
const FadeUp = (delay) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, duration: 0.5, delay, ease: "easeInOut" },
  },
});

const Hero = () => {
  return (
    <section className="bg-light overflow-hidden relative">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug"
            >
              Let's Learn to build a{" "}
              <span className="text-secondary">Website</span> for your business
            </motion.h1>
            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2 group">
                Get Started
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={HeroPng}
            alt=""
            className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
          />
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            src={Blob}
            alt=""
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesData = [
  { id: 1, title: "Web Development", link: "#", icon: <TbWorldWww />, delay: 0.2 },
  { id: 2, title: "Mobile Development", link: "#", icon: <CiMobile3 />, delay: 0.3 },
  { id: 3, title: "Software Development", link: "#", icon: <RiComputerLine />, delay: 0.4 },
  { id: 4, title: "Satisfied Clients", link: "#", icon: <IoMdHappy />, delay: 0.5 },
  { id: 5, title: "SEO Optimization", link: "#", icon: <IoPulseOutline />, delay: 0.6 },
  { id: 6, title: "24/7 Support", link: "#", icon: <BiSupport />, delay: 0.7 },
];

const SlideLeft = (delay) => ({
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay, ease: "easeInOut" },
  },
});

const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">Services we provide</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">{service.title}</h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Banner Section Component
const Banner = () => {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={BannerPng}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
        {/* Banner Text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold !leading-snug"
            >
              The World's Leading Online learning Platform
            </motion.h1>
            <div className="flex flex-col gap-6">
  <motion.div
    variants={FadeUp(0.2)}
    initial="initial"
    whileInView={"animate"}
    viewport={{ once: true }}
    className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
  >
    <FaUserAlt className="text-2xl" />
    <p className="text-lg">Admin</p>
  </motion.div>
  <motion.div
    variants={FadeUp(0.4)}
    initial="initial"
    whileInView={"animate"}
    viewport={{ once: true }}
    className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
  >
    <GiTeacher className="text-2xl" />
    <p className="text-lg">Teachers</p>
  </motion.div>
  <motion.div
    variants={FadeUp(0.6)}
    initial="initial"
    whileInView={"animate"}
    viewport={{ once: true }}
    className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
  >
    <FaUsersLine className="text-2xl" />
    <p className="text-lg">Students</p>
  </motion.div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Subscribe Section Component
const Subscribe = () => {
  const bgStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="container py-24 md:py-48"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
            <h1 className="text-4xl font-bold !leading-snug">
              450K+ Students are learning from us
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima
            </p>
            <a
              href=""
              className="primary-btn !mt-8 inline-flex items-center gap-4 group"
            >
              Subscribe Now
              <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Footer Section Component
const Footer = () => {
  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* first section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">The Coding Journey</h1>
            <p className="text-dark2">
              TCJ is a platform dedicated to empowering aspiring developers. From beginner tutorials to advanced programming concepts, we provide a comprehensive learning experience designed to help you master coding skills, build projects, and launch your tech career.
            </p>
          </div>
          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Courses</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">Web Development</li>
                  <li className="cursor-pointer hover:text-secondary duration-200">Software Development</li>
                  <li className="cursor-pointer hover:text-secondary duration-200">Apps Development</li>
                  <li className="cursor-pointer hover:text-secondary duration-200">E-learning</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">Home</li>
                  <li className="cursor-pointer hover:text-secondary duration-200">Services</li>
                  <li className="cursor-pointer hover:text-secondary duration-200">About</li>
                  <li className="cursor-pointer hover:text-secondary duration-200">Contact</li>
                </ul>
              </div>
            </div>
          </div>
          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">Go</button>
            </div>
            {/* social icons */}
            <div className="flex space-x-6 py-3">
              <a href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.instagram.com/the.coding.journey/">
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://thecodingjourney.com/">
                <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.youtube.com/@TheCodingJourney">
                <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};


const Banner2 = () => {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl font-bold !leading-snug">
              Join Our Community to Start your Journey
            </h1>
            <p className="text-dark2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </p>
            <a
              href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0"
              className="primary-btn !mt-8"
            >
              Join Now
            </a>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={BannerPng}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};
const Chatbot = () => {
  useEffect(() => {
    // Adding the chatbot configuration script dynamically
    window.embeddedChatbotConfig = {
      chatbotId: "A5zafRc5BaLBPDOtwNReJ",
      domain: "www.chatbase.co"
    };

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.setAttribute("chatbotId", "A5zafRc5BaLBPDOtwNReJ");
    script.setAttribute("domain", "www.chatbase.co");
    script.defer = true;

    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Your chatbot will be embedded via the external script */}
    </div>
  );
};

// Homepage Component
const Homepage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Banner />
      <Subscribe /> {/* Subscribe section added here */}
      <Banner2 />
      <Chatbot />
      <Footer />
    </>
  );
};

export default Homepage;
