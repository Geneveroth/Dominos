describe('Dominos Test', () => {
    it('Visit Dominos.com', () => {
        cy.visit('https://www.dominos.com/en/')
        cy.url().should('include','https://www.dominos.com/en/' )
    })

    it('Click on "Order Online"', () => {
        cy.contains('Order Online').click({force:true})
    })

    it('Click on "Carryout"', () => {
        cy.get('#Service_Type_Carryout').click({force:true})
    })

    it('Enter the zip code 94611 and click search', () => {
        cy.get('#Postal_Code_Sep')
            .type('94611', {force:true}).should('have.value', '94611')
        cy.contains("Search Locations").click({force:true})
    })

    it('If a "store closed" error appears, click "Future Carryout Order" and set the future time and date', () => {
        cy.get('[class$="carryout"]')
        cy.contains( 'Future Carryout Order').first().click()
        cy.get('select[name="Future_Time"').select("12:00 pm").should('equal', "12:00pm")
        cy.contains('Use Future Time').click()
    })

    
    it('If no error appears, click "Store Pickup"', () => {
        cy.get('[class$="carryout"]')
        cy.contains('Store Pickup').first().click()
    })

    it('Click on "Build Your Own Pizza"', () => {
        cy.contains('Build Your Own Pizza').click() 
    })

    it('If the "Extra Cheese" dialog box appears, click "No Thanks"', () =>{
        cy.get('.stepUpSell').should('be.visible')
        cy.contains('No Thanks').click()
    })

    it('Choose "X-Large" size pizza and crust', () => {
        cy.get('[id$=16]').click()
        cy.contains('Cheese & Sauce').click()
    })

    it('Choose "Double" Cheese and "Garlic Parmesan Sauce"', () => {
        cy.get('select[name="Weight|C--1"]').select('Double').should('have.value', "2")
        cy.get('.c-topping-Xw').check().should('be.checked')
    })

    it('Add special cooking instructions of "Well Done" and "Square Cut"', () => {
        cy.get('[class^="button--cooking-instructions"]').click()
        cy.get('[data-description="Well Done"').check({force:true}).should('be.checked')
        cy.get('[data-description="Square Cut"').check({force:true}).should('be.checked')
    })

    it('Click on "Toppings"', () => {
        cy.contains('Toppings').click()
    })

    it('Choose "Pepperoni", "Bacon", and "Spinach"', () =>{
        cy.get('.topping-P').check().should('be.checked')
        cy.get('.topping-K').check().should('be.checked')
        cy.get('.topping-Si').check().should('be.checked')
    })

    it('Add the pizza to the order', () =>{
        cy.contains('Add to Order').click()
    })

    it('Choose "Garlic Dipping Sauce" and click "Add Sides"', () => {
        cy.get('[value="F_SIDGAR"]').check().should('be.checked')
        cy.contains('Add Sides').click()
    })

    it('Check the cart for the order and veryify that it is correct', () => {
        cy.contains('Cart').click({force:true})
        cy.get('[data-quid="mini-cart-product-toppings-whole"]').should('have.text', "Whole: Double Cheese, Garlic Parmesan Sauce, Pepperoni, Bacon, Spinach, No Robust Inspired Tomato Sauce")
        cy.get('[data-quid="mini-cart-product-2-name-button"]').should('have.text', "Garlic Dipping Cup")
    })
  })