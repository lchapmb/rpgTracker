import { useState } from "react";
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import { useGlobalContext } from "../../views/App";

// const pages = [
//   "Create Player",
//   "Player Characters",
//   "NPCs",
//   "Campaigns",
//   "Maps",
//   "Account",
// ];

const pages = [
  { title: "Home", path: "/" },
  { title: "Create Player", path: "/create-player" },
];

export default function HomePage() {
  const { userName } = useGlobalContext();
  const [anchorElNavOpen, setAnchorElNavOpen] = useState<boolean>(false);

  function toggleNavBar() {
    setAnchorElNavOpen(!anchorElNavOpen);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="topNavAppBar">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            noWrap
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            RPG Tracker
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu-appbar"
              sx={{ mr: 2 }}
              onClick={toggleNavBar}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              open={anchorElNavOpen}
              id="menu-appbar"
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title}>
                  <Typography textAlign="center">
                    <Link className="navLink" to={page.path}>
                      {page.title}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            RPG Tracker
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link className="navLink" to={page.path}>
                  {page.title}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Typography variant="h6" component="div" sx={{ flexgrow: 1 }}>
              {userName}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
