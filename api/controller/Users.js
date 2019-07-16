const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const config = require('../config/config')
const UserSchema = require('../model/Users');
const Users = mongoose.model('Users', UserSchema);

/*
 * Create a new user with a username & password
 */
export function create(req, res, next) {
    Users.findOne({ username: req.body.username }).then((user, err) => {

        if (err) {
            return res.json({ success: false, message: err });
        }

        if (!req.body.username) {
            return res.json({ success: false, message: "Username required" });
        }

        if (user != null) {
            return res.json({ success: false, message: `Username: ${user.username} already in use` })
        }

        if (!req.body.password) {
            return res.json({ success: false, message: "Password required" });
        }

        const salt = bcrypt.genSaltSync(10);

        var userData = {
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, salt),
            salt: salt,
        }

        Users.create(userData, function (err, result) {
            if (err) {
                return res.json({ success: false, message: "Error creating User" });
            } else {
                return res.json({ success: true, message: "User added" });
            }
        });
    });
}

/*
 * Take a username and password and return a JWT token
 */
export function authenticate(req, res, next) {
    
    if (!req.body) {
        return res.json({ success: false, message: "Request body missing" });
    }

    if (!req.body.username) {
        return res.json({ success: false, message: "Username required" });
    }

    if (!req.body.password) {
        return res.json({ success: false, message: "Password required" });
    }

    Users.findOne({ username: req.body.username }).then((user, err) => {
        if (err) {
            throw err;
        }

        if (!user) {
            return res.json({ success: false, message: `Username: ${req.body.username} was not found` })
        }

        const hashedPassword = bcrypt.hashSync(req.body.password, user.salt);

        if (hashedPassword === user.password) {
            var payload = { id: user._id };
            var token = jwt.sign(payload, config.config().JWT_SECRET_KEY);

            return res.json({
                success: true, 
                data: {
                    userId: user._id,
                    username: user.username,
                    token
                }
            })
        } else {
            return res.json({ success: false, message: "Invalid credentials" });
        }
    }).catch(err => console.log(err))
}

/*
 * Take a JWT Token and verify if it is valid 
 */
export function verify(req, res, next) {
    if (!req.body.username) {
        return res.json({ success: false, message: "Username required" });
    }

    if (!req.body.token) {
        return res.json({ success: false, message: "Token required" });
    }

    jwt.verify(req.body.token, config.config().JWT_SECRET_KEY, function (err, payload) {
        if (payload) {
            res.json({ success: true, message: "" });
        } else {
            res.json({ success: false, message: err });
            next()
        }
    })
}
