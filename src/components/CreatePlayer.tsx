// import components
import TopNav from "./navs/TopNav";
import BottomNav from "./navs/BottomNav";
import CreatePlayerForm from "./CreatePlayerForm";
import CreatureShortList from "./CreatureShortList";

// MUI imports
import { Typography, Box, Container, Divider } from "@mui/material";

export default function CreatePlayer() {
  return (
    <>
      <TopNav />
      <Container className="createPlayerContainer" maxWidth="lg">
        <Box className="createPlayerBox" sx={{ height: "auto" }}>
          <Typography variant="h3" component="div" gutterBottom align="center">
            Create Creature
          </Typography>
          <CreatePlayerForm />
        </Box>
        <Divider />
        <CreatureShortList />
        <BottomNav />
      </Container>
    </>
  );
}
