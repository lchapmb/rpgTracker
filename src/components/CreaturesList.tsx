import { useState } from "react";

// import context
import { useCreaturesContext } from "../views/App";

// import model
import Character from "../models/CharacterModel";

// import interface
import CreatureInterface from "../interface/CreatureInterface";

// import components
import InitiativeDialog from "./InitiativeDialog";

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
import AddModeratorIcon from "@mui/icons-material/AddModerator";

export default function CreaturesList() {
  const { creaturesArr, setCreaturesArr } = useCreaturesContext();

  const initialState = {
    selectedCreature: new Character("", 0, 0),
  };

  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(initialState);

  async function removeCreature(creatureId: number) {
    const filteredCreaturesArr = creaturesArr.filter(
      (creature) => creature.id !== creatureId
    );
    await setCreaturesArr(filteredCreaturesArr);
  }

  async function openInitiativeDialog(creature: CreatureInterface) {
    setValues({ ...values, selectedCreature: creature });
    console.log(creature);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
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
              <IconButton onClick={() => openInitiativeDialog(creature)}>
                <AddModeratorIcon />
              </IconButton>
              <InitiativeDialog
                open={open}
                onClose={handleClose}
                selectedCreature={values.selectedCreature}
              />
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
