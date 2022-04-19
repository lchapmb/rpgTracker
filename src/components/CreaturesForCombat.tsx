// import { useState } from "react";

// import context
import { useInitiativeContext } from "../views/App";

import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { teal } from "@mui/material/colors";
import PetsIcon from "@mui/icons-material/Pets";

// import interface
// import CombatantInterface from "../interface/CombatantInterface";

export default function CreaturesForCombat() {
  // define initial state
  // const initialState = {
  //   initiativeArr: Array<CombatantInterface>(),
  // };

  // set state
  // const [values, setValues] = useState(initialState);

  const { initiativeArr } = useInitiativeContext();

  const initiativeSort = (
    a: { initiative: number },
    b: { initiative: number }
  ) => {
    if (a.initiative < b.initiative) return 1;
    else if (a.initiative > b.initiative) return -1;
    else return 0;
  };

  let sortedCombatants = initiativeArr.sort(initiativeSort);

  // setValues(sortedCombatants);

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
    >
      {sortedCombatants.map((creature) => (
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
