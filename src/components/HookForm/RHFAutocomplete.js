import React from "react";
import PropTypes from 'prop-types';
import { useFormContext, Controller } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";
RHFAutocomplete.propTypes = {
  name: PropTypes.string,
  label:PropTypes.string,
  helperText: PropTypes.node,
};

function RHFAutocomplete({ name,label, helperText, ...other }) {
  const { control,setValue } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          value={
            typeof field.value==="number" && field.value===0 ? "" : field.value
          }
          onChange={(event,newvalue)=>setValue(name,newvalue,{shouldValidate:true})}
          fullWidth
          renderInput={(params)=>(
            <TextField label={label} error={!!error}
            helperText={error ? error.message : helperText} {...params} />
          )}
          {...other}
        />

      )}
    />
  );
}

export default RHFAutocomplete;
