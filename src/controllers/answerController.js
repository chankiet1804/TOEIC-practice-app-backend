const { createAnswerSPService, getAnswerSPService, createAnswerWRService, getAnswerWRService } = require("../services/answerService");


const getAnswerSP = async (req,res) => {
    console.log(">>check req.query in getAnswerSP : ", req.query)
    const {UserID,QuestionID} = req.query;
    const data = await getAnswerSPService(UserID,QuestionID);
    
    return res.status(200).json(data);
}

const createAnswerSP = async (req,res) => {
    
    //console.log(">>> check req.body: ", req.body)
    const {
        UserID,
        QuestionID,
        RecordingPath ,
        ContentOfSpeaking 
    } = req.body;
    const data = await createAnswerSPService(
        UserID,
        QuestionID,
        RecordingPath ,
        ContentOfSpeaking 
        );
    
    return res.status(200).json(data);
}

const getAnswerWR = async (req,res) => {
    console.log(">>check req.query in getAnswerWR : ", req.query)
    const {UserID,QuestionID} = req.query;
    const data = await getAnswerWRService(UserID,QuestionID);
    
    return res.status(200).json(data);
}

const createAnswerWR = async (req,res) => {
    
    //console.log(">>> check req.body: ", req.body)
    const {
        UserID,
        QuestionID,
        Content,
        Feedback
    } = req.body;
    const data = await createAnswerWRService(
        UserID,
        QuestionID,
        Content,
        Feedback
        );
    return res.status(200).json(data);
}

module.exports = {
    getAnswerSP,
    createAnswerSP,
    createAnswerWR,
    getAnswerWR
}