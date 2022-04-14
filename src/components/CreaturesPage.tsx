// import components
import TopNav from "./navs/TopNav";
import BottomNav from "./navs/BottomNav";
import CreaturesList from "./CreaturesList";
import InitiativeAvatars from "./InitiativeAvatars";

// imports from MUI
import { Box, Container, Typography, Stack, Button } from "@mui/material";

// import context
import { useCreaturesContext } from "../views/App";

// import model
import CharacterModel from "../models/CharacterModel";

const testCreatures = [
  { name: "Djara", health: 62, armour: 16 },
  { name: "Gavin", health: 102, armour: 18 },
  { name: "Tonloy", health: 78, armour: 15 },
  { name: "Randy", health: 42, armour: 14 },
];

export default function CreaturesPage() {
  const { setCreaturesArr } = useCreaturesContext();
  const testPartyClick = async () => {
    const testClassArr = testCreatures.map((creature) => {
      return new CharacterModel(
        creature.name,
        creature.health,
        creature.armour
      );
    });
    await setCreaturesArr(testClassArr);
  };
  const clearPartyClick = () => {
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
        <InitiativeAvatars />
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
        <BottomNav />
      </Container>
    </>
  );
}
