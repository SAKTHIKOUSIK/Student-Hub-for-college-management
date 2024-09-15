import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
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
                            <StyledLink to="/chooseasguest">
                                <Button variant="outlined" fullWidth
                                    sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
                                >
                                    Login as Guest
                                </Button>
                            </StyledLink>
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
