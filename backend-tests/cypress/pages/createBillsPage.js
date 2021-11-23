/// <reference types="cypress" />

//Elements
const titleOfCreateBillsPage = 'Testers Hotel'
const valueTextfield = 'input'
const paidCheckbox = '.checkbox'
const saveButton ='.blue'

//Functions and actions
function checkTitleCreateBillsPage(){
    cy.title().should('eq', titleOfCreateBillsPage)
}

function enterValue(cy, value){
    cy.get(valueTextfield).type(value)
}

function checkBox(){
    cy.get(paidCheckbox).click()

}

function saveNewBill(cy, contentToConfirm){
    cy.get(saveButton).click()
    cy.contains(contentToConfirm)
}




//Exports
module.exports={
    checkTitleCreateBillsPage,
    enterValue,
    checkBox,
    saveNewBill,
}