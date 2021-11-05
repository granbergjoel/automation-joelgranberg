
/// <reference types="cypress" />

//This is a test suite
describe('Regression test suite', function(){
    
    //This is your example, I kept in as a reference.
    //I do not count this as one the test cases for the assignment
    
    it('Perform valid login', function(){
       // cy.visit('http://localhost:3000/login')
        cy.get('h2').contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        //Assert correct user is logged in
        cy.get('.username').contains('tester01')
        //Assert you are on correct page
        cy.get('h2').contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
        cy.get('h2').contains('Login')
        
    }) 
     
    //This is my first test case.     
    it('T03 - create room', function(){
        cy.visit('http://localhost:3000/login')
        cy.get('h2').contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        //Assert correct user is logged in
        cy.get('.username').contains('tester01')
        //Assert you are on correct page
       // cy.get('h2').contains('Tester Hotel Overview')
        //cy.get(':nth-child(1) > .btn').click()
        //Assert page is correct
        //cy.get('h2 > div').contains('Rooms')
        //cy.get('h2 > .btn').click()
        //cy.get('h2 > div').contains('New Room')
       // cy.get(':nth-child(1) > select').type('Double')
        //cy.get(':nth-child(1) > select').click()
        //cy.get(':nth-child(1) > select').select('Double')
       //cy.get(':nth-child(2) > input').type('103')
        //cy.get(':nth-child(3) > input').type('1')
       // cy.get('.checkbox').click()
      //  cy.get(':nth-child(6) > select').select('penthouse')
       // cy.get('.blue').click()
       // cy.get(':nth-child(3) > .icon').contains('103')
       // cy.get(':nth-child(3) > .action').click()
       // cy.get('.menu > :nth-child(2)').click()
       // cy.get('.rooms > :nth-child(3)').should("not.exist")

    })
    
    it('T04 - create client', function(){
      //  cy.visit('http://localhost:3000/login')
       // cy.get('h2').contains('Login')
        //cy.get(':nth-child(1) > input').type('tester01')
        //cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
       // cy.get('.btn').click()
        //Assert correct user is logged in
      //  cy.get('.username').contains('tester01')
        //Assert you are on correct page
     //   cy.get('h2').contains('Tester Hotel Overview')
      //  cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.get('h2 > div').contains('Clients')
       // cy.get('h2 > .btn').click()
        cy.get('h2 > div').contains('New Client')
      //  cy.get(':nth-child(1) > input').type('John Doe')
       // cy.get(':nth-child(2) > input').type('john.doe@email.com')
       // cy.get(':nth-child(3) > input').type('070-1234567')
      //  cy.get('.blue').click()
       // cy.get(':nth-child(3) > .action').click()
    //    cy.get('.menu > :nth-child(2)').click()
      //  cy.get('.clients > :nth-child(3)').should("not.exist")
    }) 
    


    it('T05 - create bill', function(){
      //  cy.visit('http://localhost:3000/')  
        //cy.get('.user > .btn').click()
        //cy.get('h2').contains('Login')login')
      //  cy.get('h2').contains('Login')
      //  cy.get(':nth-child(1) > input').type('tester01')
      //  cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
      //  cy.get('.btn').click()
        //Assert correct user is logged in
        cy.get('.username').contains('tester01')
        //Assert you are on correct page
        cy.get('h2').contains('Tester Hotel Overview')
       // cy.get(':nth-child(3) > .btn').click()
        //Assert you are in correct page
        cy.get('h2 > div').contains('Bills')
        //cy.get('h2 > .btn').click()
        cy.get('h2 > div').contains('New Bill')
       // cy.get('input').type('2000')
//        cy.get('.blue').click()

        cy.get(':nth-child(2) > .id').contains('ID: 2')
        cy.get(':nth-child(2) > .value').contains('2000kr')
        cy.get(':nth-child(2) > .paid').contains('Yes')
        cy.get('h2 > div').contains('Bills')
     //   cy.get(':nth-child(2) > .action').click()
      //  cy.get('.menu > :nth-child(2)').click()
       // cy.get('.bills > :nth-child(2)').should("not.exist")

    })


    it('T06 - create reservation', function(){
      //  cy.visit('http://localhost:3000/login')
        //cy.get('h2').contains('Login')
        //cy.get(':nth-child(1) > input').type('tester01')
        //cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        //cy.get('.btn').click()
        //Assert correct user is logged   //cy.get('.user > .btn').click()
        //cy.get('h2').contains('Login')in
        cy.get('.username').contains('tester01')
        //Assert you are on correct page
      //  cy.get('h2').contains('Tester Hotel Overview')
        cy.get(':nth-child(4) > .btn').click()
        cy.get('h2 > div').contains('Reservations')
       // cy.get('h2 > .btn').click()
       // cy.get(':nth-child(1) > input').type('2021-12-12')
       // cy.get(':nth-child(2) > input').type('2021-12-13')
//        cy.get(':nth-child(3) > select').select('1')
      // cy.get(':nth-child(4) > select').select('1')
     //   cy.get(':nth-child(5) > select').select('1')
     //   cy.get('.blue').click()
        cy.get(':nth-child(2) > .id').contains('2')
      //  cy.get(':nth-child(2) > .action').click()
    //    cy.get('.menu > :nth-child(2)').click()
      //  cy.get('.reservations > :nth-child(2)').should("not.exist")
        //cy.get('.user > .btn').click()
       

    })
    
    it('T07 - change reservation',function(){
        //cy.visit('http://localhost:3000/login')
        //cy.get('h2').contains('Login')
        //cy.get(':nth-child(1) > input').type('tester01')
        //cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
      //  cy.get('.btn').click()
        //Assert correct user is logged in
        cy.get('.username').contains('tester01')
        //Assert you are on correct page
        //cy.get('h2').contains('Tester Hotel Overview')
        //cy.get(':nth-child(4) > .btn').click()
        //cy.get('h2 > div').contains('Reservations')
        //Select reservation :1
       // cy.get('.action').click()
        //cy.get('.menu > :nth-child(1)').click()
        cy.get('h2 > div').contains('Reservation: 1')
      //  cy.get(':nth-child(3) > input').clear()
      //  cy.get(':nth-child(3) > input').type('2021-12-12')
       // cy.get(':nth-child(4) > input').clear()
        //cy.get(':nth-child(4) > input').type('2021-12-13')
        cy.get('.blue').click()
        cy.get('h2 > div').contains('Reservations')
        cy.get('.id').contains('1')
        cy.get('.start').contains('2021-12-12')
        cy.get('.end').contains('2021-12-13')
        cy.get('.action').click()
        cy.get('.menu > :nth-child(1)').click()
        cy.get('h2 > div').contains('Reservation: 1')
        cy.get(':nth-child(3) > input').clear()
        cy.get(':nth-child(3) > input').type('2020-04-01')
        cy.get(':nth-child(4) > input').clear()
        cy.get(':nth-child(4) > input').type('2020-04-04')
        cy.get('.blue').click()
        cy.wait(500)
        cy.get('h2 > div').contains('Reservations')
        cy.get('.id').contains('1')
        cy.get('.start').contains('2019-01-01')
        cy.get('.end').contains('2019-01-02')
        cy.get('.user > .btn').click()
        cy.wait(500)
        cy.get('h2').contains('Login')
    })



      

})

