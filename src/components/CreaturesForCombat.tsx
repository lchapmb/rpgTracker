import { useState } from "react";

// import context
import { useInitiativeContext } from "../views/App";

import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import PetsIcon from "@mui/icons-material/Pets";

// import interface
import Character from "../models/CharacterModel";

export default function CreaturesForCombat() {
  // define initial state
  const initialState = {
    selectedCreature: new Character("", 0, 0),
  };

  // set state
  const [values, setValues] = useState(initialState);

  const { initiativeArr } = useInitiativeContext();

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
    >
      {initiativeArr.map((creature) => (
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
            <Typography variant="subtitle1" component="div">
              Initiative: {creature.initiative}
            </Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
