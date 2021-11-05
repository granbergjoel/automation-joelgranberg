/// <reference types="cypress" />

//Elements
const titleOfClientsPage ='Testers Hotel'
const createClientButton ='h2 > .btn'
const createdClient = '.clients > :nth-child(3)'
const menuButtonCreatedClient = ':nth-child(3) > .action'
const deleteButton = '.menu > :nth-child(2)'

//Functions/Actions
function checkTitleOfClientsPage(){
    cy.title().should('eq', titleOfClientsPage)
}

function clickCreateClient(cy, contentToConfirm){
    cy.get(createClientButton).click()
    cy.contains(contentToConfirm)
}

function checkClientIsNotPresent(){
    cy.get(createdClient).should("not.exist")
}

function checkClientIsCreated(){
    cy.get(createdClient).should("exist")
}

function openMenuCreatedClient(){
    cy.get(menuButtonCreatedClient).click()
}

function deleteCreatedClient(){
    cy.get(deleteButton).click()
}

function assertNewClientData(cy, name, email, telephone){
    cy.get(':nth-child(3) > :nth-child(2) > h3').contains(name)
    cy.get(':nth-child(3) > :nth-child(2) > .email').contains(email)
    cy.get(':nth-child(3) > :nth-child(2) > .telephone').contains(telephone)
}

//Exports
module.exports = {
    checkTitleOfClientsPage,
    clickCreateClient,
    checkClientIsNotPresent,
    checkClientIsCreated,
    openMenuCreatedClient,
    deleteCreatedClient,
    assertNewClientData,
}