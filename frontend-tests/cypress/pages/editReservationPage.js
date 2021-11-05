/// <reference types="cypress" />

const titleOfEditPage = 'Testers Hotel'
const startTextfield = ':nth-child(3) > input'
const endTextfield = ':nth-child(4) > input'
const saveButton = '.blue'



function checkTitleEditPage (){
    cy.title().should('eq', titleOfEditPage)
}

function clearStartTextfield(){
    //Had to set at a wait, otherwise the test crashed
    cy.wait(500)
    cy.get(startTextfield).clear()
}

function enterNewStart(cy, newStart){
    cy.get(startTextfield).type(newStart)
}

function clearEndTextfield(){
    cy.get(endTextfield).clear()
}

function enterNewEnd(cy, newEnd){
    cy.get(endTextfield).type(newEnd)
}


function saveReservation(){
    cy.get(saveButton).click()
    cy.contains('Reservations')
}


function enterOldStart(cy, oldStart){
    cy.get(startTextfield).type(oldStart)
}

function enterOldEnd(cy, oldEnd){
    cy.get(endTextfield).type(oldEnd)
}


module.exports = {
    checkTitleEditPage,
    clearStartTextfield,
    enterNewStart,
    clearEndTextfield,
    enterNewEnd,
    saveReservation,
    enterOldStart,
    enterOldEnd,
}