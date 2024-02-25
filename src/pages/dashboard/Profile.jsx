import { Box, IconButton, Stack, Typography } from '@mui/material'
import { CaretLeft } from 'phosphor-react'
import React from 'react'
import ProfileForm from './ProfileForm'

function Profile() {
  return (
    <Box
    sx={{
      position: "relative",
      width: 300,
      boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
    }}
  >
    <Stack  spacing={4} sx={{ height: "100vh" }} >
    <Stack p={4} spacing={5} >
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} >
        <IconButton>
                <CaretLeft size={24} color='#4B4B4B'/>
        </IconButton>
        <Typography variant='h5'>
            Profile
        </Typography>
        </Stack>
    </Stack>
    <ProfileForm />
    </Stack>
  </Box>
  
  )
}

export default Profile