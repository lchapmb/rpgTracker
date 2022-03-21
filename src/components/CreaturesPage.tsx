// import components
import TopNav from "./navs/TopNav";
import CreaturesList from "./CreaturesList";

// imports from MUI
import { Box, Container, Typography, Stack, Button } from "@mui/material";

// import context
import { useCreaturesContext } from "../views/App";

const testCreatures = [
  { id: 7, name: "Djara", health: 62, armour: 16 },
  { id: 11, name: "Gavin", health: 102, armour: 18 },
  { id: 12, name: "Tonloy", health: 78, armour: 15 },
  { id: 67, name: "Randy", health: 42, armour: 14 },
];

export default function CreaturesPage() {
  const { setCreaturesArr } = useCreaturesContext();
  const testPartyClick = async () => {
    console.log("Test");
    await setCreaturesArr(testCreatures);
  };
  const clearPartyClick = () => {
    console.log("Clear");
    setCreaturesArr([]);
  };
  return (
    <>
      <TopNav />
      <Container>
        <Box className="creatureTitleBox" sx={{ height: "auto" }}>
          <Typography variant="h3" component="div" gutterBottom align="center">
            Creature List
          </Typography>
        </Box>
        <Box className="creatureListContainer" maxWidth="lg" mt={1}>
          <CreaturesList />
        </Box>
        <Box className="generatePartyButton" maxWidth="lg" mt={1}>
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button variant="contained" onClick={testPartyClick}>
              Generate Party
            </Button>
            <Button variant="contained" onClick={clearPartyClick}>
              Clear Party
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
