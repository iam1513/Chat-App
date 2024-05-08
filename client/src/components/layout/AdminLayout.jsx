import {
  Grid,
  IconButton,
  Box,
  Stack,
  Typography,
  Drawer,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import {
  Close as CloseIcon,
  Dashboard as DashboardIcon,
  ExitToApp,
  Groups,
  ManageAccounts,
  Menu as MenuIcon,
  Message,
} from "@mui/icons-material";
import { useLocation, Link as LinkComponent, Navigate } from "react-router-dom";
import { grayColor, matBlack } from "../../constants/color";

const Link = styled(LinkComponent)`
  text-decoration: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  color: black;
  &:hover {
    color: rgba(0, 0, 0, 0.54);
  }
`;

const adminTabs = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "User",
    path: "/admin/users",
    icon: <ManageAccounts />,
  },
  {
    name: "Chats",
    path: "/admin/chats",
    icon: <Groups />,
  },
  {
    name: "Messages",
    path: "/admin/messages",
    icon: <Message />,
  },
];

const Sidebar = ({ w = "100%" }) => {
  const location = useLocation();

  const logoutHandler = () => {
    console.log("Log Out");
  };

  return (
    <Stack width={w} direction={"column"} p={"3rem"} spacing={"3rem"}>
      <Typography variant="h5" textTransform={"uppercase"}>
        Chat App
      </Typography>

      <Stack spacing={"1rem"}>
        {adminTabs.map((tab) => (
          <Link
            key={tab.path}
            to={tab.path}
            sx={
              location.pathname === tab.path && {
                bgcolor: matBlack,
                color: "white",
                ":hover": { color: "white" },
              }
            }
          >
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
              {tab.icon}
              <Typography>{tab.name}</Typography>
            </Stack>
          </Link>
        ))}

        <Link onClick={logoutHandler}>
          <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
            <ExitToApp />
            <Typography>Logout</Typography>
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};
const isAdmin = true;

const AdminLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobile = () => {
    setIsMobile(!isMobile);
  };

  const handleClose = () => {
    setIsMobile(false);
  };

  if (!isAdmin) return <Navigate to="/admin" />;

  return (
    <Grid container minHeight={"100vh"}>
      <Box
        sx={{
          display: { xs: "block", md: " none" },
          position: "fixed",
          right: "1rem",
          top: "1rem",
        }}
      >
        <IconButton onClick={handleMobile}>
          {isMobile ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      <Grid
        item
        md={4}
        lg={3}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <Sidebar />
      </Grid>

      <Grid
        item
        xs={12}
        md={8}
        lg={9}
        sx={{
          backgroundColor: "#f5f5f5",
        }}
      >
        {children}
      </Grid>

      <Drawer open={isMobile} onClose={handleClose}>
        <Sidebar width="50vw" />
      </Drawer>
    </Grid>
  );
};

export default AdminLayout;
