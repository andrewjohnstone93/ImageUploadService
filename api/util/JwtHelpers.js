const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const UserSchema = require('../model/Users');
const Users = mongoose.model('Users', UserSchema);
const config = require('../config/config')

/**
 * Middleware that gets JWT Token from user request, verifys 
 * and places user object there for next function in middleware 
 * to use.
 */
export function jwtMiddleWare(req, res, next) {
    try {
        const auth = req.headers.authorization;

        if(!auth) {
            next()
        } else {
        const token = req.headers.authorization.split(" ")[1]

        jwt.verify(token, config.config().JWT_SECRET_KEY, function (err, payload) {
            if (payload) {
                Users.findById(payload.id).then((JwtUser)=> {
                        req.JwtUser=JwtUser;
                        next()
                })
            } else {
                console.log(err)
                next()
            }
        })
    }
    } catch (e) {
        console.log(e)
        next()
    }
}

/**
 * Middleware that checks if user is JwtAutheticated
 */
export function proctectRoute(req,res,next){
    console.log(req.JwtUser)
    if(req.JwtUser){
       next();
    } else{
        return res.json({ success: false, message: "Login required required" });
    }
}
