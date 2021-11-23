/// <reference types="cypress" />


const createRoomButton = 'h2 > .btn'
const createdRoom = '.rooms > :nth-child(3)'
const MenuButtonCreatedRoom = ':nth-child(3) > .action'
const deleteButton = '.menu > :nth-child(2)'


function navigateToCreateRoom(){
    cy.get(createRoomButton).click()
}

function checkRoomIsNotPresent(){
    cy.get(createdRoom).should("not.exist")
}

function checkRoomIsCreated(cy){
    cy.get(createdRoom).should("exist")
}

function deleteRoom(){
    cy.get(MenuButtonCreatedRoom).click()
    cy.get(deleteButton).click()  
}

function assertNewRoomData(cy, roomNumber, floor, price){
       cy.get('.rooms > :nth-child(3)').contains(roomNumber)
       cy.get('.rooms > :nth-child(3)').contains(floor)
       cy.get('.rooms > :nth-child(3)').contains(price)
   }


module.exports = {
    navigateToCreateRoom,
    checkRoomIsCreated,
    checkRoomIsNotPresent,
    deleteRoom,
    assertNewRoomData,
}