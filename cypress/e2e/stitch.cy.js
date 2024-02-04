describe('template spec', () => {
  it.only('Stitch trial plan', () => {

    cy.visit('https://app.stitchdata.com/session/create?redirect=%2Fclient%2F211417%2Fpipeline%2Fv2%2Fbilling')

    cy.get('#st-v2-login-email').type('pericardiobbarros@gmail.com')
    cy.get('#-st-t-stitch-login-submit-button').click()


    cy.origin('https://login.us.cloud.talend.com', () => {

      cy.get('#password.input.input--password')
        .click()
        .type('1a!Q@W#E$R')
      cy.get('button[type="submit"]').click()
    })

    cy.contains('Trial expires on Feb 16, 2024').should('be.visible')

  })


})


