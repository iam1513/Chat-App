import React, { useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import { grayColor, orange } from "../constants/color";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/Styles/StyledComponent";
import FileMenu from "../components/dialogs/FileMenu";
import { SampleMessage } from "../constants/SampleData";
import MessageComponent from "../components/shared/MessageComponent";

const user = {
  _id: "sfvberufno",
  name: "OM",
};

const Chat = () => {
  const containerRef = useRef(null);

  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={grayColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {SampleMessage.map((i) => (
          <MessageComponent message={i} user={user} key={i._id} />
        ))}
      </Stack>

      <form
        style={{
          height: "10%",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              rotate: "30deg",
              left: "1.5rem",
              position: "absolute",
            }}
          >
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder="Message" />

          <IconButton
            type="submit"
            sx={{
              rotate: "-30deg",
              backgroundColor: orange,
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: "error.dark",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>

      <FileMenu />
    </>
  );
};

export default AppLayout()(Chat);
