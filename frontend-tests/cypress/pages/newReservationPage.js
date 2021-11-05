/// <reference types="cypress" />

//VAD FAN ÄR DETTA!?!
//const { cli } = require("cypress")


//Elements
const titleOfNewReservationsPage = 'Testers Hotel'
const startTextfield = ':nth-child(1) > input'
const endTextfield = ':nth-child(2) > input'
const clientSelectField = ':nth-child(3) > select'
const client = '1'
const roomSelectField = ':nth-child(4) > select'
const room = '1'
const billSelectField = ':nth-child(5) > select'
const bill = '1'
const saveButton = '.blue'

//Functions and actions
function checkTitleNewReservationsPage(){
    cy.title().should('eq', titleOfNewReservationsPage)
}

function enterStart(cy, startDate){
    cy.get(startTextfield).type(startDate)
}

function enterEnd(cy, endDate){
    cy.get(endTextfield).type(endDate)
}

function selectClient(){
    cy.get(clientSelectField).select(client)
}

function selectRoom(){
    cy.get(roomSelectField).select(room)
}

function selectBill(){
    cy.get(billSelectField).select(bill)

}

function saveNewReservation(cy, contentToConfirm){
    cy.get(saveButton).click()
    cy.contains(contentToConfirm)
}


//Exports
module.exports={
    checkTitleNewReservationsPage,
    enterStart,
    enterEnd,
    selectClient,
    selectRoom,
    selectBill,
    saveNewReservation,
}