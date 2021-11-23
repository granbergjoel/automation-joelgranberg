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
import faker from 'faker'

beforeEach(()=>{
    cy.visit(targets.base_url)
    indexFuncs.checkTitleOfIndexPage(cy, 'Testers Hotel')
})

afterEach(()=>{
    dashboardFuncs.performLogout(cy, 'Login')
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

        cy.log(targets.newDate)

        //Assert new data is correct
        clientsFuncs.assertNewClientData(cy, targets.fullName, targets.email, targets.telephone) 
        clientsFuncs.checkClientIsCreated(cy)
        clientsFuncs.openMenuCreatedClient(cy)
        clientsFuncs.deleteCreatedClient(cy)
        clientsFuncs.checkClientIsNotPresent(cy)
})


