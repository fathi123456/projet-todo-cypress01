///<reference types="Cypress"/>

import LoginPage from "../pages/LoginPage"
import TodoPage from "../pages/todoPage"

it("should be able to login", ()=>{

    const loginPage = new LoginPage()
    const todoPage= new TodoPage()

    loginPage.load()
    loginPage.login(Cypress.env("test005@sfr.fr","Fathi123456")
    todoPage.welcomeMessageShouldBeVisisble()
    
    
    // cy.visit('/login')
    // cy.get('[data-testid="email"]').type('test005@sfr.fr')
    // cy.get('[data-testid="password"]').type('Fathi123456')
    // cy.get('[data-testid="submit"]').click()
     //cy.get('[data-testid="welcome"]').should('be.visible')



})