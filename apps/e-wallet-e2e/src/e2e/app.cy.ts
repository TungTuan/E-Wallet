import { getGreeting } from '../support/app.po';

describe('e-wallet', () => {
  beforeEach(() => cy.visit('/'));

  it('should display Choose Onboarding', () => {
    cy.get('[id=choose-template]').should(
      'have.text',
      'Choose Onboarding flow'
    );
  });

  it('on test flow ABC', () => {
    cy.get('[id=templateABC]').click();
    cy.get('[id=onboading-title]').should(
      'have.text',
      'Enter your full name and ID number'
    );

    cy.get('[name=fullName]').type('Iron man');
    cy.get('[name=idNumber]').type('123456');

    cy.contains('button', 'Next').click();

    cy.get('[id=onboading-title]').should(
      'have.text',
      'Enter your email address, phone number, and date of birth'
    );

    cy.get('[name=email]').type('ironman@gmail.com');
    cy.get('[name=phone]').type('123456789');
    cy.get('[name=dateOfBirth]').type('2023-06-09');

    cy.contains('button', 'Next').click();

    cy.get('#money-transfer').click();
    cy.get('#money-transfer').get('.chakra-checkbox').eq(0).click();

    cy.contains('button', 'Next').click();

    cy.get('[id=full-name]').should('have.text', '- Full Name: Iron man');
    cy.get('[id=id-number]').should('have.text', '- ID Number: 123456');
    cy.get('[id=email]').should('have.text', '- Email: ironman@gmail.com');
    cy.get('[id=phone]').should('have.text', '- Phone Number: 123456789');
    cy.get('[id=date-of-birth]').should(
      'have.text',
      '- Date of Birth: 2023-06-09'
    );
    cy.contains('button', 'Completed').click();
    cy.get('[id=success-message]').should(
      'have.text',
      'Thank you for providing your information!'
    );
  });

  it('on test flow ACB', () => {
    cy.get('[id=templateACB]').click();
    cy.get('[id=onboading-title]').should(
      'have.text',
      'Enter your full name and ID number'
    );

    cy.get('[name=fullName]').type('Iron man');
    cy.get('[name=idNumber]').type('123456');

    cy.contains('button', 'Next').click();

    cy.get('#money-transfer').click();
    cy.get('#money-transfer').get('.chakra-checkbox').eq(0).click();

    cy.contains('button', 'Next').click();

    cy.get('[id=onboading-title]').should(
      'have.text',
      'Enter your email address, phone number, and date of birth'
    );

    cy.get('[name=email]').type('ironman@gmail.com');
    cy.get('[name=phone]').type('123456789');
    cy.get('[name=dateOfBirth]').type('2023-06-09');

    cy.contains('button', 'Next').click();

    cy.get('[id=full-name]').should('have.text', '- Full Name: Iron man');
    cy.get('[id=id-number]').should('have.text', '- ID Number: 123456');
    cy.get('[id=email]').should('have.text', '- Email: ironman@gmail.com');
    cy.get('[id=phone]').should('have.text', '- Phone Number: 123456789');
    cy.get('[id=date-of-birth]').should(
      'have.text',
      '- Date of Birth: 2023-06-09'
    );
    cy.contains('button', 'Completed').click();
    cy.get('[id=success-message]').should(
      'have.text',
      'Thank you for providing your information!'
    );
  });
});
