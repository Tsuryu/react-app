import React from "react";
import { useFormik, FormikErrors } from "formik";

import "../styles/styles.css";

interface FormValuesInterface {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = (values: FormValuesInterface) => {
    const errors: FormikErrors<FormValuesInterface> = {};
    const { firstName, lastName, email } = values;

    if (firstName.length > 15)
      errors.firstName = "Must have no more than 15 characters";
    if (!firstName) errors.firstName = "Required";

    if (lastName.length > 10)
      errors.lastName = "Must have no more than 10 characters";
    if (!lastName) errors.lastName = "Required";

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
      errors.email = "Invalid email address";
    if (!email) errors.email = "Required";

    return errors;
  };

  const { errors, values, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      onSubmit: (values) => {
        console.log("MYLOG.values", values);
      },
      validate: validate,
    });
  const { firstName, lastName, email } = values;

  return (
    <div>
      <h1>FormikBasicPage</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          value={email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Send</button>
      </form>
    </div>
  );
};
