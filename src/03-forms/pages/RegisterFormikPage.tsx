import "../styles/styles.css";
import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { TextInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    <Formik
      initialValues={{ firstName: "", email: "", password1: "", password2: "" }}
      onSubmit={(props) => {
        console.log("MYLOG.values", props);
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .required("Required")
          .min(2, "At least 2 characters")
          .max(15, "Name too long"),
        email: Yup.string().required("Required").email("Invalid email"),
        password1: Yup.string()
          .required("Required")
          .min(6, "Your password is too short"),
        password2: Yup.string()
          .required("Required")
          .min(6, "Your password is too short")
          .oneOf([Yup.ref("password1"), null], "Passwords must match"),
      })}
    >
      {({ handleReset }) => (
        <Form>
          <h1>Register formik page</h1>

          <TextInput label="First name" name="firstName" />
          <TextInput label="Email address" name="email" type="email" />
          <TextInput
            label="Password"
            name="password1"
            type="password"
            placeholder="******"
          />
          <TextInput
            label="Repeat password"
            name="password2"
            type="password"
            placeholder="******"
          />

          <button type="submit">Create</button>
          <button onClick={handleReset}>Reset</button>
        </Form>
      )}
    </Formik>
  );
};
