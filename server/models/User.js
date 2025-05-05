const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    sessionId: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    lastSeen: { type: Date, default: null }
})

module.exports = momgoose.model('User', userSchema)