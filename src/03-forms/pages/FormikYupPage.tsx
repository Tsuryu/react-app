import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export const FormikYupPage = () => {
  const { errors, touched, handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log("MYLOG.values", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "No more than 15 characters")
        .required("Required"),
      lastName: Yup.string()
        .max(10, "No more than 10 characters")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
  });

  return (
    <div>
      <h1>FormikYupPage</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <input type="text" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email address</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Send</button>
      </form>
    </div>
  );
};
