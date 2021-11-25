/// <reference types="cypress" />

import faker from 'faker'
import * as indexFuncs from '../backend-tests/cypress/pages/indexPage'
import * as dashboardFuncs from '../backend-tests/cypress/pages/dashboardPage'
import * as targets from '../backend-tests/cypress/targets/targets'
import * as createRoomFuncs from '../backend-tests/cypress/pages/createRoom'
import * as roomsFuncs from '../backend-tests/cypress/pages/roomsPage'
import * as clientsFuncs from '../backend-tests/cypress/pages/clientsPage'
import * as createClientFuncs from '../backend-tests/cypress/pages/createClientPage'
import * as billsFuncs from '../backend-tests/cypress/pages/billsPage'
import * as createBillsFuncs from '../backend-tests/cypress/pages/createBillsPage'
import * as reservationsFuncs from '../backend-tests/cypress/pages/reservationsPage'
import * as newReservationFuncs from '../backend-tests/cypress/pages/newReservationPage'
import * as editReservationPage from '../backend-tests/cypress/pages/editReservationPage'


// Test suite
describe('Test suite - regression tests', function(){

/*
    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy, 'Testers Hotel')
    })

    afterEach(()=>{
        dashboardFuncs.performLogout(cy, 'Login')
    })    
*/
    //This is your original test case, I kept it as a reference
    it('Perform Login and Logout', function(){
       indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
    })
    
 //My tests below
 
    it('T03 - create new room', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs.navigateToViewRooms(cy, 'Rooms')
        roomsFuncs.checkRoomIsNotPresent(cy)
        roomsFuncs.navigateToCreateRoom(cy, 'New Room')
        createRoomFuncs.selectCategoryDouble(cy, 'Double')//move to targets? faker? make array with options?
        createRoomFuncs.selectRoomNumber(cy, targets.roomNumber)
        createRoomFuncs.selectFloor(cy, targets.floor)
        createRoomFuncs.checkBox(cy)
        createRoomFuncs.selectPrice(cy, targets.price)
        createRoomFuncs.selectFeature(cy, 'penthouse') //move to targets? faker? make array with options?
        createRoomFuncs.clickSave(cy, 'Rooms')

        //Assert new data is correct
        roomsFuncs.assertNewRoomData(cy, targets.roomNumber, targets.floor,targets.price) 
        roomsFuncs.checkRoomIsCreated(cy)
        roomsFuncs.deleteRoom(cy)
        roomsFuncs.checkRoomIsNotPresent(cy)
})

    it('T04 - create client', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs.navigateToViewClients(cy, 'Clients')
        clientsFuncs.checkTitleOfClientsPage(cy)
        clientsFuncs.checkClientIsNotPresent(cy)
        clientsFuncs.clickCreateClient(cy, 'New Client')
        createClientFuncs.checkTitleOfCreateClientPage(cy)
        createClientFuncs.giveClientName(cy, targets.fullName)
        createClientFuncs.giveClientEmail(cy, targets.email)
        createClientFuncs.giveClientTelephone(cy, targets.telephone)
        createClientFuncs.clickSaveClient(cy, 'Clients')

        //Assert new data is correct
        clientsFuncs.assertNewClientData(cy, targets.fullName, targets.email, targets.telephone) 
        clientsFuncs.checkClientIsCreated(cy)
        clientsFuncs.openMenuCreatedClient(cy)
        clientsFuncs.deleteCreatedClient(cy)
        clientsFuncs.checkClientIsNotPresent(cy)
})

    it('T05 - create bill', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs.navigateToViewBills(cy, 'Bills')
        billsFuncs.checkTitleBillsPage(cy,)
        billsFuncs.checkBillIsNotPresent(cy)
        billsFuncs.navigateToCreateBill(cy, 'New Bill')
        createBillsFuncs.checkTitleCreateBillsPage(cy)
        createBillsFuncs.enterValue(cy, targets.value)
        //createBillsFuncs.checkBox(cy)
        createBillsFuncs.saveNewBill(cy, 'Bills')

        //assert new data
        billsFuncs.checkBillIsCreated(cy)
        billsFuncs.assertNewData(cy, targets.value)
        billsFuncs.openMenuCreatedBill(cy)
        billsFuncs.deleteCreatedBill(cy)
        billsFuncs.checkBillIsNotPresent(cy)

    })

    it('T06 - create reservation', function(){
//I had problem making the dates random as the format in faker was incorrect. Could not find the correct syntax

        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs.navigateToViewReservation(cy, 'Reservations') 
        reservationsFuncs.checkTitleReservationsPage(cy)
        reservationsFuncs.checkReservationIsNotPresent(cy)
        reservationsFuncs.clickCreateReservation(cy, 'New Reservation')
        newReservationFuncs.checkTitleNewReservationsPage(cy)
        newReservationFuncs.enterStart(cy, '2021-12-12')  
        newReservationFuncs.enterEnd(cy, '2021-12-13') 
        newReservationFuncs.selectClient(cy)
        newReservationFuncs.selectRoom(cy)
        newReservationFuncs.selectBill(cy)
        newReservationFuncs.saveNewReservation(cy, 'Reservations')
        reservationsFuncs.checkTitleReservationsPage(cy)

        //Assert data is correct and reservation is made
        reservationsFuncs.assertNewData(cy, '2021-12-12', '2021-12-13')
        reservationsFuncs.checkReservationIsCreated(cy)
        reservationsFuncs.openMenuCreatedReservation(cy)
        reservationsFuncs.deleteCreatedReservation(cy)
        reservationsFuncs.checkReservationIsNotPresent(cy)

    })

    it('T07 - change reservation', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs.navigateToViewReservation(cy, 'Reservations') 
        reservationsFuncs.checkTitleReservationsPage(cy)
        
        //Assert original data is correct
        reservationsFuncs.assertNewData(cy, '2020-04-01', '2020-04-04')//Move to targets?
        reservationsFuncs.openMenuExistingReservation(cy)
        reservationsFuncs.clickEditExistingReservation(cy)
        editReservationPage.checkTitleEditPage(cy)
        editReservationPage.clearStartTextfield(cy)
        editReservationPage.enterNewStart(cy, '2021-12-12') //Move to targets?
        editReservationPage.clearEndTextfield(cy)
        editReservationPage.enterNewEnd(cy, '2021-12-13') //Move to targets?
        editReservationPage.saveReservation(cy)
        reservationsFuncs.checkTitleReservationsPage(cy)
    
        //Assert new data is correct
        reservationsFuncs.assertNewData(cy, '2021-12-12', '2021-12-13') //move to targets?
        reservationsFuncs.openMenuExistingReservation(cy)
        reservationsFuncs.clickEditExistingReservation(cy)
        editReservationPage.checkTitleEditPage(cy)   
        editReservationPage.clearStartTextfield(cy)
        editReservationPage.enterOldStart(cy, '2020-04-01')//Move to targets?
        editReservationPage.clearEndTextfield(cy)
        editReservationPage.enterOldEnd(cy, '2020-04-04') //Move to targets?
        editReservationPage.saveReservation(cy)
    
        reservationsFuncs.assertNewData(cy, '2020-04-01', '2020-04-04') //Move to targets?
    
        reservationsFuncs.checkTitleReservationsPage(cy)
    })

   
})