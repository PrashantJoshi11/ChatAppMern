import { Box, IconButton, Stack, Typography } from '@mui/material'
import { X } from 'phosphor-react'
import React from 'react'
import { toogleSideBar } from '../Redux/Slice'
import { useDispatch } from 'react-redux'

function Contact() {
  const dispatch=useDispatch()
  return (
    <Box sx={{width:"320px",height:"100vh"}}>
      <Stack sx={{height:"100%"}} >
          <Box  p={3} sx={{width:"100%",boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)"}}>
              <Stack direction={"row"} sx={{height:"100%",justifyContent:"space-between",alignItems:"center"}}>
                <Typography variant='subtitle2'>
                  Contact Info 
                </Typography>
                <IconButton onClick={()=>dispatch(toogleSideBar())}>
                  <X></X>
                </IconButton>
              </Stack>
          </Box>
      </Stack>
    </Box>
  )
}

export default Contact