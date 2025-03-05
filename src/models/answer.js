const mongoose = require('mongoose');

const answerSPSchema = new mongoose.Schema({
    UserID : String,
    QuestionID : String,
    RecordingPath : String,
    ContentOfSpeaking : String
});

const answerWRSchema = new mongoose.Schema({
    UserID : String,
    QuestionID : String,
    Content : String,
    Feedback : String
});

const answerSP = mongoose.model('answerSP', answerSPSchema);
const answerWR = mongoose.model('answerWR', answerWRSchema);

module.exports = {answerSP,answerWR};
