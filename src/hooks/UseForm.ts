import React, { useState } from "react";

export default function UseForm(callback: any, initialState = {}) {
  const [values, setValues] = useState(initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values);
  };

  const onSubmit = async (event: React.MouseEvent) => {
    event.preventDefault();
    await callback();
  };

  return {
    onChange,
    onSubmit,
    values,
  };
}
