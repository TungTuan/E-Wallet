import { lazy, LazyExoticComponent } from 'react';
import { Template } from '@e-wallet/shared/interface';

interface Step {
  label: string;
  component: LazyExoticComponent<any>; // Update the type based on the component props
  description: string;
}

interface Templates {
  data: Step[];
  key: Template;
}

const StepA = lazy(() => import('@e-wallet/basic-info'));
const StepB = lazy(() => import('@e-wallet/additional-info'));
const StepC = lazy(() => import('@e-wallet/purpose'));

export const templateABC: Step[] = [
  {
    label: 'Basic Information',
    component: StepA,
    description: 'Enter your full name and ID number',
  },
  {
    label: 'Additional Information',
    component: StepB,
    description: 'Enter your email address, phone number, and date of birth',
  },
  {
    label: 'Purpose',
    component: StepC,
    description: 'Select one or more purposes for using the e-wallet product',
  },
];

export const templateACB: Step[] = [
  {
    label: 'Basic Information',
    component: StepA,
    description: 'Enter your full name and ID number',
  },

  {
    label: 'Purpose',
    component: StepC,
    description: 'Select one or more purposes for using the e-wallet product',
  },

  {
    label: 'Additional Information',
    component: StepB,
    description: 'Enter your email address, phone number, and date of birth',
  },
];

export const templates: Templates[] = [
  {
    data: templateABC,
    key: 'ABC',
  },
  {
    data: templateACB,
    key: 'ACB',
  },
];
