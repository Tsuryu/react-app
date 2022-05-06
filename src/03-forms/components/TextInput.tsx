import { ErrorMessage, useField } from "formik";
import React from "react";

interface Props {
  label: string;
  placeholder?: string;
  name: string;
  type?: "text" | "email" | "password";
  [x: string]: any;
}

export const TextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
      {/* {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
    </>
  );
};
