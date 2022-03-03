// import components
import TopNav from "./navs/TopNav";
import MenuItemNumbers from "./MenuItemNumbers";

// import hooks
import UseForm from "../hooks/UseForm";

import {
  Typography,
  Box,
  Container,
  Divider,
  TextField,
  InputAdornment,
  Button,
  InputLabel,
  MenuItem,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Select from "@mui/material/Select";

export default function CreatePlayer() {
  // define inital state
  const initialState = { nameString: "", healthString: 0, armourString: 0 };

  // get event handlers from UseForm hook
  const { onInputChange, onSubmit, values } = UseForm(
    CreatePlayerCallback,
    initialState
  );

  async function CreatePlayerCallback() {
    // send 'values' to database
    console.log("Submit", values);
  }

  return (
    <>
      <TopNav />
      <Container className="homeContainer" maxWidth="lg">
        <Box className="homeBox" sx={{ height: "auto" }}>
          <Typography variant="h3" component="div" gutterBottom align="center">
            Create Creature
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ maxWidth: "100%", paddingBottom: 2 }}>
          {/* name field */}
          <TextField
            id="creatureNameInputField"
            label="Name"
            placeholder="Name"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
            onChange={onInputChange}
            name="nameString"
          />
          <Box
            sx={{
              maxWidth: "100%",
              paddingBottom: 2,
            }}
          >
            {/* health */}
            <TextField
              id="healthInputField"
              label="HP"
              variant="standard"
              onChange={onInputChange}
              name="healthString"
            />

            <br />
            {/* armour class */}
            <TextField
              id="armourClassInputField"
              label="AC"
              variant="standard"
              onChange={onInputChange}
              name="armourString"
            />
          </Box>
          {/* submit button */}
          <Button
            id="creatureCreationSubmit"
            variant="contained"
            onClick={onSubmit}
          >
            Create Creature
          </Button>
        </Box>
      </Container>
    </>
  );
}
