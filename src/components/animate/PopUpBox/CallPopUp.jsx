import {
    Avatar,
    Box,
    Button,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  import React from "react";
  import { styled } from "@mui/material/styles";
  import Badge from "@mui/material/Badge";
  import Dialog from "@mui/material/Dialog";
  import DialogActions from "@mui/material/DialogActions";
  import DialogContent from "@mui/material/DialogContent";
  import DialogContentText from "@mui/material/DialogContentText";
  import DialogTitle from "@mui/material/DialogTitle";
  import Slide from "@mui/material/Slide";
import Grpform from "../../GroupChat/GroupForm";
import { Phone, VideoCamera } from "phosphor-react";
import { callHistory } from "../../../data";
import { VideoCall } from "@mui/icons-material";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  
  function CreateNewConverstaion({open,handleClose}) {
    const CalllogElement = ({ val }) => {
        return (
          <Box
            p={2}
            sx={{ width: "100%", height: "60px", backgroundColor: "#fff" }}
          >
            <Stack direction="row" justifyContent="space-between"  >
              <Stack
                spacing={2.5}
                justifyContent="center"
                alignItems="center"
                direction="row"
              
              >
                <Stack direction="row" alignItems="center" spacing={1} >
                  {val.online ? (
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      variant="dot"
                    >
                      <Avatar alt="Remy Sharp" src={val.img} />
                    </StyledBadge>
                  ) : (
                    <Avatar alt="Remy Sharp" src={val.img} />
                  )}
                </Stack>
                
    
                <Stack direction="column" spacing={0.5} sx={{ overflow: "hidden" }}>
                  <Typography variant="subtitle2">{val.name}</Typography>
                
                </Stack>
              </Stack>
              <Stack
                justifyContent="center"
                alignItems="center"
              >
                  <IconButton>
                    <Phone color="green"/>
                  </IconButton>

              </Stack>
              <Stack
                justifyContent="center"
                alignItems="center"
              >
                  <IconButton>
                    <VideoCamera color="green"/>
                  </IconButton>
                  
              </Stack>
            </Stack>
          </Box> 
        );
      };
    
    return (
      <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"New Conversation"}</DialogTitle>
      <DialogContent sx={{marginTop:"20px"}}>
        
      <Stack sx={{ width: "100%" }}>
          <TextField
            id="Search"
            placeholder="Search"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <DialogContentText id="alert-dialog-slide-description">
        {callHistory.filter((elm) => !elm.pinned).map((val) => {
              return <CalllogElement val={val} />;
            })}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{display:"flex",justifyContent:"center"}}>
        <Button onClick={handleClose}>Cancel</Button>
      
      </DialogActions>
    </Dialog>
    );
  }
  
  export default CreateNewConverstaion;
  