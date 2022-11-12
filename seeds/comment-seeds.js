const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Wake up World and code"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "How do you import file in javascript"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Today is nov 11"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "OMG Coding is fun"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "IDK what to write"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "this is nice way to connect all Software eng"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "I like testing with cy"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;