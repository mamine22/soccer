//business logique

//import mongoose module 
const mongoose = require('mongoose');
//connect APP with DataBase
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');
// import ObjectID
const { ObjectId } = require("mongodb");
//import express module 
const express = require("express")
//import bcrypt module 
const bcrypt = require("bcrypt")
//import multer module 
const multer = require("multer")
//import axios module 
const axios = require("axios")
//import path module 
const path = require("path")
// import body-parser module
const bodyParser = require("body-parser");
//create express application
const app = express()

// Configure Body-parser
// Send JSON responses
app.use(bodyParser.json());

// Get objects from Request
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

// Upload file config
app.use('/images', express.static(path.join('backend/images')))

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}

const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});

// Models Importation
const Match = require("./models/match")
const Player = require("./models/player")
const Team = require("./models/team")
const User = require("./models/user")
const Stadium = require("./models/stadium")
const Reclamation = require("./models/reclamation")
const Comment = require("./models/comment")

// ============================
// ========== Matches =========
// ============================

//GET all Matches
app.get("/matches", (req, res) => {
    console.log("Here into BL: GET all Matches");
    Match.find().then((docs) => {
        console.log("here is docs", docs)
        res.json({ matchesArray: docs, message: "Done!" });
    })
})

//GET Match by ID
app.get("/matches/:id", (req, res) => {
    console.log("Here into BL: GET Match")
    Match.findById({ _id: req.params.id }).then((doc) => {
        res.json({ match: doc });
    });
})

//ADD matches
app.post("/matches", (req, res) => {
    console.log("Here into BL: ADD Match")
    const match = new Match(req.body);
    match.save();
    res.json({ message: "Added match successfly !" });

})

//DELETE Match
app.delete("/matches/:id", (req, res) => {
    let id = req.params.id;
    Match.deleteOne({ _id: id }).then((response) => {
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        } else {
            res.json({ isDeleted: false });
        }
    })
})

//EDIT Match
app.put("/matches", (req, res) => {
    console.log("Here into BL: EDIT Match")
    Match.updateOne({ _id: req.body._id }, req.body).then((response) => {
        if (response.nModified == 1) {
            res.json({ isUpdated: true })
        } else {
            res.json({ isUpdated: false })
        }
    });
});

//Searsh  Matches
app.post(("/matches/searsh", (req, res) => {
    console.log("Here into BL: Searsh Match", req.body)
    let searsh = req.body
    // Match.findOne({ scoreOne: searsh.scoreOne }).then((obj) => { 
    // });
    let findedMatches = matches.filter((obj) => {
        return obj.scoreOne == searsh.scoreOne || obj.scoreTwo == searsh.scoreTwo
    });
    res.json({ searshTab: findedMatches });
}));

// ============================
// =========== Teams ==========
// ============================

//GET all Teams
app.get("/teams", (req, res) => {
    Team.find().then((docs) => {
        console.log("Here into BL: GET all Teams")
        res.json({ teamsTab: docs, message: "Done! " });
    });
});

//GET Team by ID
app.get("/teams/:id", (req, res) => {
    console.log("Here into BL: GET Team")
    let id = req.params.id;
    Team.findOne({ _id: id }).then((doc) => {
        res.json({ team: doc });
    });
});

//ADD Team
app.post("/teams", (req, res) => {
    console.log("Here into BL: ADD team")
    const team = new Team(req.body);
    team.save();
    res.json({ message: "Added team successfly !" });
})

//DELETE Team
app.delete("/teams/:id", (req, res) => {
    console.log("Here into BL: DELETE Team")
    let id = req.params.id;
    Team.deleteOne({ _id: id }).then((response) => {
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        } else {
            res.json({ isDeleted: false });
        }
    })
})

//EDIT Team
app.put("/teams", (req, res) => {
    console.log("Here into BL: EDIT team")
    Team.updateOne({ _id: req.body._id }, req.body).then((response) => {
        if (response.nModified == 1) {
            res.json({ isUpdated: true })
        } else {
            res.json({ isUpdated: false })
        }
    });
})

// ============================
// =========== Players ========
// ============================

//GET all players
app.get("/players", (req, res) => {
    Player.find().then((docs) => {
        console.log("Here into BL: GET all players")
        res.json({ playersTab: docs, message: "Done! " });
    })
})

//GET Player by ID
app.get("/players/:id", (req, res) => {
    let id = req.params.id;
    Player.findOne({ _id: id }).then((doc) => {
        console.log("Here into BL: GET Player")
        res.json({ player: doc });
    })
})

//ADD Player
app.post("/players", (req, res) => {
    console.log("Here into BL: ADD Player")
    const player = new Player(req.body);
    player.save();
    res.json({ message: "Added Player successfly !" });
})

//DELETE Player
app.delete("/players/:id", (req, res) => {
    console.log("Here into BL: DELETE Player")
    let id = req.params.id;
    Player.deleteOne({ _id: id }).then((response) => {
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        } else {
            res.json({ isDeleted: false });
        }
    })
})

//EDIT Player
app.put("/players", (req, res) => {
    console.log("Here into BL: EDIT Player")
    Player.updateOne({ _id: req.body._id }, req.body).then((response) => {
        if (response.nModified == 1) {
            res.json({ isUpdated: true })
        } else {
            res.json({ isUpdated: false })
        }
    });
})
// ============================
// ========== Stadiums ========
// ============================

//GET all Stadiums
app.get("/stadiums", (req, res) => {
    Stadium.find().then((docs) => {
        console.log("Here into BL: GET all Stadiums")
        res.json({ stadiumsTab: docs, message: "Done! " });
    })
})

//GET stadium by ID
app.get("/stadiums/:id", (req, res) => {
    let id = req.params.id;
    Stadium.findOne({ _id: id }).then((doc) => {
        console.log("Here into BL: GET Stadium")
        res.json({ stadium: doc });
    })
})

//ADD stadium
app.post("/stadiums", (req, res) => {
    console.log("Here into BL: ADD stadium")
    const stadium = new Stadium(req.body);
    stadium.save();
    res.json({ message: "Added stadium successfly !" });
})

//DELETE stadium
app.delete("/stadiums/:id", (req, res) => {
    console.log("Here into BL: DELETE Stadium")
    let id = req.params.id;
    Stadium.deleteOne({ _id: id }).then((response) => {
        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        } else {
            res.json({ isDeleted: false });
        }
    })
})

//EDIT Stadium
app.put("/stadiums", (req, res) => {
    console.log("Here into BL: EDIT Stadium")
    Stadium.updateOne({ _id: req.body._id }, req.body).then((response) => {
        if (response.nModified == 1) {
            res.json({ isUpdated: true })
        } else {
            res.json({ isUpdated: false })
        }
    });
})

// ============================
// =========== user ===========
// ============================

//GET Player by ID
app.get("/users/:id", (req, res) => {
    let id = req.params.id;
    User.findOne({ _id: id }).then((doc) => {
        console.log("Here into BL: GET User")
        res.json({ user: doc });
    })
})
//Signup
app.post("/users/signup", multer({ storage: storage }).single('img'), (req, res) => {
    let url = req.protocol + '://' + req.get('host');
    // Traitement logique
    bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
        let imgPath;
        console.log("crypted password", cryptedPwd);
        imgPath = (req.file) ? url + '/images/' + req.file.filename : url + '/images/avatar.png';
        let user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            pwd: cryptedPwd,
            phone: req.body.phone,
            role: req.body.role,
            img: imgPath
        });
        user.save((err, doc) => {
            console.log("here doc", doc)
            console.log("here err", err)
            if (err) {
                res.json({ message: false });
            } else {
                res.json({ message: true });
            }
        });
    });
});

//Login
app.post("/users/signin", (req, res) => {
    console.log("here into BL: Login User", req.body)
    let user = req.body;
    let userToSend;
    User.findOne({ email: user.email }).then((response) => {
        if (!response) {
            res.json({ message: "Please check email !" });
        }
        userToSend = response;
        return bcrypt.compare(user.pwd, response.pwd);
    }).then((pwdResponse) => {
        if (!pwdResponse) {
            res.json({ message: "Please check Password !" });
        } else {
            let user = {
                id: userToSend._id,
                firstName: userToSend.firstName,
                lastName: userToSend.lastName,
                role: userToSend.role,
            }
            res.json({ message: "Welcome !", user: user });

        }
    })
})

app.post("/weather", (req, res) => {
    const country = req.body.country;
    const apiKey = "62ee756a34835483299877a61961cafb";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + country + "&appid=" + apiKey + "&units=metric";
    axios.get(apiUrl).then((response) => {
        console.log('Here response', response);
        const weatherMain = response.data.main;
        const weather = response.data.weather;
        const countryName = response.data.name
        const weatherIcon = "http://openweathermap.org/img/w/" + weather[0].icon + ".png";
        console.log('Here weather main', weatherMain);
        const result = {
            temp: weatherMain.temp,
            pressure: weatherMain.pressure,
            humidity: weatherMain.humidity,
            icon: weatherIcon,
            status: weather[0].main,
            country: countryName,
        }
        res.status(200).json({
            weather: result
        })
    });
});
app.get("/sport-score", (req, res) => {
    const team = req.body.team;
    const apiKey = "6c9a6ce01cmsh1e9e34bd4ac9089p118789jsn90a1fae549c7";
    const apiUrl = "https://sportscore1.p.rapidapi.com/sports/1/teams";
    axios.get(apiUrl).then((response) => {
        console.log('Here response', response);

        res.status(200).json({
            users: result
        })
    });
    // const options = {
    //     method: 'GET',
    //     url: 'https://sportscore1.p.rapidapi.com/sports/1/teams',
    //     params: { page: '1' },
    //     headers: {
    //         'X-RapidAPI-Key': '6c9a6ce01cmsh1e9e34bd4ac9089p118789jsn90a1fae549c7',
    //         'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
    //     }
    // };

    // try {
    //     axios.request(options).then((response) => {
    //         console.log(response.data);
    //         res.json({ users: response.data });

    //     })
    // } catch (error) {
    //     console.error(error);
    // }
});

app.post("/reclamation", (req, res) => {
    let reclam = new Reclamation(req.body);
    console.log(reclam)
    reclam.save();
    res.json({ message: "Welcome !" });

})

app.get("/reclamation/:id"), (req, res) => {
    Reclamation.findOne({ userId: req.params.id }).then((response) => {

    })
}




app.get("/matches/comment/getAll", (req, res) => {
    console.log("Get All Matches With Comments ")
    Match.aggregate(
        [
            {
                $lookup: {
                    from: "comments", // collection to join
                    localField: "_id", //field from the input documents
                    foreignField: "matchId", //field from the documents of the "from" collection
                    as: "comment", // output array field
                },

            },


        ],
        (error, resp) => {
            let allUsers
            let findedUser
            User.find().then((users) => {
                console.log("here is users", users)
                resp.comment.findOne({ idUser: ObjectId(users._id) }).then((docs) => {
                    resp.comment.firstName = users.firstName;
                })

            })
            res.status(200).json({
                matches: resp,
            });

        },

    );
});

app.post("/matches/comment", (req, res) => {
    console.log("Here into addComment", req.body);
    let users;

    User.findOne({ _id: req.body.userId }).then((docs) => {
        const comment = new Comment({
            content: req.body.content,
            userId: ObjectId(req.body.userId),
            matchId: ObjectId(req.body.matchId),
            firstName: docs.firstName,
            lastName: docs.lastName,
            img: docs.img
        });
        comment.save((err, result) => {
            console.log("Error", err);
            if (result) {
                res.status(200).json({
                    message: "Comment added with success",
                });
            }
        });
    })


});
//make app importable
module.exports = app;













