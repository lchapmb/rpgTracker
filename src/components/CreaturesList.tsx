// import context
import { useCreaturesContext } from "../views/App";

// imports from MUI
import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import PetsIcon from "@mui/icons-material/Pets";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CreaturesList() {
  const { creaturesArr, setCreaturesArr } = useCreaturesContext();

  async function removeCreature(creatureId: number) {
    const filteredCreaturesArr = creaturesArr.filter(
      (creature) => creature.id !== creatureId
    );
    await setCreaturesArr(filteredCreaturesArr);
  }

  return (
    <>
      {creaturesArr.length > 0 ? (
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
          }}
        >
          {creaturesArr.map((creature) => (
            <ListItem key={creature.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: teal[900] }}>
                  <PetsIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="h6" component="div">
                  {creature.name}
                </Typography>
                <Divider />
                <Typography variant="subtitle1" color="text.secondary">
                  HP: {creature.health} | AC: {creature.armour}
                </Typography>
              </ListItemText>
              <IconButton onClick={() => removeCreature(creature.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1" component="div" gutterBottom align="center">
          No creatures found
        </Typography>
      )}
    </>
  );
}
