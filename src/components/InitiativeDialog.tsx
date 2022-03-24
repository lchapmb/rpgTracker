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
  // define initial state
  const initialState = {
    initiativeInt: 0,
  };

  // set state
  const [values, setValues] = useState(initialState);

  // get props
  const { onClose, open, selectedCreature } = props;

  // handle dialog closing
  function handleClose() {
    onClose();
  }

  // handle input change
  function InitiativeChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  // handle input submit
  const CreateCombatantSubmit = () => {
    console.log(values);
    console.log(selectedCreature);
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{selectedCreature.name}</DialogTitle>
      <FormControl sx={{ m: 1 }} variant="filled">
        <TextField
          id="armourClassInputField"
          label="Initiative"
          variant="outlined"
          onChange={InitiativeChange}
          name="initiativeInt"
          value={values.initiativeInt || ""}
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
