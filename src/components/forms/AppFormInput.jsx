import React from "react";
import { FormHelperText } from "@mui/material";

// core components
import AppInput from "../AppInput";

import { formatSentence } from "../../utils/index";

const AppFormInput = (props) => {
  const {
    value,
    onChange,
    name,
    regex,
    multiline,
    adornment,
    errors,
    ...restProps
  } = props;
  return (
    <>
      <AppInput
        value={value}
        onChange={onChange}
        error={!value[name] && errors[name]}
        multiline={multiline}
        adornment={adornment}
        {...restProps}
      />
      {!value[name] && errors[name] && (
        <FormHelperText error>{formatSentence(errors[name]?.replace(/_/g, ' '))}</FormHelperText>
      )}
    </>
  );
};

export default AppFormInput;
