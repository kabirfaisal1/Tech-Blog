const { User } = require('../models');

const userData = [
    {
        username: "Daenerys Targaryen",
        twitter: "DaenerysTargaryen",
        github: "GOT_dragonmother",
        email: "Daenerys.Targaryen@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "Jon Snow",
        twitter: "",
        github: "GOT_jonSnow",
        email: "jon_snow@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "Sansa Strak",
        twitter: "Sansa",
        github: "GOT_SansaStrak",
        email: "Sansa_Strak@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "Tyrion Lannister",
        twitter: "TLannister",
        github: "GOT_TLannister",
        email: "Tyrion Lannister@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "Missandei L",
        twitter: "MissandeiL",
        github: "GOT_Missandei",
        email: "Missandei_L@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "Margaery Tyrell",
        twitter: "Margaery_Tyrell",
        github: "GOT_MargaeryTyrell",
        email: "Margaery Tyrell@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;