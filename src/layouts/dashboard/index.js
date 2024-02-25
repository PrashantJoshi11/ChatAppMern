import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import SideBar from "./SideBar";



const DashboardLayout = () => {
  var isAuthenticated=true;
  if(!isAuthenticated){
   return <Navigate to="/auth/login" />
  }
  return (
    <>
    <Stack direction="row">
     <SideBar />
      <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
