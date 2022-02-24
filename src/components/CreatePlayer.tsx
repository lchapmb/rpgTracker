import { useState } from "react";

import TopNav from "./navs/TopNav";

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
  const [nameString, setNameString] = useState("");
  const [healthString, setHealthString] = useState("");
  const [amourString, setArmourString] = useState("");

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
            onChange={(e) => {
              setNameString(e.target.value);
              console.log(nameString);
            }}
            value={nameString}
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
              onChange={(e) => {
                setHealthString(e.target.value);
                console.log(healthString);
              }}
              value={healthString}
            />
            <br />
            {/* armour class */}
            <InputLabel id="armourClass">AC</InputLabel>
            <Select
              id="armourClassInputField"
              placeholder="AC"
              variant="standard"
              onChange={(e) => {
                setArmourString(e.target.value);
                console.log(amourString);
              }}
              value={amourString}
            >
              <MenuItem value={1}>1</MenuItem>;<MenuItem value={2}>2</MenuItem>;
              <MenuItem value={3}>3</MenuItem>;<MenuItem value={4}>4</MenuItem>;
            </Select>
          </Box>
          {/* submit button */}
          <Button id="creatureCreationSubmit" variant="contained">
            Create Creature
          </Button>
        </Box>
      </Container>
    </>
  );
}
