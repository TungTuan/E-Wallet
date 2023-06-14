export interface StepAData {
  fullName: string;
  idNumber: string;
}

export interface StepBData {
  email: string;
  phone: string;
  dateOfBirth: string;
}

export interface StepCData {
  purposes: string[];
}

export type StepDataKeys = 'stepA' | 'stepB' | 'stepC';

export type Template = 'ABC' | 'ACB';
export interface OnboardingData {
  isChooseTemplate: boolean;
  template: Template | undefined;
  activeStep: number;
  isFormDone: boolean;
  showReview: boolean;
  showSuccess: boolean;
  stepA: StepAData;
  stepB: StepBData;
  stepC: StepCData;
}
