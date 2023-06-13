import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSnapshot } from "valtio";
import {OnboardingStore} from "@e-wallet/store";

const REQUIRED_VALIDATION = (label: string) => {
  return `${label} is Required!`;
};

interface StepBFormInputs {
  email: string;
  phone: string;
  dateOfBirth: string;
}


const AdditionalInfo = () => {
  const { setData, onNext, onBack, stepB } = useSnapshot(OnboardingStore);

  const schema = yup
    .object()
    .shape({
      email: yup.string().trim().email().required(REQUIRED_VALIDATION("Email")),
      phone: yup.string().required(REQUIRED_VALIDATION("Phone Number")),
      dateOfBirth: yup.string().required(REQUIRED_VALIDATION("Date of birth")),
    })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StepBFormInputs>({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: stepB,
  });

  const onSubmit = (values: StepBFormInputs) => {
    setData('stepB', values);
    onNext();
  };

  return (
    <Box m="5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl sx={{mb: '2rem'}}>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input id="email" type="email" {...register("email")} />
          {errors && errors.email && (
            <FormHelperText color="red">
              {errors.email.message && errors.email.message}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl sx={{mb: '2rem'}}>
          <FormLabel htmlFor="phone">Phone Number</FormLabel>
          <Input id="phone" type="text" {...register("phone")} />
          {errors && errors.phone && (
            <FormHelperText color="red">
              {errors.phone.message && errors.phone.message}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl sx={{mb: '2rem'}}>
          <FormLabel htmlFor="dateOfBirth">Date Of Birth</FormLabel>
          <Input id="dateOfBirth" type="date" {...register("dateOfBirth")} />
          {errors && errors.dateOfBirth && (
            <FormHelperText color="red">
              {errors.dateOfBirth.message && errors.dateOfBirth.message}
            </FormHelperText>
          )}
        </FormControl>
        <Box display="flex">
          <Button onClick={onBack} colorScheme="gray" flex="1">
            Back
          </Button>
          <Button type="submit" colorScheme="blue" flex="1">
            Next
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AdditionalInfo;
