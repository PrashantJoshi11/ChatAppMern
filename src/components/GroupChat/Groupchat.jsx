import { Stack } from '@mui/material'
import React from "react";
import SideChatList from './SideChatList'

function Groupchat() {
 
  return (
    <>
    <Stack direction={"row"} sx={{width:"100%"}}>
    <SideChatList />
    </Stack>
    </>
  )
}

export default Groupchat