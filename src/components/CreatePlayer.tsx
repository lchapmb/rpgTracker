import React from "react";

// import components
import TopNav from "./navs/TopNav";

// import hooks
import UseForm from "../hooks/UseForm";

// MUI imports

import {
  Typography,
  Box,
  Container,
  Divider,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export default function CreatePlayer() {
  // define inital state
  const initialState = {
    nameString: "",
    nameValid: false,
    healthInt: 0,
    healthValid: false,
    armourInt: 0,
    armourValid: false,
  };

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
        <Box
          sx={{ maxWidth: "25ch", paddingBottom: 2 }}
          component="form"
          noValidate
        >
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
            required
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
              name="healthInt"
              type="text"
            />
            <br />
            {/* armour class */}
            <TextField
              id="armourClassInputField"
              label="AC"
              variant="standard"
              onChange={onInputChange}
              name="armourInt"
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
