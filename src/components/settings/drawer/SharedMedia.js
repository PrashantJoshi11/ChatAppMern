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
function SharedMedia() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
              <Typography variant="subtitle2">SharedMedia</Typography>
              <IconButton onClick={() => dispatch(UpdateSideBarfun("CONTACT"))}>
                <ReplyIcon />
              </IconButton>
            </Stack>
          </Box>
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs  value={value} onChange={handleChange} centered >
            <Tab label="Media" />
            <Tab label="Doc" />
            <Tab label="Link" />
          </Tabs>
        </Box>
        <Stack
          sx={{ height: "100%", position: "relative", flexGrow: 1 }}
          p={2}
          spacing={2}
        >
          {(()=>
          {
            switch (value) {
              case 0:             
              return(
                <Grid container spacing={2}>
                {
                    [1,2,3,4,5,6,7].map((val)=>(
                        <Grid item lg={4} sm={6} xs={9}>
                          <img src={faker.image.avatar()} />
                          </Grid>
      
                    ))
                  }
                </Grid>
              )
              case 1:
                return(
                  <Grid container spacing={2}>
                  {
                    sharedDoc.map((val)=>{
                      return(
                      <Grid item lg={4} sm={6} xs={9}>
                         <DocMsg val={val} />
                      </Grid>
                        )
                    })
              
                    }
                  </Grid>
                )
                case 2:
                  return(
                    <Grid container spacing={2}>
                    {
                    sharedLink.map((val)=>{
                        return(
                        <Grid item lg={4} sm={6} xs={9}>
                          <Linkmsg val={val} />
                        </Grid>
                          )
                      })
                
                      }
                    </Grid>
                  )
                  
                
            
              default:
                break;
            }
          }
          
          )()}
       
          
        </Stack>



        </Stack>   
      </Box>
    </>
  );
}

export default SharedMedia;
