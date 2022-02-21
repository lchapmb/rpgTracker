import TopNav from "./navs/TopNav";

// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
import {
  Typography,
  Box,
  Container,
  Divider,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function CreatePlayer() {
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
              placeholder="HP"
              InputProps={{}}
              variant="standard"
            />
            <br />
            {/* armour class */}
            <TextField
              id="armourClassInputField"
              label="AC"
              placeholder="AC"
              InputProps={{}}
              variant="standard"
            />
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
