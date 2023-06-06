import { useState, useCallback } from "react";
import FormPageLayout from "../components/FormPageLayout/";

const FormContainer = () => {
  const [optionValue, setOptionChange] = useState({
    input: 0,
    textarea: 0,
    checkbox: 0,
  });

  const [formValue, setForm] = useState({
    input: 0,
    textarea: 0,
    checkbox: 0,
  });

  const handleChange = useCallback((event) => {
    const { value, name } = event.target;
    setOptionChange((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm({
      input: optionValue.input,
      textarea: optionValue.textarea,
      checkbox: optionValue.checkbox,
    });
  };

  return (
    <FormPageLayout
      optionValue={optionValue}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formValue={formValue}
    />
  );
};
export default FormContainer;
