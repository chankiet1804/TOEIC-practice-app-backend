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
        let result = await answerSP.findOneAndUpdate(
            { UserID: userID, QuestionID: quesID }, // Điều kiện tìm kiếm
            { 
                RecordingPath: path, 
                ContentOfSpeaking: content 
            }, // Dữ liệu cần cập nhật
            { 
                new: true, // Trả về document sau khi cập nhật
                upsert: true // Nếu không tìm thấy, sẽ tạo mới
            }
        );

        return { result };

    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = {
    getAnswerSPService,
    createAnswerSPService
}