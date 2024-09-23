// import React, { useState } from 'react';
// import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteUser, updateUser } from '../../redux/userRelated/userHandle';
// import { useNavigate } from 'react-router-dom'
// import { authLogout } from '../../redux/userRelated/userSlice';
// import { Button, Collapse } from '@mui/material';

import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';

const AdminProfile = () => {
    // const [showTab, setShowTab] = useState(false);
    // const buttonText = showTab ? 'Cancel' : 'Edit profile';

    // const navigate = useNavigate()
    // const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    // const { currentUser, response, error } = useSelector((state) => state.user);
    // const address = "Admin"

    // if (response) { console.log(response) }
    // else if (error) { console.log(error) }

    // const [name, setName] = useState(currentUser.name);
    // const [email, setEmail] = useState(currentUser.email);
    // const [password, setPassword] = useState("");
    // const [schoolName, setSchoolName] = useState(currentUser.schoolName);

    // const fields = password === "" ? { name, email, schoolName } : { name, email, password, schoolName }

    // const submitHandler = (event) => {
    //     event.preventDefault()
    //     dispatch(updateUser(fields, currentUser._id, address))
    // }

    // const deleteHandler = () => {
    //     try {
    //         dispatch(deleteUser(currentUser._id, "Students"));
    //         dispatch(deleteUser(currentUser._id, address));
    //         dispatch(authLogout());
    //         navigate('/');
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    return (
        <div>


            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
                <div style={{ padding: '20px', borderRadius: '12px', backgroundColor: '#ffffff', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', maxWidth: '350px', textAlign: 'center' }}>
                    <Avatar sx={{ width: 56, height: 56, margin: '0 auto', marginBottom: '20px', backgroundColor: '#007BFF', fontSize: '24px' }}>
                        {String(currentUser.name).charAt(0)}
                    </Avatar>
                    <div style={{ fontSize: '18px', marginBottom: '10px', color: '#333' }}>
                        <strong>Name:</strong> {currentUser.name}
                    </div>
                    <div style={{ fontSize: '16px', marginBottom: '10px', color: '#555' }}>
                        <strong>Email:</strong> {currentUser.email}
                    </div>
                    <div style={{ fontSize: '16px', marginBottom: '10px', color: '#555' }}>
                        <strong>College:</strong> {currentUser.schoolName}
                    </div>
                </div>
            </div>


            {/* <Button variant="contained" color="error" onClick={deleteHandler}>Delete</Button> 
             <Button variant="contained" sx={styles.showButton}
                onClick={() => setShowTab(!showTab)}>
                {showTab ? <KeyboardArrowUp /> : <KeyboardArrowDown />}{buttonText}
            </Button>
            <Collapse in={showTab} timeout="auto" unmountOnExit>
                <div className="register">
                    <form className="registerForm" onSubmit={submitHandler}>
                        <span className="registerTitle">Edit Details</span>
                        <label>Name</label>
                        <input className="registerInput" type="text" placeholder="Enter your name..."
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            autoComplete="name" required />

                        <label>School</label>
                        <input className="registerInput" type="text" placeholder="Enter your school name..."
                            value={schoolName}
                            onChange={(event) => setSchoolName(event.target.value)}
                            autoComplete="name" required />

                        <label>Email</label>
                        <input className="registerInput" type="email" placeholder="Enter your email..."
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            autoComplete="email" required />

                        <label>Password</label>
                        <input className="registerInput" type="password" placeholder="Enter your password..."
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            autoComplete="new-password" />

                        <button className="registerButton" type="submit" >Update</button>
                    </form>
                </div>
            </Collapse> */}
        </div>
    )
}

export default AdminProfile

// const styles = {
//     attendanceButton: {
//         backgroundColor: "#270843",
//         "&:hover": {
//             backgroundColor: "#3f1068",
//         }
//     }
// }