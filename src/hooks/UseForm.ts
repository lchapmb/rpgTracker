import React, { useState } from "react";

export default function UseForm(
  initialState = {},
  submitCallback: Function,
  changeCallback: Function
) {
  const [values, setValues] = useState(initialState);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    changeCallback(event);
  };

  const onSubmit = async (event: React.MouseEvent) => {
    event.preventDefault();
    await submitCallback();
  };

  return {
    onInputChange,
    onSubmit,
    values,
  };
}
