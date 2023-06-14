import { Box, Card, CardBody, CardHeader, Heading } from '@chakra-ui/react';
import { templates } from '@e-wallet/config-step';
import { useSnapshot } from 'valtio';
import { OnboardingStore } from '@e-wallet/store';
import { Template } from '@e-wallet/shared/interface';
/* eslint-disable-next-line */
export interface ChooseTemplateProps {}
export function ChooseTemplate(props: ChooseTemplateProps) {
  const { onChooseTemplate } = useSnapshot(OnboardingStore);
  const handleOnChooseTemplate = (template: Template) => {
    onChooseTemplate(template);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ background: '#efeff1', padding: '3rem', minHeight: '100vh' }}
    >
      <Card sx={{ minWidth: '40%' }}>
        <CardHeader>
          <Heading size="md" id={'choose-template'}>
            Choose Onboarding flow
          </Heading>
        </CardHeader>

        <CardBody>
          <Box display={'flex'} flex="wrap" justifyContent={'space-around'}>
            {templates.map((template) => (
              <Card
                data-testid={`template${template.key}`}
                sx={{
                  padding: '1rem',
                  margin: '0.2rem',
                  cursor: 'pointer',
                  ':hover': {
                    backgroundColor: 'gray.50',
                  },
                }}
                onClick={() => handleOnChooseTemplate(template.key)}
              >
                {template.data.map((template, index) => (
                  <Box key={template.label}>
                    {index + 1} - {template.label}
                  </Box>
                ))}
              </Card>
            ))}
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}

export default ChooseTemplate;
