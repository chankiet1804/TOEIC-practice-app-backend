require("dotenv").config();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

const createUserService = async (name,email,password) => {
    try {
        //check user exist in db
        const user = await User.findOne({email});
        if(user){
            return {
                EC: 1,
            }
        }

        //hash user password
        const hashPassword = await bcrypt.hash(password, saltRounds);
        //save user to db
        let result = await User.create({
            name: name,
            email: email,
            password: hashPassword,
            role: "user"
        })
        const userInfor = {
            name : result.name,
            email : result.email
        };
        return {
            EC: 0,
            userInfor
        }

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
                    userId: user._id, // them userID vao acess_token de tuy van cau tra loi dua vao userID
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
                        userId: user._id, // Trả về userID để frontend có thể sử dụng nếu cần
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

const getUserService = async () => {
    try {
        let result = await User.find({}).select("-password -__v");
        return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}


module.exports = {
    createUserService,loginService,getUserService
}