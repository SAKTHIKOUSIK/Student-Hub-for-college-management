// import * as React from 'react';
// import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
// import { Link, useLocation } from 'react-router-dom';

// import HomeIcon from '@mui/icons-material/Home';
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
// import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
// import AssignmentIcon from '@mui/icons-material/Assignment';

// const StudentSideBar = () => {
//     const location = useLocation();
//     const sidebarStyle = {
//         backgroundColor: '#000001',
//         color: '#fff',
//         height: '88vh',
//         borderRadius: '10px',
//     };
//     return (
//         <>
//             <div style={sidebarStyle}>
//                 <React.Fragment>
//                     <ListItemButton component={Link} to="/">
//                         <ListItemIcon>
//                             {/* <HomeIcon color={location.pathname === ("/" || "/Student/dashboard") ? 'primary' : 'inherit'} /> */}
//                             <ListItemIcon sx={{ color: location.pathname === "/" || location.pathname === "/Student/dashboard" ? 'primary.main' : '#fff' }}>
//                                 <HomeIcon />
//                             </ListItemIcon>
//                         </ListItemIcon>
//                         <ListItemText primary="Home" />
//                     </ListItemButton>
//                     <ListItemButton component={Link} to="/Student/subjects">
//                         <ListItemIcon>
//                             {/* <AssignmentIcon color={location.pathname.startsWith("/Student/subjects") ? 'primary' : 'inherit'} /> */}
//                             <ListItemIcon sx={{ color: location.pathname.startsWith('/Student/subjects') ? 'primary.main' : '#fff' }}>
//                                 <AssignmentIcon />
//                             </ListItemIcon>
//                         </ListItemIcon>
//                         <ListItemText primary="Subjects" />
//                     </ListItemButton>
//                     <ListItemButton component={Link} to="/Student/attendance">
//                         <ListItemIcon>
//                             {/* <ClassOutlinedIcon color={location.pathname.startsWith("/Student/attendance") ? 'primary' : 'inherit'} /> */}
//                             <ListItemIcon sx={{ color: location.pathname.startsWith('/Student/attendance') ? 'primary.main' : '#fff' }}>
//                                 <ClassOutlinedIcon />
//                             </ListItemIcon>
//                         </ListItemIcon>
//                         <ListItemText primary="Attendance" />
//                     </ListItemButton>
//                     <ListItemButton component={Link} to="/Student/study">
//                         <ListItemIcon>
//                             {/* <ClassOutlinedIcon color={location.pathname.startsWith("/Student/study") ? 'primary' : 'inherit'} /> */}
//                             <ListItemIcon sx={{ color: location.pathname.startsWith('/Student/study') ? 'primary.main' : '#fff' }}>
//                                 <ClassOutlinedIcon />
//                             </ListItemIcon>
//                         </ListItemIcon>
//                         <ListItemText primary="Study" />
//                     </ListItemButton>
//                     <ListItemButton component={Link} to="/Student/complain">
//                         <ListItemIcon>
//                             {/* <AnnouncementOutlinedIcon color={location.pathname.startsWith("/Student/complain") ? 'primary' : 'inherit'} /> */}
//                             <ListItemIcon sx={{ color: location.pathname.startsWith('/Student/complain') ? 'primary.main' : '#fff' }}>
//                                 <AnnouncementOutlinedIcon />
//                             </ListItemIcon>
//                         </ListItemIcon>
//                         <ListItemText primary="Complain" />
//                     </ListItemButton>
//                 </React.Fragment>
//                 <Divider sx={{ my: 1 }} />
//                 <React.Fragment>

//                     <ListItemButton component={Link} to="/Student/profile">
//                         <ListItemIcon>
//                             {/* <AccountCircleOutlinedIcon color={location.pathname.startsWith("/Student/profile") ? 'primary' : 'inherit'} /> */}
//                             <ListItemIcon sx={{ color: location.pathname.startsWith('/Students/profile') ? 'primary.main' : '#fff' }}>
//                                 <AccountCircleOutlinedIcon />
//                             </ListItemIcon>
//                         </ListItemIcon>
//                         <ListItemText primary="Profile" />
//                     </ListItemButton>
//                     <ListItemButton component={Link} to="/logout">
//                         <ListItemIcon>
//                             {/* <ExitToAppIcon color={location.pathname.startsWith("/logout") ? 'primary' : 'inherit'} /> */}
//                             <ListItemIcon sx={{ color: location.pathname.startsWith('/logout') ? 'primary.main' : '#fff' }}>
//                                 <ExitToAppIcon />
//                             </ListItemIcon>
//                         </ListItemIcon>
//                         <ListItemText primary="Logout" />
//                     </ListItemButton>
//                     <ListItemButton component={Link} to="/Student/taskmanager">
//                         <ListItemIcon>
//                             {/* <ExitToAppIcon color={location.pathname.startsWith("/logout") ? 'primary' : 'inherit'} /> */}
//                             <ListItemIcon sx={{ color: location.pathname.startsWith('/logout') ? 'primary.main' : '#fff' }}>
//                                 <ExitToAppIcon />
//                             </ListItemIcon>
//                         </ListItemIcon>
//                         <ListItemText primary="Task Manager" />
//                     </ListItemButton>
//                     <ListItemButton component={Link} to="/Student/taskmanager">
//                         <ListItemIcon>
//                             {/* <ExitToAppIcon color={location.pathname.startsWith("/logout") ? 'primary' : 'inherit'} /> */}
//                             <ListItemIcon sx={{ color: location.pathname.startsWith('/logout') ? 'primary.main' : '#fff' }}>
//                                 <ExitToAppIcon />
//                             </ListItemIcon>
//                         </ListItemIcon>
//                         <ListItemText primary="Placement Materials" />
//                     </ListItemButton>
//                 </React.Fragment>
//             </div>
//         </>
//     )
// }

// export default StudentSideBars




import * as React from 'react';
import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';

const StudentSideBar = () => {
    const location = useLocation();
    const sidebarStyle = {
        backgroundColor: '#000001',
        color: '#fff',
        height: '88vh',
        borderRadius: '10px',
    };
    return (
        <>
            <div style={sidebarStyle}>
                <React.Fragment>
                    <ListItemButton component={Link} to="/">
                        <ListItemIcon>
                            {/* <HomeIcon color={location.pathname === ("/" || "/Student/dashboard") ? 'primary' : 'inherit'} /> */}
                            <ListItemIcon sx={{ color: location.pathname === "/" || location.pathname === "/Student/dashboard" ? 'primary.main' : '#fff' }}>
                                <HomeIcon />
                            </ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/Student/subjects">
                        <ListItemIcon>
                            {/* <AssignmentIcon color={location.pathname.startsWith("/Student/subjects") ? 'primary' : 'inherit'} /> */}
                            <ListItemIcon sx={{ color: location.pathname.startsWith('/Student/subjects') ? 'primary.main' : '#fff' }}>
                                <AssignmentIcon />
                            </ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Subjects" />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/Student/attendance">
                        <ListItemIcon>
                            {/* <ClassOutlinedIcon color={location.pathname.startsWith("/Student/attendance") ? 'primary' : 'inherit'} /> */}
                            <ListItemIcon sx={{ color: location.pathname.startsWith('/Student/attendance') ? 'primary.main' : '#fff' }}>
                                <ClassOutlinedIcon />
                            </ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Attendance" />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/Student/complain">
                        <ListItemIcon>
                            {/* <AnnouncementOutlinedIcon color={location.pathname.startsWith("/Student/complain") ? 'primary' : 'inherit'} /> */}
                            <ListItemIcon sx={{ color: location.pathname.startsWith('/Student/complain') ? 'primary.main' : '#fff' }}>
                                <AnnouncementOutlinedIcon />
                            </ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Complain" />
                    </ListItemButton>
                    {/* <ListItemButton component={Link} to="/Student/study">
                        <ListItemIcon>
                            <ListItemIcon sx={{ color: location.pathname.startsWith('/Student/study') ? 'primary.main' : '#fff' }}>
                                <ClassOutlinedIcon />
                            </ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Study" />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/Student/taskmanager">
                        <ListItemIcon>
                            <ListItemIcon sx={{ color: location.pathname.startsWith('/logout') ? 'primary.main' : '#fff' }}>
                                <ExitToAppIcon />
                            </ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Task Manager" />
                    </ListItemButton> */}
                </React.Fragment>
                <Divider sx={{ my: 1 }} />
                <React.Fragment>

                    <ListItemButton component={Link} to="/Student/profile">
                        <ListItemIcon>
                            {/* <AccountCircleOutlinedIcon color={location.pathname.startsWith("/Student/profile") ? 'primary' : 'inherit'} /> */}
                            <ListItemIcon sx={{ color: location.pathname.startsWith('/Students/profile') ? 'primary.main' : '#fff' }}>
                                <AccountCircleOutlinedIcon />
                            </ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/logout">
                        <ListItemIcon>
                            {/* <ExitToAppIcon color={location.pathname.startsWith("/logout") ? 'primary' : 'inherit'} /> */}
                            <ListItemIcon sx={{ color: location.pathname.startsWith('/logout') ? 'primary.main' : '#fff' }}>
                                <ExitToAppIcon />
                            </ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                    
                </React.Fragment>
            </div>
        </>
    )
}

export default StudentSideBar