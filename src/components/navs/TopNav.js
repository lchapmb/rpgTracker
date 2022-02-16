import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { UserContext } from "../../App";

export default function HomePage() {
  const { userName } = useContext(UserContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="topNavAppBar">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexgrow: 1 }}>
            RPG Tracker
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexgrow: 1 }}>
            {userName}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
