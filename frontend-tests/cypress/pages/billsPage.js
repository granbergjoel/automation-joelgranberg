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

function assertNewData(cy,value){
    cy.get('.bills > :nth-child(2)').contains('ID: 2')
    cy.get('.bills > :nth-child(2)').contains(value)
}


//Exports
module.exports = {
    checkTitleBillsPage,
    navigateToCreateBill,
    checkBillIsNotPresent,
    checkBillIsCreated,
    openMenuCreatedBill,
    deleteCreatedBill,
    assertNewData,
}