const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    institution: { type: String },
    course: { type: String }
});

const EventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    participants: [ParticipantSchema] 
});

module.exports = mongoose.model('Event', EventSchema);
