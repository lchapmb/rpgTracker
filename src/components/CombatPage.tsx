// import components
import TopNav from "./navs/TopNav";
import BottomNav from "./navs/BottomNav";

// imports from MUI
import { Container } from "@mui/material";

export default function CombatPage() {
  return (
    <>
      <TopNav />
      <Container>
        <div>CombatPage</div>
        <BottomNav />
      </Container>
    </>
  );
}
