const express = require('express');
const { createUser,handleLogin, getUser } = require('../controllers/userController');
const auth = require('../middleware/auth');
const { getQuestionSP, createQuestionSP } = require('../controllers/questionController');

const routerAPI = express.Router();

routerAPI.all('*', auth);

routerAPI.get('/', (req, res) => {
    return res.status(200).json("Hello world api toeic app")
})

routerAPI.post("/register",createUser)
routerAPI.post("/login",handleLogin)
routerAPI.get("/user",getUser)

routerAPI.post("/question/create/speaking",createQuestionSP)
routerAPI.get("/question/speaking",getQuestionSP)


module.exports = routerAPI; //export default