const faker = require('faker')

//ENDPOINTS

const ENDPOINT_GET_ROOMS = 'http://localhost:3000/api/rooms'
const ENDPOINT_GET_ROOM = 'http://localhost:3000/api/room/'
const ENDPOINT_POST_ROOM = 'http://localhost:3000/api/room/new'

let id=''

//CREATE PAYLOAD

function createRoomData(){
    const roomNumber = faker.datatype.number({min:103, max:110})
    const floor = faker.datatype.number({min:1, max:10})
    const price = faker.datatype.number({min:1500, max:3000})
    const payload ={
    "features":["balcony"],
    "category":"double",
    "number":roomNumber,
    "floor":floor,
    "available":true,
    "price":price
    }
    return payload
}

function createUpdateRoomData(cy, id){
    const roomNumber = faker.datatype.number({min:103, max:110})
    const floor = faker.datatype.number({min:1, max:10})
    const price = faker.datatype.number({min:1500, max:3000})
    const updateRoomPayload ={
    "features":["balcony"],
    "category":"double",
    "number":roomNumber,
    "floor":floor,
    "available":true,
    "price":price,
    "id":id,
    "created":"2021-11-24T07:47:18.362Z"
    }
    return updateRoomPayload
}

//FUNCTIONS

function createRoomAndDelete(){
    cy.authenticateSession().then((response =>{
        let newRoom = createRoomData()
        cy.request({
            method: 'POST',
            url: ENDPOINT_POST_ROOM,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body:newRoom  
        }).then ((response =>{
            
            const responseAsString=JSON.stringify(response.body)
            expect(responseAsString).to.have.string(newRoom.price)

            id=response.body.id
            cy.log('ID: ' +id)

            cy.log('ROOM CREATED')
            
        }))
        deleteRequestAfterGetWithAssertion(cy)

        //HUR FÅ DATA ATT KUNNA VANDRA MELLAN FUNKTIONER? GLOBALA VARIABLER? EXPORTERA?
        //cypress environments
        //eller spara i targets
    }))
}

function updateRoomAndDelete(){
    cy.authenticateSession().then((response =>{
        let newRoom = createRoomData()
        cy.request({
            method: 'POST',
            url: ENDPOINT_POST_ROOM,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body:newRoom  
        }).then ((response =>{
            const responseAsString=JSON.stringify(response.body)
            expect(responseAsString).to.have.string(newRoom.price)

            id=response.body.id
            cy.log('ID: ' +id)

            cy.log('ROOM CREATED')
            
        }))
        updateRoom(cy)
        deleteRequestAfterGetWithAssertion(cy) 
    }))
}

function deleteRoom(){
    cy.authenticateSession().then((response =>{
        let newRoom = createRoomData()
        cy.request({
            method: 'POST',
            url: ENDPOINT_POST_ROOM,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body:newRoom  
        }).then ((response =>{
            
            const responseAsString=JSON.stringify(response.body)
            expect(responseAsString).to.have.string(newRoom.price)

            id=response.body.id
            cy.log('ID: ' +id)

            cy.log('ROOM CREATED')
            
        }))
        deleteRequestAfterGetWithAssertion(cy)

        //HUR FÅ DATA ATT KUNNA VANDRA MELLAN FUNKTIONER? GLOBALA VARIABLER? EXPORTERA?
        //cypress environments
        //eller spara i targets
    }))
}

function updateRoom(cy){
    cy.request({
        method:'GET',
        url: ENDPOINT_GET_ROOMS,
        headers:{
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
    }).then((response =>{
        let lastId  = response.body[response.body.length -1].id
        
        let updateRoom = createUpdateRoomData(cy, lastId)
        cy.request({
            method: 'PUT',
            url: ENDPOINT_GET_ROOM+lastId,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body:updateRoom
        }).then((response =>{
            const responseAsString=JSON.stringify(response.body)
            expect(responseAsString).to.have.string(updateRoom.number)
        }))
        cy.log('ROOM UPDATED')
    }))
}


function deleteRequestAfterGetWithAssertion(cy){
    cy.request({
        method: 'GET',
        url: ENDPOINT_GET_ROOMS,
        headers:{
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
    }).then((response =>{
        let lastId = response.body[response.body.length -1].id
        cy.request({
            method: 'DELETE',
            url: ENDPOINT_GET_ROOM+lastId,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
        }).then((response =>{
            const responseAsString = JSON.stringify(response.body)
            expect(responseAsString).to.have.string('true')
            cy.log('ROOM DELETED')

        }))
    }))
}

//EXPORTS
module.exports={
    createRoomAndDelete,
    updateRoomAndDelete,
    deleteRoom,
}