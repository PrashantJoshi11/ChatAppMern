import React, { useState } from 'react';
import { ChatBar_Button } from '../../data';
import { faker } from '@faker-js/faker';
import EmojiPicker from 'emoji-picker-react';
import { useTheme } from '@emotion/react';
import Tooltip from '@mui/material/Tooltip';
import { toogleSideBar } from '../../Redux/Slice';
// import { Style } from '@mui/icons-material'
import { Avatar, Badge, Box, Divider, IconButton, InputAdornment, Stack, TextField, Typography, styled } from '@mui/material'
import { CaretDown, LinkSimple, PaperPlaneTilt, Smiley, Camera, File, Image,Sticker, User } from 'phosphor-react';
import Message from './Message';
import { useDispatch } from 'react-redux';
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));
const StyledInput=styled(TextField)(({theme})=>({
    "& .MuiInputBase-input":{
        paddingTop:"12px",
        paddingBottom:"12px"
    }
}))

function ChatInput({setOpenPicker ,setOpenLink}){
    return (
        <StyledInput fullWidth placeholder='  Write a Message...' variant='filled' InputProps={{
            disableUnderline:"true",
            startAdornment:<InputAdornment>
                <IconButton onClick={()=>setOpenLink((prev)=>!prev)}>
                    <LinkSimple ></LinkSimple>
                </IconButton>
            </InputAdornment>,
            endAdornment:<InputAdornment>
                <IconButton onClick={()=>setOpenPicker((prev)=>!prev)}>
                    <Smiley></Smiley>
                </IconButton>
            </InputAdornment>,
        }}>

        </StyledInput>
    )
}
const Action=[
    {
        color:"#4da5fe",
        icon:<Camera size={50} />,
        title:"Camera"
    }, 
    {
        color:"#1b8cfe",
        icon:<Image size={50} />,
        title:"Image"
    }, {
        color:"#0172e4",
        icon:<File size={50} />,
        title:"File"
    },  {
        color:"#0159b2",
        icon:<Sticker size={50} />,
        title:"Sticker"
    },  {
        color:"black",
        icon:<User size={50} />,
        title:"User"
    },  
]


function Header() {
    const theme=useTheme();
    const [openPicker,setOpenPicker]=useState(false);
    const [openLink,setOpenLink]=useState(false);
    const dispatch=useDispatch();
    console.log("🚀 ~ file: Header.js:68 ~ Header ~ openPicker:", openPicker)
  return (
    <>
    <Box sx={{height:100,width:"100%",backgroundColor:"F8FAFF",boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)"}} >
    <Stack alignItems={"center"} justifyContent={"space-between"} direction={"row"} sx={{height:"100%",width:"100%"}}>
        <Stack direction={"row"} alignItems={"center"}> 
        <Box p={3}>
        <Stack onClick={()=>{
           dispatch(toogleSideBar())}} direction="row"  alignItems="center" spacing={1}  >
            
                        <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar  alt="Remy Sharp" src={faker.image.avatar()} />
                    </StyledBadge>
                </Stack>
              
            
        </Box>
        <Stack >
                    <Typography variant='subtitle2'>{faker.name.fullName()}</Typography>
                    <Typography variant='caption' sx={{color:"green"}}>Online</Typography>

                </Stack>
        </Stack>
        <Stack spacing={3} sx={{alignItems:"center"}} direction={"row"}>
            {
            ChatBar_Button.map((val)=>
            <IconButton key={val.index}>{val.icon}</IconButton>
            )
            }
            <Divider orientation='vertical' flexItem />
            <IconButton>
            <CaretDown />
            </IconButton>
        </Stack>
        
    </Stack>
    </Box> 
    {/* Middle */}
    <Box sx={{width:"100%",flexGrow:"1",overflowY:"scroll"}}  >
            <Message />
    </Box>
    {/* Footer */}
    <Box p={3
    } sx={{width:"100%",backgroundColor:"F8FAFF",boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)"}} >
 
            <Stack spacing={2} direction={"row"} alignItems="center"  >
            
            <Stack sx={{width:"100%"}}>
                <Box sx={{zIndex:10,position:"fixed",bottom:81,right:100,display:openPicker?"inline" : "none"}} >
                    <EmojiPicker />
                </Box>
                <Box p={3} sx={{zIndex:10,position:"relative",bottom:10,left:10, width:300,borderRadius:"10px",backgroundColor:"#1E88E5",boxShadow:"0px 0px 10px rgba(0,0,0, 0.25)",display:openLink?"inline" : "none"}} >
                    <Stack  direction="row" justifyContent={"space-around"} flexWrap={"wrap"}> 
                    {
                        Action.map((val)=><Tooltip title={val.title}><IconButton  sx={{color:'black'}}>{val.icon}</IconButton></Tooltip>
                        )
                    }
                    </Stack>
                </Box>
                <ChatInput setOpenPicker={setOpenPicker} setOpenLink={setOpenLink}/>
            </Stack>
                <Box sx={{height:48,width:48,backgroundColor:theme.palette.primary.main,borderRadius:1.5}}>
                    <Stack height={"100%"} width={"100%"} alignItems={"center"} justifyContent={"center"}>
                    <IconButton>
                        <PaperPlaneTilt color='white'/>
                    </IconButton>
                    </Stack>

                </Box>
            

            </Stack>
    </Box>
    </>
  )
}

export default Header