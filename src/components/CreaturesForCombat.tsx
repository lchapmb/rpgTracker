import { useState } from "react";

// import context
import { useCreaturesContext } from "../views/App";

// import components
import InitiativeDialog from "./InitiativeDialog";

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
import CreatureInterface from "../interface/CreatureInterface";

export default function CreaturesForCombat() {
  const { creaturesArr } = useCreaturesContext();

  const [open, setOpen] = useState(false);

  async function openInitiativeDialog(creature: CreatureInterface) {
    console.log(creature);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
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
          </ListItemText>
          <Button onClick={() => openInitiativeDialog(creature)}>
            Add To Initiative
          </Button>
          <InitiativeDialog
            open={open}
            onClose={handleClose}
            selectedValue={creature}
          />
        </ListItem>
      ))}
    </List>
  );
}
