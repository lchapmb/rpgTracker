import { useState } from "react";

// imports for MUI
import {
  Dialog,
  DialogTitle,
  FormControl,
  TextField,
  Button,
} from "@mui/material";

// import interface
import InitiativeDialogProps from "../interface/IniativeDialogProps";

export default function InitiativeDialog(props: InitiativeDialogProps) {
  const { onClose, open, selectedValue } = props;

  const handleClose = () => {
    onClose();
  };

  const CreateCombatantSubmit = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{selectedValue.name}</DialogTitle>
      <FormControl sx={{ m: 1 }} variant="filled">
        <TextField
          id="armourClassInputField"
          label="Initiative"
          variant="outlined"
          // onChange={InitiativeChange}
          name="initiativeInt"
          // value={values.iniativeInt || ""}
        />
      </FormControl>
      <FormControl sx={{ m: 1 }} variant="filled">
        <Button
          id="creatureCreationSubmit"
          variant="contained"
          onClick={CreateCombatantSubmit}
        >
          Create Combatant
        </Button>
      </FormControl>
    </Dialog>
  );
}
