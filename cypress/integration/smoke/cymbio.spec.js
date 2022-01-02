///<reference types="cypress-iframe" />

import 'cypress-iframe'


before(() => {
  cy.log('Visits the Cymbio website')
    cy.visit('https://cym.bio/')
  })

describe('Cymbio Nav Bar Menu Items', () => {
    it('Verifies the navigation top level buttons', () => {
      cy.get('#header-menu-list').screenshot('Nav_Bar_Menu')
      cy.get('#header-menu-list a').should('have.length', 10).as('top_nav_links').then( items => {
          expect(items[0]).to.have.text('Why Cymbio')
          expect(items[1]).to.have.text('Company')
          expect(items[2]).to.have.text('About')
          expect(items[3]).to.have.text('Careers')
          expect(items[4]).to.have.text('Product')
          expect(items[5]).to.have.text('Resources')
          expect(items[6]).to.have.text('Blog')
          expect(items[7]).to.have.text('Case Studies')
          expect(items[8]).to.have.text('Content Hub')
          expect(items[9]).to.have.text('Contact')
        })
    })
})
  
describe('Cymbio Social Links', () => {
    it('Verifies the presence & visibility of the social links', () => {
        cy.get('.social-links li').should('have.length', 3).as('social_links').then( items => {
            cy.get(items[0]).scrollIntoView().should('be.visible').find('a').should('have.attr', 'href').and('include', 'linkedin')
            cy.get(items[0]).find('svg').screenshot('linkedin_icon')
            cy.get(items[1]).should('be.visible').find('a').should('have.attr', 'href').and('include', 'facebook')
            cy.get(items[1]).find('svg').screenshot('facebook_icon')
            cy.get(items[2]).should('be.visible').find('a').should('have.attr', 'href').and('include', 'twitter')
            cy.get(items[2]).find('svg').screenshot('twitter_icon')
          })
    })
})


describe('Cymbio Chat', () => { 
  it('Verifies chat can be opened & closed', () => {
    cy.iframe("iframe[title='chat widget']").find('span[data-test-id^="chat-widget"] button').should('be.visible').click()
    cy.wait(1000)
    cy.iframe("iframe[title='chat widget']").find('span[data-test-id^="chat-widget"] button').should('be.visible').click()    
  })
})

