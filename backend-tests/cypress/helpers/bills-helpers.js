const faker = require('faker')

const ENDPOINT_POST_BILL = 'http://localhost:3000/api/bill/new'
const ENDPOINT_GET_BILL = 'http://localhost:3000/api/bill/'
const ENDPOINT_GET_BILLS = 'http://localhost:3000/api/bills'

function createUnpaidBill(){
    const value = faker.datatype.number({min:1000, max:15000})

    const payload ={
        "value": value, 
    }
    return payload
}

function createBillRequestAndDelete(){
    cy.authenticateSession().then((response =>{
        let fakeBillPayload = createUnpaidBill()
        cy.request({
            method: 'POST',
            url: ENDPOINT_POST_BILL,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body:fakeBillPayload
        }).then ((response =>{
            const responseAsString=JSON.stringify(response.body)
            expect(responseAsString).to.have.string(fakeBillPayload.value)

            cy.log('BILL CREATED')
        }))
       // getRequestAllBillsWithAssertion(cy,fakeBillPayload.value)
       // cy.log('BILL ASSERTED')
        deleteRequestAfterGet(cy)
        cy.log('BIlL DELETED')
    }))
}

function deleteRequestAfterGet(cy){
    cy.request({
        method: 'GET',
        url: ENDPOINT_GET_BILLS,
        headers:{
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
    }).then((response =>{
        let lastId = response.body[response.body.length -1].id
        cy.request({
            method: 'DELETE',
            url: ENDPOINT_GET_BILL+lastId,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
        }).then((response =>{
            const responseAsString = JSON.stringify(response.body)
            expect(responseAsString).to.have.string('true')
        }))
    }))
}

function getRequestAllBillsWithAssertion(cy, value){
    cy.request({
        method: 'GET',
        url: ENDPOINT_GET_BILLS,
        headers:{
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
    }).then((response =>{
        const responseAsString = JSON.stringify(response.body[response.body.length -1])

       //expect(response.body[response.body.length -1].value).to.equal(value)
        expect(responseAsString).to.have.string(value)
    }))
}


module.exports= {
    createBillRequestAndDelete,
}
