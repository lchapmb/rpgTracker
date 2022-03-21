// imports from MUI
import {
  Typography,
  Divider,
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

export default function CreaturesList() {
  const { creaturesArr } = useCreaturesContext();

  return (
    <>
      {creaturesArr.length > 0 ? (
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
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
