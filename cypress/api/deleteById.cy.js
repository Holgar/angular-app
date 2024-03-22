import 'cypress-plugin-api'

describe('Delete Post by ID', () => {
    let postId
  
    before(() => {
      cy.api({
        method: 'POST',
        url: '/posts',
        body: {
          title: 'Post for deleting',
          body: 'This post will be deleted',
          userId: 1,
        },
        failOnStatusCode: false,
      }).then((response) => {
        postId = response.body.id
      })
    })
  
    it('should delete a post by ID', () => {
      cy.api({
        method: 'DELETE',
        url: `/posts/${postId}`,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  })