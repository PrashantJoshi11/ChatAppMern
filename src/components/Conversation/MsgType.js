import { useTheme } from '@emotion/react'
// import { Download } from '@mui/icons-material';
import { Box, Button, Divider, IconButton, Link, Stack, Typography,Avatar } from '@mui/material'
import { DotsThreeVertical, DownloadSimple, Image } from 'phosphor-react';
import { faker } from '@faker-js/faker';
import React from 'react'
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import { Message_options } from '../../data';
import { useNavigate } from 'react-router-dom';

function TimeLine({val}) {
    const theme=useTheme();

  return (
    <Stack  direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Divider width={"46%"} ></Divider>
        <Typography variant='caption' sx={{color:theme.palette.text}}>{val.text}</Typography>
        <Divider width={"46%"} ></Divider>

    </Stack>
  )
}

function Textmsg({val}) {
    const theme=useTheme();
    // console.log("🚀 ~ file: MsgType.js:5 ~ TimeLine ~ val:", val.message)
    return (
       <Stack direction={"row"} justifyContent={val.incoming ? "start" : "end"}>
        <Box p={1.5} sx={{ backgroundColor : val.incoming ? "lightblue" : theme.palette.primary.main, borderRadius:1.5}} width={"max-content"}>
            <Typography variant='body2' sx={{color:val.incoming?"black":"white"}}>
                {val.message}
            </Typography>
        </Box>
        <MenuOption />
       </Stack>
    )
  }
  function Mediamsg({val}) {
    const theme=useTheme();
    
    return (
       <Stack direction={"row"} justifyContent={val.incoming ? "start" : "end"}>
        <Box p={1} sx={{ backgroundColor : val.incoming ? "lightblue" : theme.palette.primary.main, borderRadius:1.5}} width={"max-content"}>
            <Stack spacing={1} alignItems={"center"}>
                <img src={val.img} alt={val.message} style={{maxHeight:200,borderRadius:"10px"}} />
            <Typography variant='body2'  sx={{color:val.incoming?"black":"white"}}>
                {val.message}
            </Typography>
            </Stack>
        </Box>
       </Stack>
    )
  }
  function Linkmsg({val}) {
    const theme=useTheme();
    // console.log("🚀 ~ file: MsgType.js:5 ~ TimeLine ~ val:", val.img)
    return (
       <Stack direction={"row"} justifyContent={val.incoming ? "start" : "end"}>
        <Box p={1} sx={{ backgroundColor : val.incoming ? "lightblue" : theme.palette.primary.main, borderRadius:1.5}} width={"max-content"}>
            <Stack spacing={2}>
                <Stack >
                    <img src={val.preview} alt={val.message} style={{maxHeight:150,borderRadius:"10px"}}></img>
                </Stack>
                <Stack spacing={2} textAlign={"center"}>
                    <Typography variant='subtitle2'>Create Chat App</Typography>
                    <Typography variant='subtitle2' component={Link} to="https://www.youtube.com/" >www.youtube.com</Typography>

                </Stack>
                <Typography variant='body2'>{val.message}</Typography>

            </Stack>
        </Box>
       </Stack>
    )
  }
  function DocMsg({val}) {
    // console.log("🚀 ~ file: MsgType.js:71 ~ DocMsg ~ val:", val)
    const theme=useTheme();

  return (
    <Stack direction={"row"} justifyContent={val.incoming ? "start" : "end"}>
        <Box p={1} sx={{ backgroundColor : val.incoming ? "lightblue" : theme.palette.primary.main, borderRadius:1.5}} width={"max-content"}>
            <Stack spacing={2}>
                <Stack p={2} direction={"row"} spacing={3} alignItems={"center"} sx={{backgroundColor:theme.palette.background.paper,borderRadius:1}} >
                    <Image size={48}></Image>
                    <Typography variant='caption'>Abstract.png</Typography>
                    <IconButton><DownloadSimple/></IconButton>
                </Stack>
               <Typography variant='body2' sx={{color:val.incoming ? theme.palette.text:"#fff"}}>{val.message}</Typography>

            </Stack>
        </Box>
       </Stack>
  )
}
function MenuOption(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return(
        <>
        
         <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <DotsThreeVertical size={24}></DotsThreeVertical>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
            Message_options.map((val)=>(
              <MenuItem onClick={handleClose}>{val.title}</MenuItem>
            )
            )
        }
   
      </Menu>
        </>
    )
}
function ProfileOption(){
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  const Navigate=useNavigate();
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  
    return(
        <>
         <Stack direction="row" spacing={2}>
    
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
         <Avatar  sx={{height:"50px",width:"50px"}} src={faker.image.avatar()} />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={()=>{Navigate("/profile");handleClose()}}>Profile</MenuItem>
                    <MenuItem onClick={()=>{Navigate("/setting");handleClose()}}>My account</MenuItem>
                    <MenuItem onClick={()=>{Navigate("/auth/login");handleClose()}}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        
      </div>
      </Stack>
    
        </>
    )
}


export {TimeLine,Textmsg,Mediamsg,Linkmsg,DocMsg,MenuOption,ProfileOption}