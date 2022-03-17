import React, { useState } from "react";

// import components
import TopNav from "./navs/TopNav";

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

  const [values, setValues] = useState(initialState);

  async function CreatePlayerSubmit(event: React.MouseEvent) {
    event.preventDefault();
    // send 'values' to database
    console.log("Values", values);
  }

  async function CreatePlayerChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
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
            onChange={CreatePlayerChange}
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
              onChange={CreatePlayerChange}
              name="healthInt"
              type="text"
            />
            <br />
            {/* armour class */}
            <TextField
              id="armourClassInputField"
              label="AC"
              variant="standard"
              onChange={CreatePlayerChange}
              name="armourInt"
            />
          </Box>
          {/* submit button */}
          <Button
            id="creatureCreationSubmit"
            variant="contained"
            onClick={CreatePlayerSubmit}
          >
            Create Creature
          </Button>
        </Box>
      </Container>
    </>
  );
}
