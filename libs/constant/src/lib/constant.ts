import { lazy, LazyExoticComponent } from 'react';

interface Step {
  label: string;
  component: LazyExoticComponent<any>; // Update the type based on the component props
  description: string;
}

const StepA = lazy(() => import('@e-wallet/basic-info'));
const StepB = lazy(() => import('@e-wallet/additional-info'));
const StepC = lazy(() => import('@e-wallet/purpose'));

export const templateABC: Step[] = [
  {
    label: 'Basic Information',
    component: StepA,
    description: 'Collect full name and ID number from the user',
  },
  {
    label: 'Additional Information',
    component: StepB,
    description: 'Gather email address, phone number, and date of birth from the user',
  },
  {
    label: 'Purpose',
    component: StepC,
    description:
      'Chose one or multiple options',
  },
];

export const templateACB: Step[] = [
  {
    label: 'Basic Information',
    component: StepA,
    description: 'Collect full name and ID number from the user',
  },

  {
    label: 'Purpose',
    component: StepC,
    description:
      'Chose one or multiple options',
  },
  
  {
    label: 'Additional Information',
    component: StepB,
    description: 'Gather email address, phone number, and date of birth from the user',
  },
];

