import CreatureInterface from "./CreatureInterface";

export default interface InitiativeDialogProps {
  open: boolean;
  onClose: () => void;
  selectedValue: CreatureInterface;
}
