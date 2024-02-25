import { useTheme } from "@emotion/react";
import { Avatar, Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import { faker } from "@faker-js/faker";
import { SettingList } from "../../data";

function Setting() {
  const theme = useTheme();
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        <Box
          sx={{
            height: "100vh",
            width: 320,
            overflowY: "scroll",
            backgroundColor: "#F8FAFF",
            boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)",
          }}
        >
          <Stack p={4} spacing={5}>
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
              <IconButton>
                <CaretLeft size={24} />
              </IconButton>
              <Typography variant="h6">Setting</Typography>
            </Stack>
            <Stack direction={"row"} spacing={3}>
              <Avatar
                sx={{ height: 56, width: 56 }}
                src={faker.image.avatar()}
              />
              <Stack spacing={0.3}>
                <Typography variant="article">
                  {faker.name.fullName()}
                </Typography>
                <Typography variant="body2">{faker.random.word()}</Typography>
              </Stack>
            </Stack>
            <Stack spacing={4}>
              {SettingList.map((val) => {
                return (
                  <Stack
                    spacing={2}
                    sx={{ cursor: "pointer" }}
                    onClick={val.onclick}
                  >
                    <Stack key={val.key} direction={"row"} spacing={1} alignItems={"center"}>
                    <IconButton> {val.icon}</IconButton>
                   <Typography variant="body2">{val.title}</Typography>
                  </Stack>
                  {
                    val.key !==7 && <Divider />

                  }
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

export default Setting;
