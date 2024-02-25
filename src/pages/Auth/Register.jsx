import { Container, Link, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import FormProvider from "../../components/HookForm/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, IconButton, InputAdornment} from "@mui/material";
import RHFTextField from "../../components/HookForm/RHFTextField";
import { Eye, EyeSlash } from "phosphor-react";
import SocialLogo from '../../components/Section/Auth/SocialLogo'

function Register() {
  const [showPass, setShowPass] = useState(false);
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid Email Address"),
    firstname: Yup.string().required("First Name  is Required"),
    lastname: Yup.string().required("Last Name is Required"),
    pass: Yup.string().required("Password  is Required"),
  });
  const initialvalues = {
    firstname:"",
    lastname:"",  
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
    <Container>
        
    <Stack spacing={2} mt={5}>
    <Typography variant='h5'>Register</Typography>
    <Stack direction={"row"} spacing={1}>
        <Typography variant='article'>Already have an account? </Typography>
        <Link to="auth/register" component={RouterLink}>Login In </Link>
    </Stack>
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
      </Stack>
      <Stack spacing={2}>
      <RHFTextField  name="firstname" label="First Name" />
      <RHFTextField  name="lastname" label="Last Name" />
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
        <Link color="blue">
    <Typography>Forgot Password</Typography>
        </Link>
    </Stack>
    <Button type="submit" fullWidth color="inherit" size="large" variant="container" sx={{bgcolor:"text.primary",color:"white", "&:hover":{bgcolor:"green"}}}>
        Register
    </Button>
    </FormProvider> 
    </Stack>
    <SocialLogo />  
   </Container>
  )
}

export default Register