import React from 'react';
import { useForm } from 'react-hook-form';
import { Checkbox, Button, FormHelperText, Box, FormControl, FormLabel } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useSnapshot } from "valtio";
import {OnboardingStore} from "@e-wallet/store";

const schema = Yup.object().shape({
  purposes: Yup.array().min(1, 'At least one option must be selected'),
});

const purposeData = [
  {
    label: 'Money Transfer',
    value: 'money-transfer',
  },
  {
    label: 'Payment,',
    value: 'payment,',
  },
  {
    label: 'Bill Payment',
    value: 'bill-payment',
  },
  {
    label: 'loan',
    value: 'Loan',
  },
  {
    label: 'Investment',
    value: 'investment',
  },
  {
    label: 'Saving',
    value: 'saving,',
  }
]

interface StepCFormInputs {
  purposes: string[];
}


const Purpose = () => {
  const { setData, onNext, onBack, stepC } = useSnapshot(OnboardingStore);
  const { handleSubmit, register, formState: { errors } } = useForm<StepCFormInputs>(
    {
      resolver: yupResolver(schema)
    }
  );

  const onSubmit = (data: StepCFormInputs) => {
    console.log(data);
    setData('stepC', data);
    onNext();
  };

  return (
    <Box m="5">
      <form onSubmit={handleSubmit(onSubmit)}>
      <   FormControl mb="2rem">
          <FormLabel>Options</FormLabel>
          {
            purposeData.map(purpose => (
              <Box  key={purpose.value} >
                <Checkbox {...register('purposes')} 
                  value={purpose.value} 
                  defaultChecked={stepC.purposes.includes(purpose.value)}>
                  {purpose.label}
                </Checkbox>
              </Box>
            ))
          }
          {errors && errors.purposes && (
                <FormHelperText color="red">
                  {errors.purposes.message && errors.purposes.message}
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


export default Purpose;
