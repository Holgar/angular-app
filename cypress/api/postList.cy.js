import 'cypress-plugin-api'

describe('Create New Post', () => {
    let newPost
  
    before(() => {
      newPost = {
        title: 'New Post Title',
        body: 'New body',
        userId: 1,
      }
    })
  
    it('should create a new post', () => {
      cy.api({
        method: 'POST',
        url: '/posts',
        body: newPost,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('id')
        expect(response.body.title).to.eq(newPost.title)
        expect(response.body.body).to.eq(newPost.body)
        expect(response.body.userId).to.eq(newPost.userId)
      })
    })
  })