import 'cypress-plugin-api'

describe('Update Post by ID', () => {
    let postId
    let updatedPost

    before(() => {
        cy.api({
            method: 'POST',
            url: '/posts',
            body: {
                title: 'Post for updating',
                body: 'This post will be updated',
                userId: 1,
            },
            failOnStatusCode: false,
        }).then((response) => {
            postId = response.body.id
            updatedPost = {
                id: postId,
                title: 'Updated Post Title',
                body: 'This post has been updated',
                userId: 1,
            }
        })
    })

    it('should update a post by ID', () => {
        cy.api({
            method: 'PUT',
            url: `/posts/${postId}`,
            body: updatedPost,
            failOnStatusCode: false,
        }).then((response) => {
            console.log(postId)
            expect(response.status).to.eq(200)
            expect(response.body).to.deep.equal(updatedPost)
        })
    })
})
