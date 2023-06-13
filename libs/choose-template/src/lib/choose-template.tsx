import { Box, Card, CardBody, CardHeader, Heading } from '@chakra-ui/react';
import { templateABC, templateACB } from '@e-wallet/constant';
import { useSnapshot } from "valtio";
import {OnboardingStore} from "@e-wallet/store";

/* eslint-disable-next-line */
export interface ChooseTemplateProps {}
type Template = 'ABC' | 'ACB';

export function ChooseTemplate(props: ChooseTemplateProps) {
  const { onChooseTemplate } = useSnapshot(OnboardingStore);
  const handleOnChooseTemplate = (template: Template) => {
    onChooseTemplate(template)
  };

  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    sx={{ background: '#efeff1', padding: '3rem', minHeight: '100vh' }}> 
     <Card sx={{ minWidth: '40%' }}>
     <CardHeader>
        <Heading size='md'>Choose Onboarding flow</Heading>
      </CardHeader>

      <CardBody>
        <Box display={'flex'} flex="wrap"  justifyContent={'space-around'}>
            <Card  sx={{
              padding: '1rem',
              margin: '0.2rem',
              cursor: 'pointer',
              ':hover': {
                backgroundColor: 'gray.50',
              },
              }} 
                onClick={() => handleOnChooseTemplate('ABC')}>
                {
                  templateABC.map((template, index) => (
                    <Box key={template.label}> {index + 1} - {template.label}</Box>
                  ))
                }
            </Card>

            <Card sx={{
              padding: '1rem',
              cursor: 'pointer',
              margin: '0.2rem',
              ':hover': {
                backgroundColor: 'gray.50',
              },
              }} 
                onClick={() => handleOnChooseTemplate('ACB')}>
                {
                  templateACB.map((template, index) => (
                    <Box key={template.label}>  {index + 1} - {template.label}</Box>
                  ))
                }
            </Card>
        </Box>
      </CardBody>
     </Card>
       
    </Box>


  );
}

export default ChooseTemplate;
