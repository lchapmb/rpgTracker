// imports from MUI
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

// import context
import { useCreaturesContext } from "../views/App";

export default function CreatureShortList() {
  const { creaturesArr } = useCreaturesContext();

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      {creaturesArr.map((creature) => (
        <ListItem key={creature.id} alignItems="center">
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: teal[900] }}>
              <PetsIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText>
            <Typography variant="subtitle1" component="div">
              {creature.name}
            </Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
