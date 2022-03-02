import { MenuItem } from "@mui/material";

export default function menuItemNumbers(props: { maxValue: number }) {
  const topEndRange = props.maxValue;
  let range: number[] = [];
  const createRange = function (max: number) {
    for (let i = 0; i <= max; i++) {
      range.push(i);
    }
  };
  createRange(topEndRange);

  return (
    <>
      {range.map((num) => {
        return (
          <MenuItem key={num} value={num}>
            {num}
          </MenuItem>
        );
      })}
    </>
  );
}
