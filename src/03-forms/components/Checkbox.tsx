import { ErrorMessage, useField } from "formik";
import React from "react";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const Checkbox = ({ label, ...props }: Props) => {
  const [field] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label>
        <input className="text-input" type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
      {/* {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
    </>
  );
};
