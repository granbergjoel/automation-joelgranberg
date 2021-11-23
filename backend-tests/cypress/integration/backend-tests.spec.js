/// <reference types="cypress" />

import * as clientHelpers from '../helpers/client-helpers'


describe('Backend tests', function(){
    
    it('test 3', function(){
        //detta autentiserar och loggar in, skapar token
        cy.authenticateSession().then((response =>{
           let fakeClientPayload = clientHelpers.createRandomClientPayload()
            //Detta är själva anropet till api
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/api/client/new',
                headers:{
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },
                body:fakeClientPayload
            }).then((response =>{
                //skriv assertions här
                //cy.log(JSON.stringify(response))
                const responseAsString=JSON.stringify(response)
                cy.log(JSON.stringify(response.body.name))
                cy.log(JSON.stringify(response.body.email))
                expect(responseAsString).to.have.string(fakeClientPayload.name)
            }))

            cy.request({
                method: 'GET',
                url: 'http://localhost:3000/api/clients',
                headers:{
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },
            }).then((response =>{
                const responseAsString=JSON.stringify(response)
                expect(responseAsString).to.have.string(fakeClientPayload.name)
                expect(responseAsString).to.have.string(fakeClientPayload.email)
                expect(responseAsString).to.have.string(fakeClientPayload.telephone)
            }))
        }))
    })


})

/*
    it('test 1', function(){
        //detta autentiserar och loggar in, skapar token
        cy.authenticateSession().then((response =>{
            //skriv testerna här
            cy.request({
                method: 'GET',
                url: 'http://localhost:3000/api/clients',
                headers:{
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },
            }).then((response =>{
                //Plocka id på första klienten
                cy.log(response.body[0].id)
                cy.log(response.body[0].created)
                cy.log(response.body[0].name)
                cy.log(response.body[0].email)
                cy.log(response.body[0].telephone)
            }))
        }))
    })

    it('test 2', function(){
        //detta autentiserar och loggar in, skapar token
        cy.authenticateSession().then((response =>{
            const payload={
                "name":"joel3",
                "email":"joel3@email.com",
                "telephone":"0701234567"}

            //Detta är själva anropet till api
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/api/client/new',
                headers:{
                    'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                    'Content-Type': 'application/json'
                },
                body:payload
            }).then((response =>{
                //skriv assertions här
                //cy.log(JSON.stringify(response))
                const responseAsString=JSON.stringify(response)
                expect(responseAsString).to.have.string(payload.name)
            }))
        }))
    })
*/


    //Första testet
/*   
    it('', function(){
        cy.log('hello world')
        cy.request('http://localhost:3000/').its('status').should('eq', 200)
    })


curl 'http://localhost:3000/api/login' 
-X POST -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:94.0) Gecko/20100101 Firefox/94.0' 
-H 'Accept: application/json' 
-H 'Accept-Language: en-US,en;q=0.5' 
--compressed -H 'Referer: http://localhost:3000/login' 
-H 'Content-Type: application/json;charset=UTF-8' 
-H 'Origin: http://localhost:3000' 
-H 'Connection: keep-alive' 
-H 'Sec-Fetch-Dest: empty' 
-H 'Sec-Fetch-Mode: cors' 
-H 'Sec-Fetch-Site: same-origin' 
--data-raw '{"username":"tester01","password":"GteteqbQQgSr88SwNExUQv2ydb7xuf8c"}'
*/







    /*
    it.only('not a test', function(){
        cy.request('http://api.icndb.com/jokes/2').then((response =>{                 
            const id = JSON.stringify(response.body.value.id)
            expect(id).to.equal('2')

            const joke = JSON.stringify(response.body.value.joke)
            expect(joke).to.have.string('MacGyver can build an airplane')
        }))
    })
    */

