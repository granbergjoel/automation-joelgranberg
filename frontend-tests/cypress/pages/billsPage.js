/// <reference types="cypress" />


//Elements
const titleOfBillsPage = 'Testers Hotel'
const createBillButton = 'h2 > .btn'
const createdBill = '.bills > :nth-child(2)'
const openMenuCreatedBillButton= ':nth-child(2) > .action'
const deleteCreatedBillButton = '.menu > :nth-child(2)'


//Functions and actions
function checkTitleBillsPage(){
    cy.title().should('eq', titleOfBillsPage)
}

function navigateToCreateBill(cy, contentToConfirm){
    cy.get(createBillButton).click()
    cy.contains(contentToConfirm)
}

function checkBillIsNotPresent(){
    cy.get(createdBill).should("not.exist")

}
function checkBillIsCreated(){
    cy.get(createdBill).should("exist")
}

function openMenuCreatedBill(){
    cy.get(openMenuCreatedBillButton).click()
}

function deleteCreatedBill(){
    cy.get(deleteCreatedBillButton).click()
}


//Exports
module.exports = {
    checkTitleBillsPage,
    navigateToCreateBill,
    checkBillIsNotPresent,
    checkBillIsCreated,
    openMenuCreatedBill,
    deleteCreatedBill,
}