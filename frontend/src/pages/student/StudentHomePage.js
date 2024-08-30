import React, { useEffect, useState } from 'react'
import { Container, Grid, Paper, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { calculateOverallAttendancePercentage } from '../../components/attendanceCalculator';
import CustomPieChart from '../../components/CustomPieChart';
import { getUserDetails } from '../../redux/userRelated/userHandle';
import styled from 'styled-components';
import SeeNotice from '../../components/SeeNotice';
import CountUp from 'react-countup';
import Subject from "../../assets/subjects.svg";
import Assignment from "../../assets/assignment.svg";
import { getSubjectList } from '../../redux/sclassRelated/sclassHandle';
import { WidthFull } from '@mui/icons-material';

const StudentHomePage = () => {
    const dispatch = useDispatch();

    const { userDetails, currentUser, loading, response } = useSelector((state) => state.user);
    const { subjectsList } = useSelector((state) => state.sclass);

    const [subjectAttendance, setSubjectAttendance] = useState([]);

    const classID = currentUser.sclassName._id

    useEffect(() => {
        dispatch(getUserDetails(currentUser._id, "Student"));
        dispatch(getSubjectList(classID, "ClassSubjects"));
    }, [dispatch, currentUser._id, classID]);

    const numberOfSubjects = subjectsList && subjectsList.length;

    useEffect(() => {
        if (userDetails) {
            setSubjectAttendance(userDetails.attendance || []);
        }
    }, [userDetails])

    const overallAttendancePercentage = calculateOverallAttendancePercentage(subjectAttendance);
    const overallAbsentPercentage = 100 - overallAttendancePercentage;

    const chartData = [
        { name: 'Present', value: overallAttendancePercentage },
        { name: 'Absent', value: overallAbsentPercentage }
    ];
    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper style={{ backgroundImage: ' linear-gradient(to right, #434343 0%, black 100%)',width:'260px' ,borderRadius:'18px' }}>
                            {/* <img src={Assignment} alt="Assignments" /> */}

                            <div style={{ fontSize: '18px', marginBottom: '10px', color: '#333', marginTop: '58px',color:'white' }}>
                                <strong style={{color:'white'}}>HELLO,</strong>  {currentUser.name}
                            </div>

                            {/* <Data start={0} end={15} duration={4} /> */}
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper style={{ width:'260px',borderRadius:'18px', backgroundImage: ' linear-gradient(to right, #434343 0%, black 100%)',color:'white'}}>
                            {/* <img src={Subject} alt="Subjects" /> */}
                            <Title>
                            <div style={{ fontSize: '18px', marginBottom: '10px', color: '#333', marginTop: '58px', color: 'white' }}>
                                    <strong style={{ color: 'white' }}>Total Subjects,</strong> you have
                                </div>
                            </Title>
                            <Data start={0} end={numberOfSubjects} duration={2.5} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper style={{ borderRadius:'18px', backgroundImage: ' linear-gradient(to right, #434343 0%, black 100%)',color:'white' }}>
                            <img src={Assignment} alt="Assignments" />
                            <Title>
                                Total Assignments
                            </Title>
                            <Data start={0} end={15} duration={4} />
                        </StyledPaper>
                    </Grid>

                    <Grid item xs={12} md={4} lg={3}>
                        <ChartContainer>
                            {
                                response ?
                                    <Typography variant="h6">No Attendance Found</Typography>
                                    :
                                    <>
                                        {loading
                                            ? (
                                                <Typography variant="h6">Loading...</Typography>
                                            )
                                            :
                                            <>
                                                
                                                    {
                                                        subjectAttendance && Array.isArray(subjectAttendance) && subjectAttendance.length > 0 ? (
                                                            <>


                                                                <CustomPieChart data={chartData} />


                                                            </>
                                                        )
                                                            :
                                                            <Typography variant="h6">No Attendance Found</Typography>
                                                    }
                                                
                                            </>
                                        }
                                    </>
                            }
                        </ChartContainer>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', borderRadius:'18px',backgroundColor: '#fdfffc' }}>
                            <SeeNotice />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

const ChartContainer = styled.div`
  padding: 2px;
  display: flex;
  flex-direction: column;
  height: 240px;
  justify-content: center;
  align-items: center;
  text-align: center;
  
`;

const StyledPaper = styled(Paper)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
 
`;

const Title = styled.p`
  font-size: 1.25rem;
`;

const Data = styled(CountUp)`
  font-size: calc(1.3rem + .6vw);
  color: white;
`;



export default StudentHomePage


