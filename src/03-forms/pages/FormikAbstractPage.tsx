import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";
import { TextInput, Select, Checkbox } from "../components";

export const FormikAbstractPage = () => {
  return (
    <div>
      <h1>FormikAbstractPage</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log("MYLOG.values", values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "No more than 15 characters")
            .required("Required"),
          lastName: Yup.string()
            .max(10, "No more than 10 characters")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          terms: Yup.boolean().isTrue("Should accept terms and conditions"),
          jobType: Yup.string()
            .notOneOf(["SM"], "Not available")
            .required("Required"),
        })}
      >
        {() => (
          <Form>
            <TextInput
              label="First name"
              name="firstName"
              placeholder="Please enter your name"
            />

            <TextInput
              label="Last name"
              name="lastName"
              placeholder="Please enter your last name"
            />

            <TextInput
              label="Email address"
              name="email"
              type="email"
              placeholder="Please enter your email"
            />

            <Select label="Job type" name="jobType">
              <option value="">Pick job type</option>
              <option value="DEV">Developer</option>
              <option value="BA">Business Analyst</option>
              <option value="QA">Tester</option>
              <option value="PO">Product Owner</option>
              <option value="SM">Scrum Master</option>
            </Select>

            <Checkbox label="Terms and conditions" name="terms" />

            <button type="submit">Send</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
