const { getTotalLikes, getMostPopularTweet } = require('../exampleFunction')

const user = {
    username: "John Doe",
    tweets:[ 
      { 
        likes: 200,
        content: "Tweet 1 content..."
      },
      {
        likes: 90,
        content: "Tweet 2 content..."
      }
    ]
  }

describe("getTotalLikes", ()=>{
    test("should return the total likes of a user", ()=>{
       expect(getTotalLikes(user)).toBe(290)
    }) 
})

describe('getMostPopularTweet', () => {
    test('should return the most popular tweet of a user', () => {
      const output = {
          likes: 200,
          content: "Tweet 1 content..."
      }
      expect( getMostPopularTweet(user)).toEqual(output)
    })
  })