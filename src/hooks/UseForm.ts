import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";

export default function UseForm(callback: any, initialState = {}) {
  const [values, setValues] = useState(initialState);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values);
  };

  const onSubmit = async (event: React.MouseEvent) => {
    event.preventDefault();
    await callback();
  };

  return {
    onInputChange,
    onSubmit,
    values,
  };
}
