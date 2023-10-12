import { useMemo, useState } from "react";
import { validateField } from "../utils/validation";

const useValidation = (validationSchema, submitForm) => {
  // states
  const [data, setData] = useState({});
  const [touched, setTouched] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // memos
  const errors = useMemo(() => {
    const errors = {};
    if (!validationSchema) return {};
    Object.keys(validationSchema).map((key) => {
      if (Array.isArray(data[key]))
        return console.error("data is an array, needs attention");
      const error = validateField(
        data[key]?.toString(), // TODO: this will not allow it take arrays, change later
        validationSchema?.[key]
      );
      errors[key] = error;
    });
    return errors;
  }, [data, validationSchema]);

  //   functions
  const handleFieldChanges = (name, value) => {
    setData({ ...data, [name]: value });
  };
  const handleFieldTouched = (name) => {
    setTouched({ ...touched, [name]: true });
  };
  const showError = (name) => {
    return (touched[name] || hasSubmitted) && errors[name]?.message;
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    if (Object.values(errors).find((error) => error?.message)) return;
    setLoading(true);
    await submitForm(data);
    setLoading(false);
  };
  const resetForm = () => {
    setData({});
    setTouched({});
    setHasSubmitted(false);
  };

  return {
    data,
    touched,
    errors,
    loading,
    setFieldValue: handleFieldChanges,
    setFieldTouched: handleFieldTouched,
    showError,
    handleFormSubmit,
    resetForm,
  };
};

export default useValidation;
