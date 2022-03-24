import { Link } from "react-router-dom";

import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PetsIcon from "@mui/icons-material/Pets";
import HomeIcon from "@mui/icons-material/Home";

export default function BottomNav() {
  const pages = [
    { title: "Home", path: "/", icon: <HomeIcon /> },
    { title: "Create Player", path: "/create-player", icon: <AddCircleIcon /> },
    { title: "Creatures", path: "/creatures-page", icon: <PetsIcon /> },
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
      <BottomNavigation showLabels>
        {pages.map((page) => (
          <Link to={page.path} key={page.title}>
            <BottomNavigationAction label="Create Creature" icon={page.icon} />
          </Link>
        ))}
      </BottomNavigation>
    </Paper>
  );
}
