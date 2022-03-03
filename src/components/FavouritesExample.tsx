import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import ShieldIcon from "@mui/icons-material/Shield";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import Typography from "@mui/material/Typography";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#87ceeb",
  },
  "& .MuiRating-iconHover": {
    color: "#45b3e0",
  },
});

export default function CustomizedRating() {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">Custom icon and color</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value: number) =>
          `${value} Heart${value !== 1 ? "s" : ""}`
        }
        precision={0.5}
        icon={<ShieldIcon fontSize="inherit" />}
        emptyIcon={<AddModeratorIcon fontSize="inherit" />}
      />
      <Typography component="legend">10 stars</Typography>
      <Rating name="customized-10" defaultValue={10} max={20} />
    </Box>
  );
}
