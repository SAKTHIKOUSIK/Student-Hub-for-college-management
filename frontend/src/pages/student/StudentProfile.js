import React from 'react'
import styled from 'styled-components';
import { Card, CardContent, Typography, Grid, Box, Avatar, Container, Paper } from '@mui/material';
import { useSelector } from 'react-redux';

const StudentProfile = () => {
  const { currentUser, response, error } = useSelector((state) => state.user);

  if (response) { console.log(response) }
  else if (error) { console.log(error) }

  const sclassName = currentUser.sclassName
  const studentSchool = currentUser.school

  return (
    <>
      

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
        <div style={{ padding: '20px', borderRadius: '12px', backgroundColor: '#ffffff', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', maxWidth: '350px', textAlign: 'center' }}>
          <Avatar sx={{ width: 56, height: 56, margin: '0 auto', marginBottom: '20px', backgroundColor: '#007BFF', fontSize: '24px' }}>
            {String(currentUser.name).charAt(0)}
          </Avatar>
          <div style={{ fontSize: '18px', marginBottom: '10px', color: '#333' }}>
            <strong>Name:</strong> {currentUser.name}
          </div>
          <div style={{ fontSize: '16px', marginBottom: '10px', color: '#555' }}>
            <strong>Roll no:</strong> {currentUser.rollNum}
          </div>
          <div style={{ fontSize: '16px', marginBottom: '10px', color: '#555' }}>
            <strong>Class:</strong> {sclassName.sclassName}
          </div>
          <div style={{ fontSize: '16px', marginBottom: '10px', color: '#555' }}>
            <strong>School:</strong> {studentSchool.schoolName}
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentProfile

const StyledPaper = styled(Paper)`
  padding: 20px;
  margin-bottom: 20px;
`;