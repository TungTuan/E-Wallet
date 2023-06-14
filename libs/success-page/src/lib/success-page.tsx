import { Box, Card, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
/* eslint-disable-next-line */
export interface SuccessPageProps {}

export function SuccessPage(props: SuccessPageProps) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ background: '#efeff1', padding: '3rem', minHeight: '100vh' }}
    >
      <Card sx={{ minWidth: '50%', padding: '3rem' }}>
        <CheckCircleIcon w={200} h={200} color="green.500" margin="auto" />
        <Text
          margin="auto"
          fontSize="3xl"
          paddingTop="20px"
          id={'success-message'}
        >
          Thank you for providing your information!
        </Text>
      </Card>
    </Box>
  );
}

export default SuccessPage;
