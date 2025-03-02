const { createAnswerSPService, getAnswerSPService } = require("../services/answerService");


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

module.exports = {
    getAnswerSP,
    createAnswerSP
}