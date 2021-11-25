const faker = require('faker')

//ENDPOINTS

const ENDPOINT_GET_RESERVATIONS = 'http://localhost:3000/api/reservations'
const ENDPOINT_GET_RESERVATION = 'http://localhost:3000/api/reservation/'
const ENDPOINT_POST_RESERVATION = 'http://localhost:3000/api/reservation/new'


//CREATE PAYLOAD

function createReservationData(){

    const payload ={

        "client":1,
        "room":1,"bill":1,
        "start":"2021-12-12",
        "end":"2021-12-13"
    }

    return payload
}

function createUpdateReservationData(){

    const payload ={
        "client":2,
        "room":2,
        "bill":1,
        "start":"2022-01-01",
        "end":"2022-01-14",
        "id":2,
        "created":"2021-11-24T10:04:58.585Z"
    }
    return payload
}


//FUNCTIONS

function createReservationAndDelete(){
    cy.authenticateSession().then((response =>{
        let newReservation = createReservationData()
        cy.request({
            method: 'POST',
            url: ENDPOINT_POST_RESERVATION,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body:newReservation  
        }).then ((response =>{
            const responseAsString=JSON.stringify(response.body)
            expect(responseAsString).to.have.string(newReservation.start)
            cy.log('RESERVATION CREATED')
        }))
            deleteRequestAfterGet(cy)    
    }))
}

function updateReservationAndDelete(){
    cy.authenticateSession().then((response =>{
        let newReservation = createReservationData()
        cy.request({
            method: 'POST',
            url: ENDPOINT_POST_RESERVATION,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body:newReservation  
        }).then ((response =>{
            const responseAsString=JSON.stringify(response.body)
            expect(responseAsString).to.have.string(newReservation.start)
            cy.log('RESERVATION CREATED')
        }))
            updateReservation(cy)
            deleteRequestAfterGet(cy)
    }))
}

function updateReservation(cy){
    cy.request({
        method:'GET',
        url: ENDPOINT_GET_RESERVATIONS,
        headers:{
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
    }).then((response =>{
        let lastId  = response.body[response.body.length -1].id
        let updateReservation = createUpdateReservationData()
        cy.request({
            method: 'PUT',
            url: ENDPOINT_GET_RESERVATION+lastId,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body:updateReservation
        }).then((response =>{
            const responseAsString=JSON.stringify(response.body)
            expect(responseAsString).to.have.string(updateReservation.start)
        }))
        cy.log('RESERVATION UPDATED')
    }))
}


function deleteRequestAfterGet(cy){
    cy.request({
        method: 'GET',
        url: ENDPOINT_GET_RESERVATIONS,
        headers:{
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
    }).then((response =>{
        let lastId = response.body[response.body.length -1].id
        cy.request({
            method: 'DELETE',
            url: ENDPOINT_GET_RESERVATION+lastId,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
        }).then((response =>{
            const responseAsString = JSON.stringify(response.body)
            cy.log(responseAsString)
            expect(responseAsString).to.have.string('true')
            cy.log('RESERVATION DELETED')

        }))
    }))
}


//EXPORTS

module.exports={
    createReservationAndDelete,
    updateReservationAndDelete
}