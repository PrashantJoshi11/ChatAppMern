import {
    Button,
  } from "@mui/material";

  import React from "react";

  import Dialog from "@mui/material/Dialog";
  import DialogActions from "@mui/material/DialogActions";
  import DialogContent from "@mui/material/DialogContent";
  import DialogContentText from "@mui/material/DialogContentText";
  import DialogTitle from "@mui/material/DialogTitle";
  import Slide from "@mui/material/Slide";
import Grpform from "../../GroupChat/GroupForm";
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  
  function GroupForm({open,handleClose}) {
  console.log("🚀 ~ file: CreateNewGroup.jsx:22 ~ GroupForm ~ open:", open)
 
    return (
      <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Create New Group"}</DialogTitle>
      <DialogContent sx={{marginTop:"20px"}}>
        <DialogContentText id="alert-dialog-slide-description">
         <Grpform />
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{display:"flex",justifyContent:"center"}}>
        <Button onClick={handleClose}>Cancel</Button>
      
      </DialogActions>
    </Dialog>
    );
  }
  
  export default GroupForm;
  