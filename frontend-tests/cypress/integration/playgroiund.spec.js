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






