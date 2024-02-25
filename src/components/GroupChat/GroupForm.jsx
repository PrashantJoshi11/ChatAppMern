import React, { useState } from "react";
import FormProvider from "../../components/HookForm/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "../../components/HookForm/RHFTextField";
import { Button, Stack } from "@mui/material";
import RHFAutocomplete from "../HookForm/RHFAutocomplete";
const MEMBER = ["people1", "people2"];

function Grpform() {
  const GroupformSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    members: Yup.array().min(2, "Must have atleast 2 members"),
  });
  const initialvalues = {
    title: "",
    members: [],
  };
  const methods = useForm({
    resolver: yupResolver(GroupformSchema),
    initialvalues,
  });
  const {
    reset,
    watch,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, isValid },
  } = methods;

  const onSubmit = (data) => {
    console.log("🚀 ~ file: GroupForm.jsx:33 ~ onSubmit ~ data:", data)
    try {
    } catch (err) {
      reset();
      setError("afterSubmit", { ...err, message: err.message });
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="title" label="Group Name" />
        <RHFAutocomplete
          name="members"
          label="Members"
          multiple
          freeSolo
          options={MEMBER.map((option) => option)}
          ChipPorps={{ size: "medium" }}
        />
      </Stack>
       <Button type="submit" fullWidth color="inherit" size="large" variant="container" sx={{bgcolor:"text.primary",color:"white", "&:hover":{bgcolor:"green"}, marginTop:"20px"}}>
       Create
    </Button>
    </FormProvider>
  );
}

export default Grpform;
