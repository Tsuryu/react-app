import React from "react";

import { Formik, Form } from "formik";
import data from "../data/customForm.json";
import { Select, TextInput } from "../components";
import * as Yup from "yup";

interface IData {
  [key: string]: any;
}

// const initialValues: IData = data.reduce(
//   (prev, { name, value }) => ({ ...prev, [name]: value }),
//   {}
// );

const requiredFields: IData = {};
const initialValues: IData = {};
for (const element of data) {
  initialValues[element.name] = element.value;

  if (!element.validations) continue;
  let schema = Yup.string();
  for (const validation of element.validations) {
    if (validation.type === "required") schema = schema.required("Required");
    if (validation.type === "minLenght")
      schema = schema.min(
        (validation as any).value,
        "The value should be longer than " + (validation as any).value
      );
    if (validation.type === "email") schema = schema.email("Invalid email");
  }

  requiredFields[element.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>DynamicFormPage</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log("MYLOG.values", values);
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            {data.map(({ label, name, type, placeholder, options }) => {
              switch (type) {
                case "text":
                case "email":
                case "password":
                  return (
                    <TextInput
                      key={name}
                      label={label}
                      name={name}
                      placeholder={placeholder}
                      type={type as any}
                    />
                  );
                case "select":
                  return (
                    <Select label={label} name={name} key={name}>
                      <option value="" key="no-selection">
                        Select an option
                      </option>
                      {options?.map(({ id, label }) => (
                        <option value={id} key={id}>
                          {label}
                        </option>
                      ))}
                    </Select>
                  );
                default:
                  return <span>Error</span>;
              }
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
