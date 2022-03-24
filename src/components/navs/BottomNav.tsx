import { Link } from "react-router-dom";

import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PetsIcon from "@mui/icons-material/Pets";
import HomeIcon from "@mui/icons-material/Home";
import SportsMmaIcon from "@mui/icons-material/SportsMma";

export default function BottomNav() {
  const pages = [
    { title: "Home", path: "/", icon: <HomeIcon /> },
    { title: "Create Player", path: "/create-player", icon: <AddCircleIcon /> },
    { title: "Creatures", path: "/creatures-page", icon: <PetsIcon /> },
    { title: "Combat", path: "/combat-page", icon: <SportsMmaIcon /> },
  ];

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { xs: "block", md: "none" },
      }}
      elevation={3}
    >
      <BottomNavigation>
        {pages.map((page) => (
          <BottomNavigationAction
            label="Create Creature"
            component={Link}
            to={page.path}
            key={page.title}
            icon={page.icon}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
