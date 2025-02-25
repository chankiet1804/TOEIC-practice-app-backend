require("dotenv").config();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { name } = require("ejs");
const e = require("express");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

const createUserService = async (name,email,password) => {
    try {
        //hash user password
        const hashPassword = await bcrypt.hash(password, saltRounds);
        //save user to db
        let result = await User.create({
            name: name,
            email: email,
            password: hashPassword,
            role: "user"
        })
        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}

const loginService = async (email1,password) => {
    try {
        //fetch user by email from db
        const user = await User.findOne({email: email1});
        if(user) {
            const isMatchPassword = await bcrypt.compare(password, user.password);
            if(!isMatchPassword) {
                return {
                    EC: 2,
                    EM: "Email/Password không hợp lệ",
                }
            }else {
                const payload = {
                    name: user.name,
                    email: user.email,
                }
                const access_token = jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    {
                        expiresIn: process.env.JWT_EXPIRE
                    }
                );
                return {
                    EC: 0,
                    access_token,
                    user: {
                        email: user.email,
                        name: user.name,
                    }
                };
            }
        }else {
            return {
                EC: 1,
                EM: "Email/Password không hợp lệ",
            }
        }

    } catch (error) {
        console.log(error);
        return null;
    }
}


module.exports = {
    createUserService,loginService
}