const answerSP = require("../models/answer");

const getAnswerSPService = async (UserID, QuestionID) => {
    try {
        let result = await answerSP.findOne({UserID, QuestionID});
        if(result){
            console.log(">>Check result in getAnswerSPService : ",result);
            return result;
        }
        return null;

    } catch (error) {
        console.log(error);
        return null;
    }
}

const createAnswerSPService = async (userID,quesID,path,content) => {
    try {
        // can bo sung them neu cua tra loi nay da ton tai thi sua lai data cu chu ko tao moi

        let result = await answerSP.create({
            UserID : userID,
            QuestionID : quesID,
            RecordingPath : path,
            ContentOfSpeaking : content

        })
        //console.log("check result in createAnswerSPService : ", result)
        return {
            result
        }

    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = {
    getAnswerSPService,
    createAnswerSPService
}