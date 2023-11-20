import React, { useState } from "react";
import { Avatar, Box, Divider, IconButton } from "@mui/material";
import { useTheme,styled} from "@mui/material/styles";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import Switch from '@mui/material/Switch';
import { Stack } from "@mui/material";
import { faker } from '@faker-js/faker';
import { ChatList } from "../../data";
import logo from "../../assets/Images/logo.ico"
import { ProfileOption } from "../../components/Conversation/MsgType";

function SideBar() {
    const theme = useTheme();
    const [selected, setSelected] = useState(0);
  return (
    <Box p={2} sx={{backgroundColor: theme.palette.background.paper, height: "100vh", width: 100, boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)" }}>

        <Stack spacing={3} justifyContent="space-between" direction="column"  alignItems="center" sx={{ width: "100%", height:"100%" }}>

          <Stack alignItems="center" spacing={4}>
          <Box sx={{ backgroundColor: theme.palette.primary.main, height: 64, width: 64, borderRadius: 1.5 }}>
            <img src={logo} alt="Logo"></img>
          </Box>
          <Stack spacing={3} alignItems="center">
            {

              Nav_Buttons.map(val => (
                <Box p={1} sx={{ backgroundColor: val.index === selected ? theme.palette.primary.main : "white", borderRadius: 1.5 }}>
                  <IconButton key={val.index} sx={{ color: val.index === selected ? "white" : "black" }} onClick={() => setSelected(val.index)}>{val.icon}</IconButton>
                </Box>
              ))
            }
          </Stack>
          <Divider></Divider>
          <Box p={1} sx={{ backgroundColor: selected === 3 ? theme.palette.primary.main : "white", borderRadius: 1.5 }}  >
            <IconButton onClick={() => setSelected(3)} sx={{ color: selected === 3 ? "white" : "black" }} >
              <Gear></Gear>
            </IconButton>
          </Box>
          </Stack>

          <Stack spacing={3} sx={{alignItems:"center"}}>
         {/* <AntSwitch onClick={()=>document.body.style.background="black"}></AntSwitch> */}
            <ProfileOption />
          </Stack>
        </Stack>
      </Box>
  )
}

export default SideBar