import React, { useCallback, useState } from "react";
import FormProvider from "../../components/HookForm/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, IconButton, InputAdornment, Link, Stack, Typography } from "@mui/material";
import RHFTextField from "../../components/HookForm/RHFTextField";
import { Eye, EyeSlash } from "phosphor-react";
import { Link as RouterLink} from "react-router-dom";



function ProfileForm() {
  const LoginSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required"),
    about: Yup.string().required("About  is Required"),
    avatarurl: Yup.string().required("Avtar is Required"),

  });
  const initialvalues = {
   name:"",
   about:"",
   avatarurl:""
  };
  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    initialvalues,
  });
  const {
    reset,
    watch,
    setValue,
    control,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const value=watch();

  const handleDrop=useCallback((acceptedFile)=>{
const file=acceptedFile[0];
const newFile=Object.assign(file,{
    preview:URL.createObjectURL(file)
})
if(file){ 
    setValue("avatarurl",newFile,{shouldValidate:"true"})
}
  },[setValue])

  const onSubmit = (data) => {
    try {
    } catch (err) {
      reset();
      setError("afterSubmit", { ...err, message: err.message });
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
      </Stack>
      <Stack spacing={2}>

      <RHFTextField  name="name" label="Name" />
      <RHFTextField  multiline rows={4} maxRows={5} name="about" label="About" />
</Stack>

    <Button type="submit" fullWidth color="inherit" size="large" variant="container" sx={{bgcolor:"text.primary",color:"white", "&:hover":{bgcolor:"green"}}}>
        Login
    </Button>
    </FormProvider>
  );
}

export default ProfileForm;
