import React from "react";
import Chat from "./Chat";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";

const GeneralApp = () => {
const {open}=useSelector((state)=>state.side.sideBar);
console.log("🚀 ~ file: GeneralApp.js:10 ~ GeneralApp ~ data:", open)

  return (
    <>
    <Stack direction="row" sx={{width:"100%"}}>
      <Chat />

       <Box sx={{height:"100%",width:open?"calc(100vw - 740px)":"calc(100vw - 420px)"}}>
            <Conversation />
       </Box>
       {
        open? <Contact /> : null
       }
      
    </Stack>
    </>
  );
};

export default GeneralApp;
