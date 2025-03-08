const {questionSP,questionWR} = require("../models/question");

const getQuestionSPService = async (quesID) => {
    try {
        let result = await questionSP.findOne({QuestionID : quesID});
        if(result){
            console.log(">>Check result in getQuestionSPService : ",result);
            return result;
        }
        return null;

    } catch (error) {
        console.log(error);
        return null;
    }
}

const getQuestionWRService = async (quesID) => {
    try {
        let result = await questionWR.findOne({QuestionID : quesID});
        if(result){
            console.log(">>Check result in getQuestionWRService : ",result);
            return result;
        }
        return null;

    } catch (error) {
        console.log(error);
        return null;
    }
}

const createQuestionSPService = async (quesID,type,cont1,cont2,img1,img2,ques1,ques2,ques3,pre,resp) => {
    try {
        
        let result = await questionSP.create({
            QuestionID : quesID,
            QuestionType : type,
            Content1 : cont1,
            Content2 : cont2,
            ImagePath1 : img1,
            ImagePath2 : img2,
            Question1 : ques1,
            Question2 : ques2,
            Question3 : ques3,
            PreparationTime : pre,
            ResponseTime : resp,
        })
        console.log("check result : ", result)
        return {
            result
        }

    } catch (error) {
        console.log(error);
        return null;
    }
}

const createQuestionWRService = async (quesID,type,cont1,cont2,img1,img2,ques1,ques2,ques3,pre,resp,sug1,sug2) => {
    try {
        
        let result = await questionWR.create({
            QuestionID : quesID,
            QuestionType : type,
            Content1 : cont1,
            Content2 : cont2,
            ImagePath1 : img1,
            ImagePath2 : img2,
            Question1 : ques1,
            Question2 : ques2,
            Question3 : ques3,
            PreparationTime : pre,
            ResponseTime : resp,
            Suggestion1 : sug1,
            Suggestion2: sug2
        })
        console.log("check result : ", result)
        return {
            result
        }

    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = {
    getQuestionSPService,createQuestionSPService,createQuestionWRService,getQuestionWRService
}