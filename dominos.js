describe('Dominos Test', () => {
    it('Visit Dominos.com', () => {
        cy.visit('https://www.dominos.com/en/')
    })

    it('Click on "Order Online"', () => {
        cy.contains('Order Online').click({force:true})
    })

    it('Click on "Carryout"', () => {
        cy.get('#Service_Type_Carryout').click({force:true})
    })

    it('Enter the zip code and click search', () => {
        cy.get('#Postal_Code_Sep').should('be.visible')
            .type('94611').should('have.value', '94611')
        cy.contains("Search Locations").click()
    })

    it('Choose the first result', () => {
        cy.get('[')
        //try getting the dom element that shows the error message
        //do an if check and if it exists, search for future carryout, else store pickup
        cy.contains('Store Pickup').first().click()
        cy.contains( 'Future Carryout Order').first().click()
    })

    it('Click on "Build Your Own Pizza"', () => {
       cy.contains('Build Your Own Pizza').click() 
    })

    it('Choose pizza size and crust', () => {
        cy.get('[id$=16]').click()
        cy.contains('Cheese & Sauce').click()
    })

    it('Choose cheese and sauce and add special cooking instructions', () => {
        cy.get('select[name="Weight|C--1"]').select('Double')
        cy.get('.c-topping-Xw').check()
        cy.get('button[data-quid="cooking-instructions"]').click()
        //find proper name for collapsed button
    })

  })