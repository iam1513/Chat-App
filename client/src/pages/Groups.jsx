import React, { Suspense, lazy, memo, useEffect, useState } from "react";
import {
  Backdrop,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { bag_color, matBlack } from "../constants/color";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "../components/Styles/StyledComponent";
import AvatarCard from "../components/shared/AvatarCard";
import { SampleChats, SampleUsers } from "../constants/SampleData";
import UserItem from "../components/shared/UserItem";

const Groups = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate("/");
  };

  const isAddMember = false;

  const ConfirmDeleteDialog = lazy(() =>
    import("../components/dialogs/ConfirmDeleteDialog")
  );

  const AddMemberDialog = lazy(() =>
    import("../components/dialogs/AddMemberDialog")
  );

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
  const handleMobile = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  const chatId = useSearchParams()[0].get("group");
  const handleMobileClose = () => setMobileMenuOpen(false);

  const updateGroupName = () => {
    setIsEdit(false);
    console.log("Group name updated");
  };

  const openConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
    console.log("Delete Group");
  };

  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
    console.log("Delete Group");
  };
  const openAddMember = () => {
    console.log("Delete Group");
  };

  const deleteHandler = () => {
    console.log("deleteHandler");
  };

  const removeMemberHandler = () => [];

  useEffect(() => {
    if (chatId) {
      setGroupName(`Group Name ${chatId}`);
      setGroupNameUpdatedValue(`Group Name ${chatId}`);
    }
    return () => {
      setGroupName("");
      setGroupNameUpdatedValue("");
      setIsEdit(false);
    };
  }, [chatId]);

  const IconBtns = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          },
        }}
      >
        <IconButton onClick={handleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Tooltip title="back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: matBlack,
            color: "white",

            ":hover": {
              bgcolor: "rgba(0,0,0,0.7)",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );
  const [isEdit, setIsEdit] = useState(false);

  const GroupName = (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={"1rem"}
      padding={"3rem"}
    >
      {isEdit ? (
        <>
          <TextField
            value={groupNameUpdatedValue}
            onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
          />
          <IconButton
            onClick={() => {
              updateGroupName();
            }}
          >
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4"> {groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </Stack>
  );

  const ButtonGroup = (
    <Stack
      direction={{
        sm: "row",
        xs: "column-reverse",
      }}
      spacing={"1rem"}
      p={{
        xs: "0",
        sm: "1rem",
        md: "1rem 4rem",
      }}
    >
      <Button
        size="large"
        color="error"
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={openConfirmDeleteHandler}
      >
        Delete Group
      </Button>
      <Button
        size="large"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={openAddMember}
      >
        Add Members
      </Button>
    </Stack>
  );

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
        sm={4}
        bgcolor={"bisque"}
      >
        <GroupsList myGroups={SampleChats} chatId={chatId} />
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {IconBtns}

        {groupName && (
          <>
            {GroupName}

            <Typography
              margin={"2rem"}
              alignSelf={"flex-start"}
              variant="body1"
            >
              Members
            </Typography>
            <Stack
              maxWidth={"45rem"}
              width={"100%"}
              boxSizing={"border-box"}
              paddiing={{
                sm: "1rem",
                xs: "0",
                md: " 1rem 4 rem",
              }}
              spacing={"2rem"}
              height={"50vh"}
              overflow={"auto"}
            >
              {SampleUsers.map((i) => (
                <UserItem
                  user={i}
                  isAdded
                  key={i._id}
                  styling={{
                    boxShadow: "0 0 0 0.5rem rgba(0,0,0,0.2)",
                    padding: "1rem 2rem",
                    borderRadius: "0.5rem",
                  }}
                  handler={removeMemberHandler}
                />
              ))}
            </Stack>

            {ButtonGroup}
          </>
        )}
      </Grid>

      {isAddMember && (
        <Suspense fallback={<Backdrop open />}>
          <AddMemberDialog />
        </Suspense>
      )}

      {confirmDeleteDialog && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDialog
            open={confirmDeleteDialog}
            handleClose={closeConfirmDeleteHandler}
            deleteHandler={deleteHandler}
          />
        </Suspense>
      )}

      <Drawer
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
          backgroundImage: bag_color,
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
      >
        <GroupsList myGroups={SampleChats} chatId={chatId} w={"50vw"} />
      </Drawer>
    </Grid>
  );
};

const GroupsList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack
    width={w}
    height="100vh" // Set the height to fill the viewport
    sx={{
      overflowY: "auto", // Enable vertical scrolling if needed
      backgroundImage: bag_color,
    }}
  >
    {myGroups.length > 0 ? (
      myGroups.map((group) => (
        <GroupListItem group={group} chatId={chatId} key={group._id} />
      ))
    ) : (
      <Typography textAlign="center" padding="1rem">
        No Groups
      </Typography>
    )}
  </Stack>
);

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;

  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups;
