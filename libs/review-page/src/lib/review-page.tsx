import { Box, Button, Card, Text } from '@chakra-ui/react';
import { useSnapshot } from "valtio";
import {OnboardingStore} from "@e-wallet/store";

/* eslint-disable-next-line */
export interface ReviewPageProps {}

export function ReviewPage(props: ReviewPageProps) {
  const { stepA, stepB, stepC, onBackToEditForm, onComplete } = useSnapshot(OnboardingStore);
  return (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ background: '#efeff1', padding: '3rem', minHeight: '100vh' }}> 
        <Card sx={{ minWidth: '50%', padding: '3rem' }}>
          <Box>
            <Box sx={{ width: '100%', marginBottom: '2rem' }}>
              <Text fontSize='2xl'>Basic Information</Text>
              <Text>Full Name: {stepA.fullName}</Text>
              <Text>ID Number: {stepA.idNumber}</Text>
            </Box>
            <Box sx={{ width: '100%', marginBottom: '2rem' }}>
                <Text fontSize='2xl'>Additional Information</Text>
                <Text>Email: {stepB.email}</Text>
                <Text>Phone Number: {stepB.phone}</Text>
                <Text>Date of Birth: {stepB.dateOfBirth}</Text>
            </Box>
            <Box sx={{ width: '100%', marginBottom: '2rem' }}>
                <Text fontSize='2xl'>Purposes:</Text>
                  <Text style={{ margin: 0 }}>
                    {stepC.purposes.map((purpose, index) => (
                      <Text key={index}>- {purpose}</Text>
                    ))}
                  </Text>
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
