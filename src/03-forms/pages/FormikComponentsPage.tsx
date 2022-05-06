import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export const FormikComponentsPage = () => {
  return (
    <div>
      <h1>FormikComponentsPage</h1>

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
            <label htmlFor="firstName">First name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email address</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job type</label>
            <Field name="jobType" as="select">
              <option value="">Pick job type</option>
              <option value="DEV">Developer</option>
              <option value="BA">Business Analyst</option>
              <option value="QA">Tester</option>
              <option value="PO">Product Owner</option>
              <option value="SM">Scrum Master</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field name="terms" type="checkbox" />
              Terms and conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Send</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
