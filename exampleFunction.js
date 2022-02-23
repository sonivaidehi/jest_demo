
function getMostPopularTweet(user) {
    const maxLikes = user.tweets.reduce((max, tweet, index) => {
        if (tweet.likes > max.likes) {
            return {
                index: index,
                likes: tweet.likes
            }
        } else {
            return max
        }
    }, { index: undefined, likes: 0 })
    const topTweet = user.tweets[maxLikes.index]
    return topTweet
}

function getTotalLikes(user) {
    // iterate through the tweet entries and sum the like values
    const totalLikes = user.tweets.reduce((total, tweet) => {
        return total += tweet.likes
    }, 0)

    return totalLikes;
}


module.exports = { getTotalLikes, getMostPopularTweet }