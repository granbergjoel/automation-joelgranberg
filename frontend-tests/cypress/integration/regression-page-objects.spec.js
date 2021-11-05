/// <reference types="cypress" />


import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import * as createRoomFuncs from '../pages/createRoom'
import * as roomsFuncs from '../pages/roomsPage'
import * as clientsFuncs from '../pages/clientsPage'
import * as createClientFuncs from '../pages/createClientPage'
import * as billsFuncs from '../pages/billsPage'
import * as createBillsFuncs from '../pages/createBillsPage'
import * as reservationsFuncs from '../pages/reservationsPage'
import * as newReservationFuncs from '../pages/newReservationPage'
import * as editReservationPage from '../pages/editReservationPage'


// Test suite
describe('Test suite - regression tests', function(){


    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy, 'Testers Hotel')
    })

    afterEach(()=>{
        dashboardFuncs.performLogout(cy, 'Login')
    })    

    //This is your original test case, I kept it as a reference
    it('Perform Login and Logout', function(){
       indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
    })
    
 //My tests beloq
 it('T03 - create new room', function(){
    indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
    dashboardFuncs.navigateToViewRooms(cy, 'Rooms')
    roomsFuncs.checkRoomIsNotPresent(cy)
    roomsFuncs.navigateToCreateRoom(cy, 'New Room')//move to targets, faker?
    createRoomFuncs.selectCategoryDouble(cy, 'Double')//move to targets, faker?
    createRoomFuncs.selectRoomNumber(cy, '103')//move to targets, faker?
    createRoomFuncs.selectFloor(cy, '1')
    createRoomFuncs.checkBox(cy)
    createRoomFuncs.selectPrice(cy)
    createRoomFuncs.selectFeature(cy)
    createRoomFuncs.clickSave(cy, 'Rooms')

    //Assert new data is correct
    roomsFuncs.assertNewRoomData(cy, 'Floor 1, Room 103') //move to targets, faker?
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
        createClientFuncs.giveClientName(cy, 'John Doe')//move to targets?
        createClientFuncs.giveClientEmail(cy, 'john.doe@email.com')//move to targets?
        createClientFuncs.giveClientTelephone(cy, '070-1234567')//move to targets?
        createClientFuncs.clickSaveClient(cy, 'Clients')
    
        //Assert new data is correct
        clientsFuncs.assertNewClientData(cy, 'John Doe (#3)', 'john.doe@email.com', '070-1234567') //move to targets?
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
        createBillsFuncs.enterValue(cy)
        //createBillsFuncs.checkBox(cy)
        createBillsFuncs.saveNewBill(cy, 'Bills')
        billsFuncs.checkBillIsCreated(cy)
        billsFuncs.openMenuCreatedBill(cy)
        billsFuncs.deleteCreatedBill(cy)
        billsFuncs.checkBillIsNotPresent(cy)

    })

    it('T06 - create reservation', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs.navigateToViewReservation(cy, 'Reservations') //Content to confirm
        reservationsFuncs.checkTitleReservationsPage(cy)
        reservationsFuncs.checkReservationIsNotPresent(cy)
        reservationsFuncs.clickCreateReservation(cy, 'New Reservation')
        newReservationFuncs.checkTitleNewReservationsPage(cy)
        newReservationFuncs.enterStart(cy, '2021-12-12') //move to targets?
        newReservationFuncs.enterEnd(cy, '2021-12-13') //move to targets?
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