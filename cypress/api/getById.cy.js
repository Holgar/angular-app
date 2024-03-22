import 'cypress-plugin-api'

describe('Get Post by ID', () => {
  it('should return a post with the specified ID', () => {
    cy.api("GET", `/posts/1`)
    .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', 1)

    })
  })

  it('should return 404 for non-existent post ID', () => {
    cy.api({
      method: 'GET',
      url: '/posts/999',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404)
    })
  })
})