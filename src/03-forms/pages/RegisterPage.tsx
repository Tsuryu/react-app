import "../styles/styles.css";
import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const { formData, onChange } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const { name, email, password1, password2 } = formData;

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Register page</h1>
      <form noValidate onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password1"
          value={password1}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Repeat password"
          name="password2"
          value={password2}
          onChange={onChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};
