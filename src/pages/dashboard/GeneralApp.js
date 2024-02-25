import React from "react";
import Chat from "./Chat";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMedia from "../../components/settings/drawer/SharedMedia";
import StarredMsg from "../../components/settings/drawer/StarredMsg";

const GeneralApp = () => {
const {open,type}=useSelector((state)=>state.side.sideBar);

const data=useSelector((state)=>state.side);


  return (
    <>
    <Stack direction="row" sx={{width:"100%"}}>
      <Chat />

       <Box sx={{height:"100%",width:open?"calc(100vw - 740px)":"calc(100vw - 420px)"}}>
            <Conversation />
       </Box>
       {
        open && (()=>{
          switch(type){

            case "CONTACT":
              return <Contact />;
      
                case "SHARED":
                return <SharedMedia />;
              
                  case "STARED":
                    return <StarredMsg />;
                  break;
                  default:
                    break;
              
          }
        })()
       }
      
    </Stack>
    </>
  );
};

export default GeneralApp;
