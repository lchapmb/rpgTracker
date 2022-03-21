// imports from MUI
import { Typography, Card, Divider, CardContent, Grid } from "@mui/material";

// import context
import { useCreaturesContext } from "../views/App";

export default function CreaturesList() {
  const { creaturesArr } = useCreaturesContext();

  const returnCreaturesList = () => {
    return (
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
    );
  };

  const returnNoCreatures = () => {
    return (
      <Typography variant="h5" component="div" gutterBottom align="center">
        No creatures found
      </Typography>
    );
  };

  return creaturesArr.length > 0 ? returnCreaturesList() : returnNoCreatures();
}
