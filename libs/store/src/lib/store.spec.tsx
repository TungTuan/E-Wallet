import { act } from '@testing-library/react';
import OnboardingStore from './store';
import { StepAData, StepBData, StepCData } from '@e-wallet/shared/interface';
describe('Test Onboarding Store', () => {
  afterEach(() => {
    // Reset the store to its initial state after each test
    act(() => {
      OnboardingStore.isChooseTemplate = false;
      OnboardingStore.template = undefined;
      OnboardingStore.activeStep = 0;
      OnboardingStore.isFormDone = false;
      OnboardingStore.showReview = false;
      OnboardingStore.showSuccess = false;
      OnboardingStore.stepA = { fullName: '', idNumber: '' };
      OnboardingStore.stepB = { email: '', phone: '', dateOfBirth: '' };
      OnboardingStore.stepC = { purposes: [] };
    });
  });

  it('should update stepA data', () => {
    const newData: StepAData = {
      fullName: 'Tony stark',
      idNumber: '123456',
    };

    act(() => {
      OnboardingStore.setData('stepA', newData);
    });

    expect(OnboardingStore.stepA).toEqual(newData);
  });

  it('should update StepBData data', () => {
    const newData: StepBData = {
      email: 'tony@gmail.com',
      phone: '123456789',
      dateOfBirth: '01/01/2000',
    };

    act(() => {
      OnboardingStore.setData('stepB', newData);
    });

    expect(OnboardingStore.stepB).toEqual(newData);
  });

  it('should update StepCData data', () => {
    const newData: StepCData = {
      purposes: ['loan', 'investment'],
    };

    act(() => {
      OnboardingStore.setData('stepC', newData);
    });

    expect(OnboardingStore.stepC).toEqual(newData);
  });

  it('should move to next step', () => {
    act(() => {
      OnboardingStore.onNext();
    });

    expect(OnboardingStore.activeStep).toBe(1);
  });

  it('should move to back step', () => {
    act(() => {
      OnboardingStore.onNext();
    });
    act(() => {
      OnboardingStore.onBack();
    });
    expect(OnboardingStore.activeStep).toBe(0);
  });

  it('should on Choose Template ABC', () => {
    act(() => {
      OnboardingStore.onChooseTemplate('ABC');
    });
    expect(OnboardingStore.template).toEqual('ABC');
  });

  it('should on Choose Template ACB', () => {
    act(() => {
      OnboardingStore.onChooseTemplate('ACB');
    });
    expect(OnboardingStore.template).toEqual('ACB');
  });

  it('should on Re Choose Template', () => {
    const newData: StepCData = {
      purposes: ['loan', 'investment'],
    };

    act(() => {
      OnboardingStore.setData('stepC', newData);
    });

    act(() => {
      OnboardingStore.onBackToChooseTemplate();
    });
    expect(OnboardingStore.stepC).toEqual({ purposes: [] });
  });

  it('should move to onBackToEditForm', () => {
    act(() => {
      OnboardingStore.onBackToEditForm();
    });

    expect(OnboardingStore.activeStep).toBe(2);
    expect(OnboardingStore.showReview).toBe(false);
  });

  it('should move to onComplete', () => {
    act(() => {
      OnboardingStore.onComplete();
    });

    expect(OnboardingStore.showSuccess).toBe(true);
  });
});
