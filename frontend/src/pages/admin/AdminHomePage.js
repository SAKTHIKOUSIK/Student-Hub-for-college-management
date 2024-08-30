import { Container, Grid, Paper } from '@mui/material'
import SeeNotice from '../../components/SeeNotice';
import styled from 'styled-components';
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSclasses } from '../../redux/sclassRelated/sclassHandle';
import { getAllStudents } from '../../redux/studentRelated/studentHandle';
import { getAllTeachers } from '../../redux/teacherRelated/teacherHandle';

const AdminHomePage = () => {
    const dispatch = useDispatch();
    const { studentsList } = useSelector((state) => state.student);
    const { sclassesList } = useSelector((state) => state.sclass);
    const { teachersList } = useSelector((state) => state.teacher);

    const { currentUser } = useSelector(state => state.user)

    const adminID = currentUser._id

    useEffect(() => {
        dispatch(getAllStudents(adminID));
        dispatch(getAllSclasses(adminID, "Sclass"));
        dispatch(getAllTeachers(adminID));
    }, [adminID, dispatch]);

    const numberOfStudents = studentsList && studentsList.length;
    const numberOfClasses = sclassesList && sclassesList.length;
    const numberOfTeachers = teachersList && teachersList.length;

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>

                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper style={{ backgroundImage: ' linear-gradient(to right, #434343 0%, black 100%)', borderRadius: '18px', color: 'white' }}>
                            {/* <img src={Fees} alt="Fees" /> */}
                            <Title>
                                <div style={{ fontSize: '18px', marginBottom: '10px', color: '#333', marginTop: '58px', color: 'white' }}>
                                    <strong style={{ color: 'white' }}>HELLO ADMIN,</strong>  {currentUser.name}
                                </div>
                            </Title>
                            {/* <Data start={0} end={23000} duration={2.5} prefix="$" /> */}                       
                        </StyledPaper>
                    </Grid>

                    <Grid item xs={12} md={3} lg={3} >
                        <StyledPaper style={{ backgroundImage: ' linear-gradient(to right, #434343 0%, black 100%)', borderRadius: '18px', color: 'white' }}>
                            {/* <img src={Students} alt="Students" /> */}
                            <Title>
                            <div style={{ fontSize: '18px', marginBottom: '10px', color: '#333', marginTop: '58px', color: 'white' }}>
                                    <strong style={{ color: 'white' }}>Total Students,</strong> In your school
                                </div>
                            </Title>
                            <Data start={0} end={numberOfStudents} duration={2.5} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3} >
                        <StyledPaper style={{ backgroundImage: ' linear-gradient(to right, #434343 0%, black 100%)', borderRadius: '18px', color: 'white' }}>
                            {/* <img src={Classes} alt="Classes" /> */}
                            <Title>
                            <div style={{ fontSize: '18px', marginBottom: '10px', color: '#333', marginTop: '58px', color: 'white' }}>
                                    <strong style={{ color: 'white' }}>Total Classes,</strong> In your school
                                </div>
                            </Title>
                            
                            <Data start={0} end={numberOfClasses} duration={5} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <StyledPaper style={{ backgroundImage: ' linear-gradient(to right, #434343 0%, black 100%)', borderRadius: '18px', color: 'white' }}>
                            {/* <img src={Teachers} alt="Teachers" /> */}
                            <Title>
                            <div style={{ fontSize: '18px', marginBottom: '10px', color: '#333', marginTop: '58px', color: 'white' }}>
                                    <strong style={{ color: 'white' }}>Total Teachers,</strong> In your school
                                </div>
                            </Title>
                            
                            <Data start={0} end={numberOfTeachers} duration={2.5} />
                        </StyledPaper>
                    </Grid>


                    <Grid item xs={12} md={12} lg={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', borderRadius:'18px',backgroundColor: '#fdfffc' }}>
                            <SeeNotice />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};


const StyledPaper = styled(Paper)`
  padding: 15px;
  border-radius:10px;
  display: flex;
  flex-direction: column;
  height: 200px;
  
  
  margin-top: 10px;
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

export default AdminHomePage