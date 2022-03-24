// import components
import TopNav from "./navs/TopNav";
import BottomNav from "./navs/BottomNav";
import CreaturesForCombat from "./CreaturesForCombat";

// imports from MUI
import { Container, Typography, Box } from "@mui/material";

export default function CombatPage() {
  return (
    <>
      <TopNav />
      <Container>
        <Box className="creatureTitleBox" sx={{ height: "auto" }}>
          <Typography variant="h3" component="div" gutterBottom align="center">
            Combat
          </Typography>
        </Box>
        <Box className="creatureListContainer" maxWidth="lg" mt={1}>
          <CreaturesForCombat />
        </Box>
        <BottomNav />
      </Container>
    </>
  );
}
