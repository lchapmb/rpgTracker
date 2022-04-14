// imports from mui
import { AvatarGroup, Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

export default function InitiativeAvatars() {
  return (
    <AvatarGroup max={4} sx={{ position: "sticky", top: 0, zIndex: 1 }}>
      <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      />
    </AvatarGroup>
  );
}
