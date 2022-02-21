import TopNav from "./navs/TopNav";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function HomePage() {
  return (
    <>
      <TopNav />
      <Container className="homeContainer" maxWidth="lg">
        <Box className="homeBox" sx={{ height: "50vh" }}>
          <Typography variant="h1" component="div" gutterBottom align="center">
            RPG Tracker
          </Typography>
        </Box>
      </Container>
    </>
  );
}
