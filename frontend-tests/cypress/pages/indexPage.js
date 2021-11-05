    /// <reference types="cypress" />


//Elements
const titleOfIndexPage = 'Testers Hotel'
const userNameTextfield = ':nth-child(1) > input'
const passwordTexfield = ':nth-child(2) > input'
const loginButton = '.btn'


//Functions / Actions
function checkTitleOfIndexPage(){
    cy.title().should('eq', titleOfIndexPage)
    //Lägg till assertion från sidan också
}

function performValidLogin(cy, username, password, contentToConfirm){
    cy.get(userNameTextfield).type(username)
    cy.get(passwordTexfield).type(password)
    cy.get(loginButton).click()
    cy.contains(contentToConfirm)
}


//Exports
module.exports= {
    checkTitleOfIndexPage,
    performValidLogin
}