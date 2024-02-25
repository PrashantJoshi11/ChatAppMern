import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Container, CssBaseline } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const MainLayout = () => {
  var isAuthenticated=false;
  if(isAuthenticated){
   return <Navigate to="/" />
  }
  return (
    <>
    
       <Container component="main" maxWidth="xs"  >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor:"red"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'lightblue', height:"80px",width:"80px"}}>
            <LockOutlinedIcon sx={{  height:"40px",width:"40px"}} />
          </Avatar>
          </Box>

      <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
