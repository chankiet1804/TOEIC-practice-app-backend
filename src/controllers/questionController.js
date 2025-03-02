const { getQuestionSPService, createQuestionSPService } = require("../services/questionService");

const getQuestionSP = async (req,res) => {
    console.log(">>check req.query in getQuestionSP : ", req.query)
    const {QuestionID} = req.query;
    const data = await getQuestionSPService(QuestionID);
    
    return res.status(200).json(data);
}

const createQuestionSP = async (req,res) => {
    
    console.log(">>> check req.body: ", req.body)
    const {
        QuestionID,
        QuestionType,
        Content1,
        Content2,
        ImagePath1,
        ImagePath2,
        Question1,
        Question2,
        Question3,
        PreparationTime,
        ResponseTime
    } = req.body;
    const data = await createQuestionSPService(QuestionID,
        QuestionType,
        Content1,
        Content2,
        ImagePath1,
        ImagePath2,
        Question1,
        Question2,
        Question3,
        PreparationTime,
        ResponseTime);
    
    return res.status(200).json(data);
}

module.exports = {
    getQuestionSP,createQuestionSP
}