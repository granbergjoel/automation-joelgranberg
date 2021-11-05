/// <reference types="cypress" />


const createRoomButton = 'h2 > .btn'
const createdRoom = '.rooms > :nth-child(3)'
const MenuButtonCreatedRoom = ':nth-child(3) > .action'
const deleteButton = '.menu > :nth-child(2)'
const roomNumber ='103'

function navigateToCreateRoom(){
    cy.get(createRoomButton).click()
}

function checkRoomIsNotPresent(){
    cy.get(createdRoom).should("not.exist")
}

function checkRoomIsCreated(){
    cy.get(createdRoom).should("exist")
    cy.get(createdRoom).contains(roomNumber)
}

function deleteRoom(){
    cy.get(MenuButtonCreatedRoom).click()
    cy.get(deleteButton).click()  
}

function assertNewRoomData(cy, roomAndFloor){
       cy.get('.rooms > :nth-child(3)').contains(roomAndFloor)
   }


module.exports = {
    navigateToCreateRoom,
    checkRoomIsCreated,
    checkRoomIsNotPresent,
    deleteRoom,
    assertNewRoomData,
}