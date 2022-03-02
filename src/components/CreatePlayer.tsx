import { useState } from "react";

// import components
import TopNav from "./navs/TopNav";

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
  MenuItem,
  InputLabel,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function CreatePlayer() {
  // define inital state
  const initialState = { nameString: "", healthString: "", armourString: "" };

  // get event handlers from UseForm hook
  const { onChange, onSubmit, values } = UseForm(
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
            onChange={onChange}
            name="nameString"
          />
          <Box
            sx={{
              maxWidth: "100%",
              paddingBottom: 2,
            }}
          >
            {/* health */}
            <InputLabel id="health">Health</InputLabel>
            <TextField
              id="healthInputField"
              placeholder="HP"
              variant="standard"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              onChange={onChange}
              name="healthString"
            />
            <br />
            {/* armour class */}
            <InputLabel id="armourClass">AC</InputLabel>
            <TextField
              id="armourClassInputField"
              placeholder="AC"
              variant="standard"
              onChange={onChange}
              name="amourString"
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
