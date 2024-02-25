import { GitHub, Twitter } from '@mui/icons-material'
import { Box, Divider, IconButton, Stack } from '@mui/material'
import { GoogleLogo } from 'phosphor-react'
import React from 'react'

function SocialLogo() {
  return (
    <Box>
        <Divider>
            OR
        </Divider>
        <Stack spacing={3} direction={"row"} justifyContent={"center"} alignItems={"center"}>
           <IconButton><GoogleLogo size={30}/></IconButton> 
           <IconButton> <GitHub size={30} /></IconButton> 
           <IconButton><Twitter size={30} /></IconButton>  
        </Stack>
    </Box>
  )
}

export default SocialLogo