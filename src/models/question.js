const mongoose = require('mongoose');

const questionSPSchema = new mongoose.Schema({
    QuestionID : String,
    QuestionType : String,
    Content1 : String,
    Content2 : String,
    ImagePath1 : String,
    ImagePath2 : String,
    Question1 : String,
    Question2 : String,
    Question3 : String,
    PreparationTime : Number,
    ResponseTime : Number,
});

const questionWRSchema = new mongoose.Schema({
    QuestionID : String,
    QuestionType : String,
    Content1 : String,
    Content2 : String,
    ImagePath1 : String,
    ImagePath2 : String,
    Question1 : String,
    Question2 : String,
    Question3 : String,
    PreparationTime : Number,
    ResponseTime : Number,
    Suggestion1 : String,
    Suggestion2 : String
});

const questionSP = mongoose.model('questionSP', questionSPSchema);

const questionWR = mongoose.model('questionWR', questionWRSchema);

module.exports = {
    questionSP,
    questionWR
};
