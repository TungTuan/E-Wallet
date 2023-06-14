# EWallet

EWallet is an application build with React, Chakra UI, React Hook Form, Valtio and Yup. with some feature such as Multi-step onboarding process, Validation, state management, and Chakra for a good experience

## Prerequisites
  - Node.js (version >= 16.x.x)
  - npm (version >= 8.x.x)
  
## Architecture

The project uses the Nx monorepo workspace, which allows for better code organization, reusability, and extensibility. The application is built with React and utilizes Vite as the build tool, providing faster build times and HMR (Hot Module Replacement) capabilities. For test, The project use Vitest for Unit test and Cypress for e2e test.

# Getting Started
Getting Started First, clone the repository and navigate to the project folder:
```
git clone git@github.com:TungTuan/E-Wallet.git
cd E-Wallet
```
Install the project dependencies:
```
npm install
```
To start the development server:
```
npm start
```
The application will be available at http://localhost:4200.

## Testing

To run unit test: 
```
npm run test:unit
```
To run e2e test: 
```
npm run test:e2e
```
## Technologies Used
- Technologies Used
- Nx Monorepo
- React
- Vitest for unit test.
- Cypress for e2e test.
- React Hook Form
- Valtio
- Yup
