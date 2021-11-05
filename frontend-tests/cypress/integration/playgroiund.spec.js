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

beforeEach(()=>{
    cy.visit(targets.base_url)
    indexFuncs.checkTitleOfIndexPage(cy, 'Testers Hotel')
})

afterEach(()=>{
    dashboardFuncs.performLogout(cy, 'Login')
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




