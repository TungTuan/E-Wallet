import { Box, Button, Card, Text } from '@chakra-ui/react';
import { useSnapshot } from 'valtio';
import { OnboardingStore } from '@e-wallet/store';
import { purposeData } from '@e-wallet/shared/constant';

/* eslint-disable-next-line */
export interface ReviewPageProps {}

export function ReviewPage(props: ReviewPageProps) {
  const { stepA, stepB, stepC, onBackToEditForm, onComplete } =
    useSnapshot(OnboardingStore);
  const generatePurposeName = (purpose: string) => {
    const currentPurpose = purposeData.find((el) => el.value === purpose);
    return currentPurpose ? currentPurpose.label : '';
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ background: '#efeff1', padding: '3rem', minHeight: '100vh' }}
    >
      <Card sx={{ minWidth: '50%', padding: '3rem' }}>
        <Box id={'review-page'}>
          <Box sx={{ width: '100%', marginBottom: '2rem' }}>
            <Text fontSize="2xl">Basic Information:</Text>
            <Text id={'full-name'}>- Full Name: {stepA.fullName}</Text>
            <Text id={'id-number'}>- ID Number: {stepA.idNumber}</Text>
          </Box>
          <Box sx={{ width: '100%', marginBottom: '2rem' }}>
            <Text fontSize="2xl">Additional Information:</Text>
            <Text id={'email'}>- Email: {stepB.email}</Text>
            <Text id={'phone'}>- Phone Number: {stepB.phone}</Text>
            <Text id={'date-of-birth'}>
              - Date of Birth: {stepB.dateOfBirth}
            </Text>
          </Box>
          <Box sx={{ width: '100%', marginBottom: '2rem' }}>
            <Text fontSize="2xl">Purposes:</Text>
            <Box style={{ margin: 0 }}>
              {stepC.purposes.map((purpose, index) => (
                <Text key={index}>- {generatePurposeName(purpose)}</Text>
              ))}
            </Box>
          </Box>
        </Box>
        <Box display="flex">
          <Button onClick={onBackToEditForm} colorScheme="gray" flex="1">
            Back
          </Button>
          <Button onClick={onComplete} colorScheme="green" flex="1">
            Completed
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

export default ReviewPage;
