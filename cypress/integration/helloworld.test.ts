/// <reference types="cypress" />

describe('My First Test', () => {
    before(function () {
        cy.visit('http://localhost:3000/')
    })
    it('Should render hello world', () => {

        cy.contains('Hello world')
    })
    
    
        it('File Upload using cypress-file-upload npm package', () => {
            const filepath = '../fixtures/example.jpg'
            cy.get('input[type="file"]').attachFile(filepath)
            // cy.get('#file-submit').click()
   
            cy.get('.MuiAlert-message', { timeout: 8000 }).should('have.text', 'File Uploaded Successfully')
        })

  })