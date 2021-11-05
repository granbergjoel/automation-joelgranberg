/// <reference types="cypress" />

//Elements
const titleOfReservationsPage = 'Testers Hotel'
const createdReservation = '.reservations > :nth-child(2)'
const createReservationButton = 'h2 > .btn'
const menuButtonCreatedReservation = ':nth-child(2) > .action'
const deleteButtonCreatedReservation = '.menu > :nth-child(2)'
const menuButtonExistingReservation = '.action'
const editButtonExistingReservation = '.menu > :nth-child(1)'
const bookingId = '.id'
const customerId = '1'
const startDate = '.start'
const endDate = '.end'



//Actions and functions

function checkTitleReservationsPage(){
    cy.title().should('eq', titleOfReservationsPage)
}

function checkReservationIsNotPresent(){
    cy.get(createdReservation).should("not.exist")
}

function clickCreateReservation(cy, contentToConfirm){
    cy.get(createReservationButton).click()
    cy.contains(contentToConfirm)
}

function checkReservationIsCreated(){
    cy.get(createdReservation).should("exist")
}

function openMenuCreatedReservation(){
    cy.get(menuButtonCreatedReservation).click()
}

function deleteCreatedReservation(){
    cy.get(deleteButtonCreatedReservation).click()
}

function openMenuExistingReservation(){
    cy.get(menuButtonExistingReservation).click()
}

// This function wouldnt work with a contentToConfirm solution so I 
// solved it like this, not optimal but still
function clickEditExistingReservation(){
    cy.get(editButtonExistingReservation).click()
    cy.contains('Reservation: 1')
}

function assertNewData(cy, newStart, newEnd){
    cy.get(bookingId).contains(customerId)
    cy.get(startDate).contains(newStart)
    cy.get(endDate).contains(newEnd)
}


//Exports
module.exports = {
    checkTitleReservationsPage,
    checkReservationIsNotPresent,
    clickCreateReservation,
    checkReservationIsCreated,
    openMenuCreatedReservation,
    deleteCreatedReservation,
    openMenuExistingReservation,
    clickEditExistingReservation,
    assertNewData,
}