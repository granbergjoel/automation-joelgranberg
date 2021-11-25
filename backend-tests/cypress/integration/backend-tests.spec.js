/// <reference types="cypress" />

import * as clientHelpers from '../helpers/client-helpers'
import * as billsHelpers from '../helpers/bills-helpers'
import * as roomsHelpers from '../helpers/rooms-helpers'
import * as reservationHelpers from '../helpers/reservations-helpers'


describe('Backend tests', function(){
/*
    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy, 'Testers Hotel')
    })

    afterEach(()=>{
        dashboardFuncs.performLogout(cy, 'Login')
    }) 
*/

    /*Examples from the course

    it('Create a new client', function(){
        clientHelpers.createClientRequest(cy)   
    })

    it('Get all clients', function(){
        clientHelpers.getAllClientsRequest(cy)
    })

    it('Create a client and delete it', function(){
        clientHelpers.createClientRequestAndDelete(cy)
    })
    */

    //My own test cases
    it('T1 - Create and delete new bill', function(){
        const responseBody = billsHelpers.createBillRequestAndDelete()
    })

    it('T2 - Create and delete room', function(){
        roomsHelpers.createRoomAndDelete()
    })

    it('T3 - Update and delete room', function(){
        roomsHelpers.updateRoomAndDelete()
    })

    it('T4 - Update and delete reservation', function(){
        reservationHelpers.updateReservationAndDelete()
    })

    it('T5 - Create and delete reservation', function(){
        reservationHelpers.createReservationAndDelete()
    })
})
