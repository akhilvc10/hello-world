/// <reference types="cypress" />

describe('My First Test', () => {
    it('Should render hello world', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Hello world')
    })
  })