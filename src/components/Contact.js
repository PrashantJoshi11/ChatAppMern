import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import React, { useState } from "react";
import {
  UpdateSideBar,
  UpdateSideBarfun,
  toogleSideBar,
  updateSideBar,
} from "../Redux/Slice";
import { useDispatch } from "react-redux";
import { faker } from "@faker-js/faker";
import AntSwitch from "./AntSwitch";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Contact() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [action, setAction] = useState("");

  const handleClickOpen = (type) => {
    setOpen(true);
    setAction(type);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
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
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton onClick={() => dispatch(toogleSideBar())}>
              <X></X>
            </IconButton>
          </Stack>
        </Box>
        <Stack
          sx={{ height: "100%", position: "relative", flexGrow: 1 }}
          p={2}
          spacing={2}
        >
          <Stack direction={"row"} alignContent={"center"} spacing={2}>
            <Avatar
              sx={{ height: 64, width: 64 }}
              src={faker.image.avatar()}
            ></Avatar>
            <Stack spacing={1}>
              <Typography variant="article">{faker.name.fullName()}</Typography>
              <Typography variant="article">{faker.phone.number()}</Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-around"}
            p={1}
          >
            <Stack>
              <IconButton sx={{ color: "green" }}>
                <Phone />
              </IconButton>
              <Typography>Voice</Typography>
            </Stack>
            <Stack>
              <IconButton sx={{ color: "green" }}>
                <VideoCamera />
              </IconButton>
              <Typography>Video</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={1}>
            <Typography variant="article">About</Typography>
            <Typography variant="body2">Hi there,I am using</Typography>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="subtitle2">Media,Link & Docs</Typography>
            <Button
              onClick={() => {
                dispatch(UpdateSideBarfun("SHARED"));
              }}
              endIcon={<CaretRight />}
            >
              401
            </Button>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            spacing={1}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {[1, 2, 3].map((elm) => (
              <Box>
                <img src={faker.image.food()} />
              </Box>
            ))}
          </Stack>
          <Divider />

          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <Star />
              <Typography variant="subtitle2">Starred Messages</Typography>
            </Stack>
            <IconButton>
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <Bell color="blue" />
              <Typography variant="subtitle2">Mute Notifications</Typography>
            </Stack>
            <IconButton>
              <AntSwitch />
            </IconButton>
          </Stack>
          <Divider />
          <Typography variant="subtitle2">1 group in Common</Typography>
          <Stack direction={"row"} alignContent={"center"} spacing={2}>
            <Avatar
              sx={{ height: 64, width: 64 }}
              src={faker.image.avatar()}
            ></Avatar>
            <Stack spacing={1}>
              <Typography variant="article">Coding Gang</Typography>
              <Typography variant="caption">AA,BB,CC,you</Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Button
              onClick={() => {
                handleClickOpen("Block");
              }}
              startIcon={<Prohibit />}
              variant="outlined"
              fullWidth
            >
              Block
            </Button>
            <Button
              onClick={() => {
                handleClickOpen("Delete");
              }}
              startIcon={<Trash />}
              variant="outlined"
              fullWidth
            >
              Delete
            </Button>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{`${action} Contact`}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  {`Are you sure want to ${action} this Contact ?`}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>NO</Button>
                <Button onClick={handleClose}>YES</Button>
              </DialogActions>
            </Dialog>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Contact;
