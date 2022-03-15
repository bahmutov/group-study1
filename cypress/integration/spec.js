/// <reference types="cypress" />
it('adds todos', () => {
  cy.visit('/')
  cy.get('input.new-todo').type('write code{enter}').type('write tests{enter}')
  cy.get('.todo-list li').should('have.length', 2)
  cy.get('[data-cy="remaining-count"]').should('have.text', '2')

  cy.reload()
  cy.get('.todo-list li')
    .should('have.length', 2)
    .first()
    .find('.toggle')
    .click()
  cy.get('.todo-list li').first().should('have.class', 'completed')
  cy.get('.todo-list li').eq(1).should('not.have.class', 'completed')
  cy.get('[data-cy="remaining-count"]').should('have.text', '1')
  cy.contains('[data-cy="remaining-count"]', /^1$/)
})
