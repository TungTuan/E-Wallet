import styles from './e-wallet-container.module.scss';
import {
  Box,
  Heading,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Button,
  useSteps,
  Card, CardHeader, CardBody, Stack, StackDivider, Text
} from '@chakra-ui/react'
/* eslint-disable-next-line */
export interface EWalletContainerProps {}

const steps = [
  { title: 'First', description: 'Contact Info' },
  { title: 'Second', description: 'Date & Time' },
  { title: 'Third', description: 'Select Rooms' },
]

export function EWalletContainer(props: EWalletContainerProps) {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  const handleNextStep = () => {
    setActiveStep(2)
  };

  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    sx={{ background: '#efeff1', padding: '2rem', minHeight: '100vh' }}> 
     <Card sx={{ minWidth: '70%' }}>
  <CardHeader>
    <Heading size='md'>Client Report</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Summary
        </Heading>
        <Stepper index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Overview
        </Heading>
          Form
      </Box>
      <Box>
        <Button colorScheme='blue' onClick={handleNextStep }>Button</Button>
      </Box>
    </Stack>
  </CardBody>
</Card>
    
  </Box>
  
  )
}

export default EWalletContainer;
