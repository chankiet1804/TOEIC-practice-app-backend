const express = require('express');
const { createUser,handleLogin, getUser } = require('../controllers/userController');
const auth = require('../middleware/auth');
const { getQuestionSP, createQuestionSP, createQuestionWR, getQuestionWR } = require('../controllers/questionController');
const { createAnswerSP, getAnswerSP, createAnswerWR, getAnswerWR } = require('../controllers/answerController');

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

routerAPI.post("/answer/create/speaking",createAnswerSP);
routerAPI.get("/answer/speaking",getAnswerSP);

routerAPI.post("/question/create/writing",createQuestionWR)
routerAPI.get("/question/writing",getQuestionWR)

routerAPI.post("/answer/create/writing",createAnswerWR);
routerAPI.get("/answer/writing",getAnswerWR);


module.exports = routerAPI; //export default