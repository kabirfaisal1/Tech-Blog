const { Post } = require('../models');

const postData = [
    {
        title: "Tyrion's sage advice to Jon Snow (Kit Harington) about being a bastard",
        post_content: "Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.",
        user_id: 4
    },
    {
        title: "Patriarch Tywin Lannister (Charles Dance) putting his grandson",
        post_content: "Any man who must say, 'I am the king,' is no true king. I'll make sure you understand that when I've won your war for you.",
        user_id: 1
    },
    {
        title: "JS quotes",
        post_content: "'This string uses single quotes.';",
        user_id: 2

    },
    {
        title: "JavaScript – what is it used for?",
        post_content: "Developers nowadays use various JavaScript frameworks to create web applications. Browsers are constantly improving daily, so JavaScript has gained popularity in developing robust web applications. ",
        user_id: 5
    },
    {
        title: "Building web servers and developing server-side applications",
        post_content: "websites and apps, developers can also use JavaScript to create simple web servers and build back-end infrastructure using the Node.js library, which provides an environment containing the necessary tools required to run JavaScript on servers.",
        user_id: 3
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;