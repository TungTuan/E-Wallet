import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Button,
  Text,
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSnapshot } from 'valtio';
import { OnboardingStore } from '@e-wallet/store';

const REQUIRED_VALIDATION = (label: string) => {
  return `${label} is Required!`;
};

interface StepAFormInputs {
  fullName: string;
  idNumber: string;
}

const BasicInfo = () => {
  const { setData, onNext, onBackToChooseTemplate, stepA } =
    useSnapshot(OnboardingStore);

  const schema = yup.object().shape({
    fullName: yup.string().trim().required(REQUIRED_VALIDATION('Full Name')),
    idNumber: yup.string().trim().required(REQUIRED_VALIDATION('Id Number')),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StepAFormInputs>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
    defaultValues: stepA,
  });

  const onSubmit = (values: StepAFormInputs) => {
    setData('stepA', values);
    onNext();
  };

  return (
    <Box m="5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl sx={{ mb: '2rem' }}>
          <FormLabel htmlFor="fullName">Full Name</FormLabel>
          <Input
            id="fullName"
            type="text"
            {...register('fullName')}
            placeholder="Full Name"
          />
          {errors && errors.fullName && (
            <FormHelperText color="red" id="errorMessageFullName">
              {errors.fullName.message && errors.fullName.message}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl sx={{ mb: '2rem' }}>
          <FormLabel htmlFor="idNumber">Id Number</FormLabel>
          <Input
            id="idNumber"
            type="idNumber"
            {...register('idNumber')}
            placeholder="Id Number"
          />
          {errors && errors.idNumber && (
            <FormHelperText color="red" id="errorMessageIdNumber">
              {errors.idNumber.message && errors.idNumber.message}
            </FormHelperText>
          )}
        </FormControl>
        <Box display="flex">
          <Button onClick={onBackToChooseTemplate} colorScheme="gray" flex="1">
            Choose template
          </Button>
          <Button type="submit" colorScheme="blue" flex="1">
            Next
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default BasicInfo;
