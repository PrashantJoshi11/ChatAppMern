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

function GeneratePass() {
  const [showPass, setShowPass] = useState(false);
  const LoginSchema = Yup.object().shape({
    pass: Yup.string().required("Password  is Required"),
    confirmpass: Yup.string().required("Password  is Required"),

  });
  const initialvalues = {
    pass: "",
    confirmpass:""
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
    <Typography variant='h5'>Generate New Password</Typography>
    <Stack direction={"row"} spacing={1}>
    <Link to="/auth/login" component={RouterLink}>
          <Typography variant="article">Return to SignIn </Typography>
          </Link>
    </Stack>
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
      </Stack>
      <Stack spacing={2}>
      <RHFTextField  name="pass" label="Password" type={showPass?"text":"password"}  InputProps={{
          endAdornment: (
              <InputAdornment position="end">
        <IconButton onClick={()=>setShowPass(!showPass)}>
        {showPass?<Eye />:<EyeSlash />}
        </IconButton>
      </InputAdornment>
    ),
}}/>
   <RHFTextField  name="Confirmpass" label="Confirm-Password" type={showPass?"text":"password"}  InputProps={{
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
      
    </Stack>
    <Button type="submit" fullWidth color="inherit" size="large" variant="container" sx={{bgcolor:"text.primary",color:"white", "&:hover":{bgcolor:"green"}}}>
       Submit
    </Button>
    </FormProvider> 
    </Stack>
  
   </Container>
  )
}

export default GeneratePass