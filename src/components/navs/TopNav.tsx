import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Typography,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useUserContext } from "../../views/App";

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
  { title: "Creatures", path: "/creatures-page" },
  { title: "Combat", path: "/combat-page" },
];

export default function TopNav() {
  const { userName } = useUserContext();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              id="menu-appbar"
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link className="navLink" to={page.path} key={page.title}>
                  <MenuItem>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                </Link>
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
              <Link className="navLink" to={page.path} key={page.title}>
                <Button
                  key={page.title}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              </Link>
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
