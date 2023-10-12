import { FormHelperText } from "@mui/material";

// core components
import AppInput from "../AppInput";

const AppFormInput = (props) => {
  const { value, onChange, name, multiline, adornment, error, ...restProps } =
    props;
  return (
    <>
      <AppInput
        name={name}
        value={value}
        onChange={onChange}
        error={error}
        multiline={multiline}
        adornment={adornment}
        {...restProps}
      />
      {error && <FormHelperText error>{error}</FormHelperText>}
    </>
  );
};

export default AppFormInput;
