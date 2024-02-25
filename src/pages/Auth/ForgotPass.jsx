import { Container, Link, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import FormProvider from "../../components/HookForm/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, IconButton, InputAdornment } from "@mui/material";
import RHFTextField from "../../components/HookForm/RHFTextField";
import { Eye, EyeSlash } from "phosphor-react";
import SocialLogo from "../../components/Section/Auth/SocialLogo";

function ForgotPass() {
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid Email Address"),
  });
  const initialvalues = {
    email: "",
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
      <Stack spacing={2} mt={5} >
        <Stack alignItems={"center"}>
        <Typography variant="h4">Forgot Password</Typography>
        </Stack>
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
            <RHFTextField name="email" label="Email address" />
          </Stack>
          <Stack my={2} alignItems={"flex-end"}>
         
          </Stack>
          <Button
            type="submit"
            fullWidth
            color="inherit"
            size="large"
            variant="container"
            sx={{
              bgcolor: "text.primary",
              color: "white",
              "&:hover": { bgcolor: "green" },
            }}
          >
          Submit
          </Button>
        </FormProvider>
      </Stack>
      <SocialLogo />
    </Container>
  );
}

export default ForgotPass;
