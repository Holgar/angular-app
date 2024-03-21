import 'cypress-plugin-api'

describe('Get Posts List', () => {
    it('should return a list of posts', () => {
      cy.api({
        method: 'GET',
        url: '/posts',
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')
        expect(response.body.length).to.be.greaterThan(0)
      })
    })
  })