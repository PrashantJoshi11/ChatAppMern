import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CircleDashed, Plus } from "phosphor-react";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";

import Badge from "@mui/material/Badge";
import { ChatList } from "../../data";
import GroupForm from "../animate/PopUpBox/CreateNewGroup";

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
function SideChatList() {
  const [open, setOpen] = useState(false);
  console.log("🚀 ~ file: SideChatList.jsx:51 ~ SideChatList ~ open:", open)
  
  const handleClose = () => {
    setOpen(false);
  };

  const ChatElement = ({ val }) => {
    return (
      <Box
        p={2}
        sx={{ width: "100%", height: "60px", backgroundColor: "#fff" }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Stack
            spacing={2.5}
            justifyContent="center"
            alignItems="center"
            direction="row"
          >
            <Stack direction="row" alignItems="center" spacing={1}>
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
              <Typography
                variant="caption"
                sx={{ overflow: "hidden", height: "20px", width: "100px" }}
              >
                {val.msg}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="caption" sx={{ fontWeight: 600 }}>
              {val.time}
            </Typography>
            <Badge badgeContent={val.unread} color="primary"></Badge>
          </Stack>
        </Stack>
      </Box>
    );
  };

  return (
    <>
    <Box
      sx={{
        position: "relative",
        width: 300,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack p={3} spacing={3} sx={{ height: "100vh" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">Groups</Typography>
          <IconButton>
            <CircleDashed></CircleDashed>
          </IconButton>
        </Stack>
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
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="subtitle1" component={Link} onClick={() => setOpen(true)}>
            Create new Group
          </Typography>
          <IconButton onClick={() => setOpen(true)}>
            <Plus style={{ color: "blue", fontSize: "20px" }} />
          </IconButton>
        </Stack>
        <Divider />
        <Stack
          direction="column"
          sx={{ flexGrow: "1", overflow: "scroll", height: "100%" }}
        >
          <Stack spacing={2}>
            <Typography variant="subtitle1" sx={{ color: "#676767" }}>
              Pinned
            </Typography>
            {ChatList.filter((elm) => elm.pinned).map((val) => {
              return <ChatElement val={val} />;
            })}

            <Typography variant="subtitle1" sx={{ color: "#676767" }}>
              All Chats
            </Typography>
            {ChatList.filter((elm) => !elm.pinned).map((val) => {
              return <ChatElement val={val} />;
            })}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  { open && <GroupForm open={open} handleClose={handleClose} />}

    </>
  );
}

export default SideChatList;
