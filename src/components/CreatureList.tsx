import TopNav from "./navs/TopNav";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";

export default function CreatureList() {
  return (
    <>
      <TopNav />
      <Container className="creatureListContainer" maxWidth="lg">
        <Box className="creatureListBox" sx={{ height: "50vh" }}>
          <p>Creatures here</p>
        </Box>
      </Container>
    </>
  );
}
