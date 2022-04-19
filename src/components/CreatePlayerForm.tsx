import React, { useState } from "react";

// import model
import CharacterModel from "../models/CharacterModel";

// MUI imports
import {
  Box,
  TextField,
  InputAdornment,
  Button,
  FormControl,
  Stack,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

// import context
import { useCreaturesContext } from "../views/App";

export default function CreatePlayerForm() {
  const { creaturesArr, setCreaturesArr } = useCreaturesContext();

  // define initial state
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
    // deconstruct values
    const { nameString, healthInt, armourInt } = values;
    // create character with values
    const character = new CharacterModel(nameString, +healthInt, +armourInt);
    // send 'values' to context
    setCreaturesArr([...creaturesArr, character]);
    // reset values
    setValues(initialState);
  }

  async function CreatePlayerChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }
  return (
    <Box
      sx={{ minWidth: "25ch", paddingBottom: 2, mx: 2 }}
      component="form"
      noValidate
    >
      {/* name field */}
      <FormControl fullWidth variant="filled">
        <TextField
          id="creatureNameInputField"
          label="Name"
          placeholder="Name"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          onChange={CreatePlayerChange}
          name="nameString"
          required
          value={values.nameString}
        />
      </FormControl>
      <Stack
        sx={{
          maxWidth: "100%",
          paddingBottom: 2,
        }}
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="space-evenly"
      >
        {/* health */}
        <FormControl sx={{ my: 1 }} variant="filled">
          <TextField
            id="healthInputField"
            label="HP"
            variant="outlined"
            onChange={CreatePlayerChange}
            name="healthInt"
            type="text"
            value={values.healthInt || ""}
          />
        </FormControl>
        {/* armour class */}
        <FormControl sx={{ m: 1 }} variant="filled">
          <TextField
            id="armourClassInputField"
            label="AC"
            variant="outlined"
            onChange={CreatePlayerChange}
            name="armourInt"
            value={values.armourInt || ""}
          />
        </FormControl>
        {/* submit button */}
        <FormControl sx={{ m: 1 }} variant="filled">
          <Button
            id="CreatureCreationSubmit"
            variant="contained"
            onClick={CreatePlayerSubmit}
          >
            Create Creature
          </Button>
        </FormControl>
      </Stack>
    </Box>
  );
}
