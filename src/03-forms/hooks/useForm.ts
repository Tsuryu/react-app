import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialState: T) => {
  const [formData, setFormData] = useState(initialState);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target ?? {};
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return {
    formData,
    onChange: handleOnChange,
  };
};
