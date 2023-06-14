import { proxy } from 'valtio';
import { devtools } from 'valtio/utils';
import {
  OnboardingData,
  StepAData,
  StepBData,
  StepCData,
  StepDataKeys,
  Template,
} from '@e-wallet/shared/interface';

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

interface OnboardingStoreType extends OnboardingData {
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
    setData: (step: StepDataKeys, data: StepAData | StepBData | StepCData) => {
      // @ts-ignore
      OnboardingStore[step] = data;
    },
    onBackToChooseTemplate: () => {
      OnboardingStore.isChooseTemplate = false;
      OnboardingStore.template = undefined;
      OnboardingStore.activeStep = 0;
      OnboardingStore.isFormDone = false;
      OnboardingStore.showReview = false;
      OnboardingStore.showSuccess = false;
      OnboardingStore.stepA = { fullName: '', idNumber: '' };
      OnboardingStore.stepB = { email: '', phone: '', dateOfBirth: '' };
      OnboardingStore.stepC = { purposes: [] };
    },
    onNext: () => {
      const nextStep = OnboardingStore.activeStep + 1;
      // TODO: Hardcoded length to avoid circular dependency
      if (nextStep < 3) {
        OnboardingStore.activeStep = nextStep;
      } else {
        OnboardingStore.showReview = true;
      }
    },
    onBack: () => {
      const prevStep = OnboardingStore.activeStep - 1;
      if (prevStep >= 0) {
        OnboardingStore.activeStep = prevStep;
      }
    },
    onBackToEditForm: () => {
      OnboardingStore.showReview = false;
      OnboardingStore.activeStep = 2;
    },
    onComplete: () => {
      OnboardingStore.showSuccess = true;
    },
  };

  return store;
}

const OnboardingStore = proxy<OnboardingStoreType>(onboardingStore());
devtools(OnboardingStore, {
  name: 'ONBOARDING_STORE',
});

export default OnboardingStore;
