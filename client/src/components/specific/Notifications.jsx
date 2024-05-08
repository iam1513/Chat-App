import {
  Dialog,
  DialogTitle,
  Stack,
  Typography,
  Avatar,
  IconButton,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import React, { memo } from "react";
import { sampleNotifications } from "../../constants/SampleData";
const Notifications = () => {
  const friendRequestHandler = ({ _id, accept }) => {};

  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>

        {sampleNotifications.length > 0 ? (
          sampleNotifications.map((i) => (
            <NotificationItem
              sender={i.sender}
              _id={i._id}
              handler={friendRequestHandler}
              key={i._id}
            />
          ))
        ) : (
          <Typography textAlign={"center"}>0 Notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

const NotificationItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar />
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {`${name} sent you a friend Request`}
        </Typography>
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
        >
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color="error" onClick={() => handler({ _id, accept: false })}>
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});

export default Notifications;
