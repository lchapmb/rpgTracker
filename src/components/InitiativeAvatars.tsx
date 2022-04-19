// import context
import { useInitiativeContext } from "../views/App";

// imports from mui
import { AvatarGroup, Avatar } from "@mui/material";

export default function InitiativeAvatars() {
  const { initiativeArr } = useInitiativeContext();

  return (
    <AvatarGroup max={10} sx={{ position: "sticky", top: 0, zIndex: 1 }}>
      {initiativeArr.map((creature) => {
        return <Avatar alt={`${creature.name}`}>{creature.name[0]}</Avatar>;
      })}
    </AvatarGroup>
  );
}
