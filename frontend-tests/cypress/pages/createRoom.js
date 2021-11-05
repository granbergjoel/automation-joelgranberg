/// <reference types="cypress" />
const selectCategory=':nth-child(1) > select'
const categoryDouble = 'Double'
const roomNumberTextfield = ':nth-child(2) > input'
const floorTextfield = ':nth-child(3) > input'
const checkbox = '.checkbox'
const priceTextfield = ':nth-child(5) > input'
const price = '1500'  //FAKER här för att slumpa nummer
const clickFeature =':nth-child(6) > select'
const feature = 'penthouse'
const save= '.blue'


function selectCategoryDouble(cy, category){
    cy.get(selectCategory).select(category)
}

function selectRoomNumber(cy,roomNumber){
    cy.get(roomNumberTextfield).type(roomNumber)
}

function selectFloor(cy, floorNumber){
    cy.get(floorTextfield).type(floorNumber)
}

function checkBox(){
    cy.get(checkbox).click()
}
//Denna skulle kunna ha en ytterligare parameter där pris sätts dynamiskt
function selectPrice(){
    cy.get(priceTextfield).type(price)
}
// Denna skulle kunna ha en extra variabel där user väljer feature
function selectFeature(){
    cy.get(clickFeature).select(feature)
   
}


function clickSave(cy, contentToconfirm){
    cy.get(save).click()
    cy.contains(contentToconfirm)
}



module.exports = {
    selectCategoryDouble,
    selectRoomNumber,
    selectFloor,
    checkBox,
    selectPrice,
    selectFeature,
    clickSave,
}