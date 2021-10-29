//This is another test case    
it('Create room', function(){
    cy.get(':nth-child(1) > .btn').click()
    //Assert page is correct
    cy.get('h2 > div').contains('Rooms')
    cy.get('h2 > .btn').click()
    cy.get('h2 > div').contains('New room')
    cy.get(':nth-child(1) > select').click()

    cy.get(':nth-child(2) > input').type('103')
    cy.get(':nth-child(3) > input').typ1('1')
    cy.get('.checkbox').click()
    cy.get(':nth-child(5) > input').type('1500')
    cy.get('[value="penthouse"]').click()
    cy.get('.blue').click()
    
})