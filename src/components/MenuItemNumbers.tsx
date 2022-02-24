import { MenuItem } from "@mui/material";

export default function menuItemNumbers() {
  const topEndRange = 20;
  let range: number[] = [];
  const createRange = function (max: number) {
    for (let i = 0; i <= max; i++) {
      range.push(i);
    }
  };
  createRange(topEndRange);

  return (
    <>
      {range.map((val) => {
        <MenuItem value={val}>{val}</MenuItem>;
      })}
    </>
  );
}
