import { proxy } from 'valtio';
import { devtools } from 'valtio/utils';

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

type StepDataKeys = 'stepA' | 'stepB' | 'stepC';

type Template = 'ABC' | 'ACB';

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

const initialState: OnboardingData = {
  isChooseTemplate: false,
  template: undefined,
  activeStep: 0,
  isFormDone: false,
  showReview: false,
  showSuccess: false,
  stepA: { fullName: '', idNumber: '' },
  stepB: { email: '', phone: '', dateOfBirth: '' },
  stepC: { purposes: [] },
};

interface OnboardingStoreType extends OnboardingData  {
  onChooseTemplate: (template: Template) => void;
  setData: (
    step: StepDataKeys,
    data: StepAData | StepBData | StepCData
  ) => void;
  onBackToChooseTemplate: () => void;
  onNext: () => void;
  onBack: () => void;
  onBackToEditForm: () => void;
  onComplete: () => void;
}

function onboardingStore() {
  const store: OnboardingStoreType = {
    ...initialState,
    onChooseTemplate: (template: Template) => {
      OnboardingStore.isChooseTemplate = true;
      OnboardingStore.template = template;
    },
    setData : (
      step: StepDataKeys,
      data: StepAData | StepBData | StepCData
    ) => {
        switch (step) {
          case 'stepA':
            OnboardingStore.stepA = data as StepAData;
            break;
          case 'stepB':
            OnboardingStore.stepB = data as StepBData;
            break;
          case 'stepC':
            OnboardingStore.stepC = data as StepCData;
            break;
        }
    },
    onBackToChooseTemplate : () => {
      OnboardingStore.isChooseTemplate = false;
      OnboardingStore.template = undefined;
      OnboardingStore.activeStep = 0;
      OnboardingStore.isFormDone = false;
      OnboardingStore.showReview = false;
      OnboardingStore.showSuccess = false;
      OnboardingStore.stepA = { fullName: '', idNumber: '' };
      OnboardingStore.stepB = { email: '', phone: '', dateOfBirth: '' };
      OnboardingStore.stepC = { purposes: [] }
    },
    onNext : () => {
      const nextStep = OnboardingStore.activeStep + 1;
       // TODO: Hardcoded length to avoid circular dependency
      if (nextStep < 3) {
        OnboardingStore.activeStep = nextStep;
      } else {
        OnboardingStore.showReview = true;
      }
    },
    onBack : () => {
      const prevStep = OnboardingStore.activeStep - 1;
      if (prevStep >= 0) {
        OnboardingStore.activeStep = prevStep;
      }
    },
    onBackToEditForm: () => {
      OnboardingStore.showReview =  false;
      OnboardingStore.activeStep = 2;
    },
    onComplete: () => {
      OnboardingStore.showSuccess = true;
    },
  }
  
  return store;
}

const OnboardingStore = proxy<OnboardingStoreType>(onboardingStore());
devtools(OnboardingStore, {
  name: 'ONBOARDING_STORE',
});

export default OnboardingStore;