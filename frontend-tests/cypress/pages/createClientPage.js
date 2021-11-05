/// <reference types="cypress" />

//Elements
const titleOfCreateClientPage = 'Testers Hotel'
const clientNameTextfield = ':nth-child(1) > input'
const clientEmailtextfield = ':nth-child(2) > input'
const clientTelephoneTextfield = ':nth-child(3) > input'
const saveClientButton ='.blue'

//Functions

function checkTitleOfCreateClientPage(){
    cy.title().should('eq', titleOfCreateClientPage)
}

function giveClientName(cy, name){
    cy.get(clientNameTextfield).type(name)
}

function giveClientEmail(cy, email){
    cy.get(clientEmailtextfield).type(email)
}

function giveClientTelephone(cy, telephone){
    cy.get(clientTelephoneTextfield).type(telephone)
}

function clickSaveClient(cy, contentToConfirm){
    cy.get(saveClientButton).click()
    cy.contains(contentToConfirm)
}
//Exports
module.exports = {
    checkTitleOfCreateClientPage,
    giveClientName,
    giveClientEmail,
    giveClientTelephone,
    clickSaveClient,
}