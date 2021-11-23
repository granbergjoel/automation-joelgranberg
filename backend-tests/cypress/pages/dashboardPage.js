/// <reference types="cypress" />


//Elements
const titleOfDashboardPage = 'Testers Hotel'
const logoutButton = '.user > .btn'
const viewRoomButton = ':nth-child(1) > .btn'
const viewClientButton = '.blocks > :nth-child(2) > .btn'
const viewBillsButton = ':nth-child(3) > .btn'
const viewReservationButton = ':nth-child(4) > .btn'


//Functions and Actions

function checkTitleDashboardPage(){
    cy.title().should('eq', titleOfDashboardPage)
}

function navigateToViewRooms(cy, contentToConfirm){
    cy.get(viewRoomButton).click()
    cy.contains(contentToConfirm)
}

function navigateToViewClients(cy, contentToConfirm){
    cy.get(viewClientButton).click()
    cy.contains(contentToConfirm)
}

function navigateToViewBills(cy, contentToConfirm){
    cy.get(viewBillsButton).click()
    cy.contains(contentToConfirm)
}

function navigateToViewReservation(cy, contentToConfirm){
    cy.get(viewReservationButton).click()
    cy.contains(contentToConfirm)
}


function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}


//Exports
module.exports = {
    checkTitleDashboardPage,
    performLogout,
    navigateToViewRooms,
    navigateToViewClients,
    navigateToViewBills,
    navigateToViewReservation,
    
}