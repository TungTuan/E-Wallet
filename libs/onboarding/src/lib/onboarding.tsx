import {
  Box,
  Heading,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Card, CardHeader, CardBody, Stack, StackDivider, Text
} from '@chakra-ui/react';
import { templateABC, templateACB } from '@e-wallet/constant';
import { useSnapshot } from "valtio";
import {OnboardingStore} from "@e-wallet/store";
import { Suspense } from 'react';
import {ChooseTemplate} from "@e-wallet/choose-template";
import {ReviewPage} from "@e-wallet/review-page";
import {SuccessPage} from "@e-wallet/success-page";
/* eslint-disable-next-line */

export function Onboarding() {
  const { activeStep, template, isChooseTemplate, showReview, showSuccess } = useSnapshot(OnboardingStore);
  const steps = template === 'ABC' ? templateABC : templateACB;
  const StepComponent = steps[activeStep].component;

  const renderContent = () => { 
    if (showSuccess) {
      return < SuccessPage/>;
    }

    if (showReview) {
      return < ReviewPage/>;
    }
    if (!isChooseTemplate) {
      return < ChooseTemplate/>;
    }

    return (
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ background: '#efeff1', padding: '2rem', minHeight: '100vh' }}> 
        <Card sx={{ minWidth: '50%' }}>
      
      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
            <Stepper index={activeStep}>
              {steps.map((step, index) => (
                <Step key={index}>
                    <Box display="flex" flexDirection={'column'} alignItems={'center'}>
                      <StepIndicator>
                      <StepStatus
                        complete={<StepIcon />}
                        incomplete={<StepNumber />}
                        active={<StepNumber />}
                      />
                    </StepIndicator>
          
                    <Box flexShrink='0' textAlign={'center'} mt={'1rem'}>
                      <StepTitle>{step.label}</StepTitle>
                    </Box>
                    </Box>
                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
            <Text textAlign={'center'} fontSize='lg'>{steps[activeStep].description}</Text>
          <Box>
            <StepComponent />
          </Box>
        </Stack>
      </CardBody>
    </Card>
      
    </Box>
    
    )
  };
  
  return <Suspense>{renderContent()}</Suspense>;
}

export default Onboarding;
