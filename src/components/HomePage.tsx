import TopNav from "./navs/TopNav";
import BottomNav from "./nav/BottomNav";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function HomePage() {
  return (
    <>
      <TopNav />
      <Container className="homeContainer" maxWidth="lg">
        <Box className="homeBox">
          <Typography variant="h1" component="div" gutterBottom align="center">
            RPG Tracker
          </Typography>
        </Box>
        <Container>
          <Typography variant="body1" align="center">
            This project is a work in progress, the repository can be viewed{" "}
            <a href="https://github.com/lchapmb/rpgTracker">here</a>.
          </Typography>
        </Container>
      </Container>
      <BottomNav />
    </>
  );
}
