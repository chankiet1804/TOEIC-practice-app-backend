const mongoose = require('mongoose');

const answerSPSchema = new mongoose.Schema({
    UserID : String,
    QuestionID : String,
    RecordingPath : String,
    ContentOfSpeaking : String
});

const answerSP = mongoose.model('answerSP', answerSPSchema);

module.exports = answerSP;
