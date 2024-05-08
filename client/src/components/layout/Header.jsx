import React, { Suspense } from "react";
import { orange } from "../../constants/color";
import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  IconButton,
  Tooltip,
  Backdrop,
} from "@mui/material";
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
  Group as GroupIcon,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
const SearchDialog = React.lazy(() => import("../specific/Search"));
const NewGroupDialog = React.lazy(() => import("../specific/NewGroup"));
const NotificationsDialog = React.lazy(() =>
  import("../specific/Notifications")
);
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  //   const [isGroup, setIsGroup] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };

  const openSearch = () => {
    setIsSearch((prev) => !prev);
  };
  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };

  const openNotification = () => {
    setIsNotification((prev) => !prev);
  };
  const logoutHandler = () => {};
  const navigateToGroup = () => navigate("/groups");

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              Chat App
            </Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconBtn
                title={"Menu"}
                icon={<MenuIcon />}
                onClick={handleMobile}
              />
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>
            {/**Empty Box */}
            <Box>
              <IconBtn
                title={"Search"}
                icon={<SearchIcon />}
                onClick={openSearch}
              />

              <IconBtn
                title={"New  Group"}
                icon={<AddIcon />}
                onClick={openNewGroup}
              />
              <IconBtn
                title={"Manage Groups"}
                icon={<GroupIcon />}
                onClick={navigateToGroup}
              />

              <IconBtn
                title={"Notifications"}
                icon={<NotificationsIcon />}
                onClick={openNotification}
              />

              <IconBtn
                title={"Logout"}
                icon={<LogoutIcon />}
                onClick={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}

      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>
      )}

      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationsDialog />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
