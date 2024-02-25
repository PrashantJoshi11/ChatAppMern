import React from "react";
import ReplyIcon from "@mui/icons-material/Reply";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { UpdateSideBarfun } from "../../../Redux/Slice";
import { faker } from "@faker-js/faker";
import { sharedDoc, sharedLink } from "../../../data";
import { DocMsg, Linkmsg } from "../../Conversation/MsgType";
function StarredMsg() {
  const dispatch = useDispatch();

  return (
    <>
      <Box sx={{ width: "320px", height: "100vh" }}>
        <Stack sx={{ height: "100%" }}>
          <Box
            p={3}
            sx={{ width: "100%", boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)" }}
          >
            <Stack
              direction={"row"}
              sx={{
                height: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="subtitle2">StarredMsg</Typography>
              <IconButton onClick={() => dispatch(UpdateSideBarfun("CONTACT"))}>
                <ReplyIcon />
              </IconButton>
            </Stack>
          </Box>
        
        <Stack
          sx={{ height: "100%", position: "relative", flexGrow: 1 }}
          p={2}
          spacing={2}
        >
      
       
          
        </Stack>



        </Stack>   
      </Box>
    </>
  );
}

export default StarredMsg;
