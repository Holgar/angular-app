import 'cypress-plugin-api'

describe('Get Posts List', () => {
    let expectedPosts
    let postId

    before(() => {
        cy.fixture('post').then((posts) => {
            expectedPosts = posts
        })
    })

    it('should create a new post', () => {
        cy.api({
            method: 'POST',
            url: '/posts',
            body: expectedPosts,
            failOnStatusCode: false,
        }).then((response) => {
            postId = response.body.id
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id')
        })
        // Cant work with current API
        // cy.api({
        //     method: 'GET',
        //     url: `/posts/${postId}`,
        //     failOnStatusCode: false,
        //   }).then((response) => {
        //     expect(response.status).to.eq(200)
        //   })
    })
})