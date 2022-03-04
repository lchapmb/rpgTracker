import React, { useState } from "react";

export default function UseForm(callback: any, initialState = {}) {
  const [values, setValues] = useState(initialState);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
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
