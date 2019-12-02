const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    question: { type: String, required: false},
    answera: { type: String, required: false},
    answerb: { type: String, required: false},
    answerc: { type: String, required: false},
    answerd: { type: String, required: false},
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Note', NoteSchema)