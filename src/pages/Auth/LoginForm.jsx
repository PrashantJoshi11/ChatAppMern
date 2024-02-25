import React, { useState } from "react";
import FormProvider from "../../components/HookForm/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, IconButton, InputAdornment, Link, Stack, Typography } from "@mui/material";
import RHFTextField from "../../components/HookForm/RHFTextField";
import { Eye, EyeSlash } from "phosphor-react";
import { Link as RouterLink} from "react-router-dom";



function LoginForm() {
  const [showPass, setShowPass] = useState(false);
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid Email Address"),
    pass: Yup.string().required("Password  is Required"),
  });
  const initialvalues = {
    email: "",
    pass: "",
  };
  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    initialvalues,
  });
  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;
  
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

      <RHFTextField  name="email" label="Email address" />
      <RHFTextField  name="pass" label="Password" type={showPass?"text":"password"}  InputProps={{
          endAdornment: (
              <InputAdornment position="end">
        <IconButton onClick={()=>setShowPass(!showPass)}>
        {showPass?<Eye />:<EyeSlash />}
        </IconButton>
      </InputAdornment>
    ),
}}/>
</Stack>
    <Stack my={2} alignItems={"flex-end"}>
           <Link  color={"blue"} to="/auth/forgotPassword" component={RouterLink}>
          <Typography variant="article">ForgotPassword</Typography>
          </Link>
    </Stack>
    <Button type="submit" fullWidth color="inherit" size="large" variant="container" sx={{bgcolor:"text.primary",color:"white", "&:hover":{bgcolor:"green"}}}>
        Login
    </Button>
    </FormProvider>
  );
}

export default LoginForm;
