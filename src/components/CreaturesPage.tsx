// import nav
import TopNav from "./navs/TopNav";

// imports from MUI
import {
  Box,
  Container,
  Typography,
  Card,
  Divider,
  CardContent,
  Grid,
  Stack,
  Button,
} from "@mui/material";

// import context
import { useCreaturesContext } from "../views/App";

const testCreatures = [
  { id: 7, name: "Djara", health: 62, armour: 16 },
  { id: 11, name: "Gavin", health: 102, armour: 18 },
  { id: 12, name: "Tonloy", health: 78, armour: 15 },
  { id: 67, name: "Randy", health: 42, armour: 14 },
];

export default function CreaturesPage() {
  const { creaturesArr, setCreaturesArr } = useCreaturesContext();
  const testClick = async () => {
    console.log("Test");
    await setCreaturesArr(testCreatures);
  };
  return (
    <>
      <TopNav />
      <Container className="homeContainer" maxWidth="lg">
        <Box className="homeBox" sx={{ height: "auto" }}>
          <Typography variant="h3" component="div" gutterBottom align="center">
            Creature List
          </Typography>
        </Box>
      </Container>
      <Container className="creatureListContainer" maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          className="creatureListGrid"
          maxWidth="lg"
        >
          {creaturesArr.map((creature) => (
            <Grid item xs={2} sm={4} md={4} key={creature.id}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                    {creature.name}
                  </Typography>
                  <Divider />
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    HP: {creature.health}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    AC: {creature.armour}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container className="creatureListContainer" maxWidth="lg">
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={testClick}>
            Generate Party
          </Button>
        </Stack>
      </Container>
    </>
  );
}