import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
// import Students from "../assets/students.svg";
import homephoto from "../assets/homephoto.jpg";
import linebackground from '../assets/linebackground.avif'

import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer  >
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <img src={homephoto} alt="students" style={{ width: '100%', marginTop: '170px' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                    <StyledTitle style={{position:'absolute', translate:'-600px 0 0'}}>
                      Welcome to Smart Hub For College Management System
                    </StyledTitle>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                   <StyledText style={{textAlign:'justify'}}>
                    The "Smart Hub For College Management System Using MERN Stack" is an advanced ERP-based web application designed to streamline the management processes within a college. 
                    The platform caters to three primary users: Admin, Teachers, and Students.
                    It integrates a help chatbot, a productive task manager, and personalized dashboards, facilitating efficient management of academic and administrative tasks.
                    Additionally, the platform includes a dedicated placement preparation section that offers study materials related to aptitude and coding. The platform aims to simplify complex processes, improve communication, and enhance productivity within the educational ecosystem.
                    </StyledText>

                        <StyledBox>
                            <StyledLink to="/choose">
                                <LightPurpleButton variant="contained" fullWidth>
                                    Login
                                </LightPurpleButton>
                            </StyledLink>
                            {/* <StyledLink to="/chooseasguest">
                                <Button variant="outlined" fullWidth
                                    sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
                                >
                                    Login as Guest
                                </Button>
                            </StyledLink> */}
                            <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{color:"#550080"}}>
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
//   background-image: url(${linebackground});
//   background-repeat: no-repeat;
//   background-size: cover; /* Or use contain, auto, or specific dimensions */
//   background-position: center; /* To center the image */
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #550080; */
  margin-top: 30px;
  margin-bottom: 30px; 
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

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
//                             <span className="text-lg text-black font-semibold">contained</span>
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
//                         the educational ecosystem.                    </p>

//                     {/* "Get Started" Button with Blink Effect */}
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

